import sys
import io
# Override stdout and stderr to handle Unicode (Thai characters) on Windows consoles
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import os
import time
import json
import urllib.request
import urllib.error
import subprocess
import datetime
import re

# Configuration
CHECK_INTERVAL_HOURS = 1
CHECK_INTERVAL_SECONDS = CHECK_INTERVAL_HOURS * 3600
LAST_POST_ID_FILE = "last_post_id.txt"
LOG_FILE = "sync_service.log"
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

os.chdir(WORKSPACE_DIR)

def log(message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    msg = f"[{timestamp}] {message}"
    print(msg)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def get_latest_post():
    url = "http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page=1"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    with urllib.request.urlopen(req, timeout=15) as response:
        posts = json.loads(response.read().decode('utf-8'))
        if posts and len(posts) > 0:
            return posts[0]
    return None

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
        
        post = get_latest_post()
        if not post:
            log("No posts found on the server.")
            return

        current_id = post.get('id', 0)
        title = post.get('title', {}).get('rendered', 'Untitled')
        
        if current_id == 0:
            log("Invalid post data received.")
            return

        log(f"Latest post on server: ID={current_id}, Title='{title}'")
        
        # If it's a new post
        if current_id > last_id:
            log(f"NEW POST DETECTED! Previous ID: {last_id}, New ID: {current_id}")
            
            # 1. Download new assets
            download_featured_image(post)
            
            # 2. Synchronize Git repository (vite production build omitted for 10x faster dynamic sync)
            log("Synchronizing Git repository...")
            subprocess.run(["git", "add", "."], check=True)
            commit_msg = f"chore(sync): automated update for new school post ID {current_id}"
            subprocess.run(["git", "commit", "-m", commit_msg], check=True)
            subprocess.run(["git", "push", "origin", "main"], check=True)
            
            # 3. Save new post ID
            with open(LAST_POST_ID_FILE, "w") as f:
                f.write(str(current_id))
                
            log(f"Update completed and deployed successfully for post ID {current_id}!")
        else:
            log("Website is up-to-date. No new posts detected.")
            
    except Exception as e:
        log(f"Error during update process: {e}")

def main():
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

if __name__ == "__main__":
    main()
