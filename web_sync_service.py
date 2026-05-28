import sys
import io
import os
import time
import json
import urllib.request
import urllib.error
import subprocess
import datetime
import re

# pythonw.exe has no console, so stdout/stderr may be None.
# Safely redirect only when running in a console (python.exe).
try:
    if sys.stdout is not None and hasattr(sys.stdout, 'buffer'):
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    if sys.stderr is not None and hasattr(sys.stderr, 'buffer'):
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')
except Exception:
    pass

# Configuration
CHECK_INTERVAL_HOURS = 1
CHECK_INTERVAL_SECONDS = CHECK_INTERVAL_HOURS * 3600
LAST_POST_ID_FILE = "last_post_id.txt"
LOG_FILE = "sync_service.log"
LOCK_FILE = "sync_service.lock"
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

os.chdir(WORKSPACE_DIR)

# Single-instance guard: prevent duplicate processes from running simultaneously
def _pid_exists(pid):
    """Check if a PID is alive using only the standard library (cross-platform)."""
    try:
        if sys.platform == 'win32':
            import ctypes
            SYNCHRONIZE = 0x00100000
            handle = ctypes.windll.kernel32.OpenProcess(SYNCHRONIZE, False, pid)
            if handle:
                ctypes.windll.kernel32.CloseHandle(handle)
                return True
            return False
        else:
            os.kill(pid, 0)
            return True
    except Exception:
        return False

def acquire_lock():
    """Returns True if we are the only instance running."""
    if os.path.exists(LOCK_FILE):
        try:
            with open(LOCK_FILE, 'r') as f:
                old_pid = int(f.read().strip())
            if _pid_exists(old_pid):
                return False  # Another instance is running
        except Exception:
            pass  # PID file corrupted, continue
    # Write our own PID
    with open(LOCK_FILE, 'w') as f:
        f.write(str(os.getpid()))
    return True

def release_lock():
    try:
        if os.path.exists(LOCK_FILE):
            os.remove(LOCK_FILE)
    except Exception:
        pass


def log(message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    msg = f"[{timestamp}] {message}"
    print(msg)
    
    # Auto-rotate log if it exceeds 1MB to prevent disk space waste
    try:
        if os.path.exists(LOG_FILE) and os.path.getsize(LOG_FILE) > 1 * 1024 * 1024:
            with open(LOG_FILE, "r", encoding="utf-8", errors="ignore") as f:
                lines = f.readlines()
            # Keep only the last 1000 lines
            with open(LOG_FILE, "w", encoding="utf-8") as f:
                f.writelines(lines[-1000:])
    except Exception:
        pass

    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def get_latest_posts(limit=10):
    url = f"http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page={limit}"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    with urllib.request.urlopen(req, timeout=15) as response:
        posts = json.loads(response.read().decode('utf-8'))
        if posts and len(posts) > 0:
            return posts
    return []

def download_featured_image(post):
    try:
        if '_embedded' in post and 'wp:featuredmedia' in post['_embedded'] and post['_embedded']['wp:featuredmedia']:
            media = post['_embedded']['wp:featuredmedia'][0]
            img_url = media.get('source_url', '')
            if img_url:
                filename = img_url.split('/')[-1]
                # Ensure clean ASCII filename to bypass GitHub Pages / Windows path issues
                filename = re.sub(r'[^a-zA-Z0-9_.-]', '_', filename)
                target_path = os.path.join('images/original', filename)
                
                os.makedirs('images/original', exist_ok=True)
                
                req = urllib.request.Request(
                    img_url, 
                    headers={'User-Agent': 'Mozilla/5.0'}
                )
                with urllib.request.urlopen(req, timeout=20) as response:
                    with open(target_path, 'wb') as f:
                        f.write(response.read())
                log(f"Downloaded new featured image: {filename}")
                return target_path
    except Exception as e:
        log(f"Error downloading image: {e}")
    return None

def run_sync():
    log("Checking for updates from Joseph Upatham School website...")
    try:
        # Load last known post ID
        last_id = 0
        if os.path.exists(LAST_POST_ID_FILE):
            with open(LAST_POST_ID_FILE, "r") as f:
                try:
                    last_id = int(f.read().strip())
                except:
                    pass
        
        posts = get_latest_posts(limit=10)
        if not posts:
            log("No posts found on the server.")
            return

        # Find all posts newer than last_id, sorted oldest to newest
        new_posts = [p for p in posts if p.get('id', 0) > last_id]
        new_posts.sort(key=lambda p: p.get('id', 0))

        if len(new_posts) > 0:
            log(f"NEW POSTS DETECTED! Previous Max ID: {last_id}, New Posts Count: {len(new_posts)}")
            
            # 1. Download featured images for all new posts
            downloaded_count = 0
            max_new_id = last_id
            for p in new_posts:
                pid = p.get('id', 0)
                title = p.get('title', {}).get('rendered', 'Untitled')
                log(f"Processing post ID: {pid}, Title: '{title}'")
                download_featured_image(p)
                downloaded_count += 1
                max_new_id = max(max_new_id, pid)
            
            # 2. Synchronize Git repository (vite production build omitted for 10x faster dynamic sync)
            log("Synchronizing Git repository...")
            subprocess.run(["git", "add", "."], check=True)
            commit_msg = f"chore(sync): automated update for {len(new_posts)} new school post(s). Max ID: {max_new_id}"
            subprocess.run(["git", "commit", "-m", commit_msg], check=True)
            subprocess.run(["git", "push", "origin", "main"], check=True)
            
            # 3. Save maximum new post ID
            with open(LAST_POST_ID_FILE, "w") as f:
                f.write(str(max_new_id))
                
            log(f"Update completed and deployed successfully. Processed {downloaded_count} post(s), max ID: {max_new_id}!")
        else:
            log(f"Website is up-to-date (Latest server post ID is {posts[0].get('id', 0)}). No new posts detected.")
            
    except Exception as e:
        log(f"Error during update process: {e}")

def main():
    if not acquire_lock():
        # Another instance is already running, exit silently
        try:
            log("Another sync service instance is already running. Exiting.")
        except Exception:
            pass
        sys.exit(0)

    try:
        log("==================================================")
        log("School Website Automated Sync Service Started")
        log(f"Interval: {CHECK_INTERVAL_HOURS} hour(s) ({CHECK_INTERVAL_SECONDS} seconds)")
        log("==================================================")
        
        while True:
            try:
                run_sync()
            except Exception as e:
                log(f"Unexpected error in main loop: {e}")
                
            log(f"Sleeping for {CHECK_INTERVAL_HOURS} hour(s)...")
            time.sleep(CHECK_INTERVAL_SECONDS)
    finally:
        release_lock()

if __name__ == "__main__":
    main()
