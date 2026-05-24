/**
 * Application Core Logic - Joseph Upatam School Modern Web Portal
 * Features: Dark/Light Mode, Interactive Department Tabs, Robust SVG Image Fallback System, Scroll Effects
 * Author: Antigravity AI
 * Encoding: UTF-8 (ภาษาไทยสมบูรณ์)
 */

import { schoolData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Theme Management (Dark / Light Mode)
    // ==========================================
    const htmlElement = document.documentElement;
    const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    
    // Check saved theme or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }

    // Smooth Theme Toggle Handler for all buttons
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            let newTheme = 'light';
            
            if (currentTheme === 'light') {
                newTheme = 'dark';
            }
            
            // Add smooth transition layer temporary class
            document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Trigger logo redraw if necessary to adapt fallback icons
            const logo = document.getElementById('school-logo');
            if (logo && logo.classList.contains('fallback-svg-active')) {
                // Re-apply correct colored fallback logo
                applyLogoFallback(logo);
            }
            const footerLogo = document.getElementById('footer-school-logo');
            if (footerLogo && footerLogo.classList.contains('fallback-svg-active')) {
                applyLogoFallback(footerLogo);
            }
        });
    });

    // ==========================================
    // 2. Interactive Department Tab Toggling
    // ==========================================
    const tabButtons = document.querySelectorAll('.dept-tab-btn');
    const tabPanes = document.querySelectorAll('.dept-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPaneId = button.getAttribute('data-target');
            
            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Add active class to target pane with fade animation
            const targetPane = document.getElementById(`pane-${targetPaneId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Global Department Switcher function (for quick links in footer)
    window.switchDept = (deptId) => {
        const matchingBtn = document.querySelector(`.dept-tab-btn[data-target="${deptId}"]`);
        if (matchingBtn) {
            // Trigger click
            matchingBtn.click();
            // Scroll smoothly to departments section
            const deptSection = document.getElementById('departments');
            if (deptSection) {
                deptSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // ==========================================
    // 3. Navigation Bar & Back to Top Scroll Effects
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Navbar shrink on scroll
        if (navbar) {
            if (scrollPos > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Back to top visibility
        if (backToTopBtn) {
            if (scrollPos > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Active link on scroll spying
        let activeSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                activeSectionId = section.getAttribute('id');
            }
        });

        if (activeSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Back to top action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 4. Mobile Menu Hamburger Toggle
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileMenuToggle.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileMenuToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // ==========================================
    // Dynamic Rendering of Gospel and Gallery Components
    // ==========================================

    // A. Dynamic Gospel Values Rendering
    const gospelContainer = document.getElementById('gospel-values-container');
    if (gospelContainer) {
        gospelContainer.innerHTML = '';
        const icons = {
            'J': 'fa-solid fa-scale-balanced',
            'O': 'fa-solid fa-hands-praying',
            'S': 'fa-solid fa-ear-listen',
            'E': 'fa-solid fa-brain',
            'P': 'fa-solid fa-shield-halved',
            'H': 'fa-solid fa-hands-bowing'
        };
        const bodies = {
            'J': 'ความเที่ยงธรรมและสุจริต มุ่งสร้างความเท่าเทียม ความรัก และความซื่อตรงในทุกมิติชีวิตของสังคม',
            'O': 'การเชื่อฟังและไว้วางใจ นอบน้อมต่อคำสอนของผู้ใหญ่ ครูอาจารย์ และเคารพกฎกติกาด้วยความจริงใจ',
            'S': 'ความเงียบและไตร่ตรอง ฝึกฝนจิตใจให้สงบนิ่งเพื่อรับฟังเสียงสัจธรรม ความคิดสร้างสรรค์ และสติปัญญา',
            'E': 'ความฉลาดในประสบการณ์ รู้จักประยุกต์เรียนรู้จากบทเรียนชีวิต ก้าวข้ามอุปสรรคและพัฒนาความรู้สู่การปฏิบัติจริง',
            'P': 'ความสุขุม รอบคอบ ประหยัดและมัธยัสถ์ คิดทบทวนก่อนทำสิ่งใดๆ มีเหตุผลและปกป้องตนเองจากความประมาท',
            'H': 'ความถ่อมตนและนอบน้อม ไม่เย่อหยิ่งจองหอง ยอมรับความเห็นของผู้อื่น และพร้อมรับการพัฒนาตนเองอย่างต่อเนื่อง'
        };
        
        schoolData.gospelValues.values.forEach(item => {
            const card = document.createElement('div');
            card.className = 'gospel-card card-glow';
            card.innerHTML = `
                <div class="gospel-letter-badge">${item.key}</div>
                <div class="gospel-icon-wrapper">
                    <i class="${icons[item.key] || 'fa-solid fa-star'}"></i>
                </div>
                <h3 class="gospel-term">${item.term}</h3>
                <p class="gospel-desc">${item.desc}</p>
                <p class="gospel-body">${bodies[item.key] || ''}</p>
            `;
            gospelContainer.appendChild(card);
        });
    }

    // B. Dynamic Gallery Rendering
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        schoolData.images.gallery.forEach(item => {
            const card = document.createElement('div');
            card.className = 'gallery-card card-glow';
            card.setAttribute('data-category', item.category);
            card.innerHTML = `
                <img src="${item.url}" alt="${item.desc}" class="gallery-img">
                <div class="gallery-overlay-mask">
                    <span class="gallery-lbl">${item.category}</span>
                    <p class="gallery-caption">${item.desc}</p>
                </div>
            `;
            galleryContainer.appendChild(card);
        });
    }

    // C. Gallery Tabs Filtering Logic
    const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
    if (galleryTabs.length > 0 && galleryContainer) {
        galleryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all tabs
                galleryTabs.forEach(t => t.classList.remove('active'));
                // Add active to clicked tab
                tab.classList.add('active');
                
                const selectedCategory = tab.getAttribute('data-category');
                const galleryCards = galleryContainer.querySelectorAll('.gallery-card');
                
                galleryCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedCategory === 'ทั้งหมด' || cardCategory === selectedCategory) {
                        card.style.display = 'block';
                        // Trigger CSS animation
                        card.style.animation = 'none';
                        void card.offsetWidth; // force reflow
                        card.style.animation = 'fade-scale-in 0.4s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ==========================================
    // 5. Robust SVG Image Fallback System
    // ==========================================
    
    // Function to generate dynamic premium SVGs
    function getFallbackSvgDataUrl(type) {
        let svgString = '';
        
        switch (type) {
            case 'hero':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>
                    <defs>
                        <linearGradient id='hero-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#00401e'/>
                            <stop offset='60%' stop-color='#005a2b'/>
                            <stop offset='100%' stop-color='#0b1109'/>
                        </linearGradient>
                        <linearGradient id='gold-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#ffcc00'/>
                            <stop offset='100%' stop-color='#cca300'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#hero-grad)'/>
                    <!-- Abstract Background Paths for premium aesthetic -->
                    <path d='M-100 450 C 300 350, 600 650, 1300 450 L1300 600 L-100 600 Z' fill='#ffcc00' fill-opacity='0.06'/>
                    <path d='M-200 300 C 400 200, 800 600, 1400 350 L1400 600 L-200 600 Z' fill='#ffcc00' fill-opacity='0.03'/>
                    <path d='M-100 500 C 400 400, 800 600, 1300 380 L1300 600 L-100 600 Z' fill='#005a2b' fill-opacity='0.3'/>
                    <!-- Sacred Geometry overlay -->
                    <circle cx='600' cy='240' r='180' fill='none' stroke='url(#gold-grad)' stroke-width='1' stroke-dasharray='10 5' opacity='0.2'/>
                    <circle cx='600' cy='240' r='140' fill='none' stroke='url(#gold-grad)' stroke-width='1.5' opacity='0.3'/>
                    <!-- Shield Emblem -->
                    <path d='M600,165 L645,185 L645,230 C645,260 600,285 600,285 C600,285 555,260 555,230 L555,185 Z' fill='url(#gold-grad)'/>
                    <path d='M600,173 L637,190 L637,227 C637,252 600,274 600,274 C600,274 563,252 563,227 L563,190 Z' fill='#005a2b'/>
                    <!-- Cross Inside -->
                    <path d='M597,185 H603 V250 H597 Z M585,200 H615 V206 H585 Z' fill='url(#gold-grad)'/>
                    <!-- Premium Text -->
                    <text x='600' y='450' font-family='Prompt, sans-serif' font-size='36' font-weight='bold' fill='#ffcc00' text-anchor='middle' letter-spacing='3'>โรงเรียนยอแซฟอุปถัมภ์</text>
                    <text x='600' y='500' font-family='Sarabun, sans-serif' font-size='20' fill='#ffffff' text-anchor='middle' opacity='0.8'>JOSEPH UPATAM SCHOOL | SAM PHRAN</text>
                </svg>`;
                break;
                
            case 'history':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
                    <defs>
                        <linearGradient id='hist-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#005a2b'/>
                            <stop offset='100%' stop-color='#002813'/>
                        </linearGradient>
                        <linearGradient id='gold-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#ffcc00'/>
                            <stop offset='100%' stop-color='#cca300'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#hist-grad)'/>
                    <!-- Artistic background circles -->
                    <circle cx='400' cy='300' r='220' fill='none' stroke='#ffcc00' stroke-width='1' opacity='0.1'/>
                    <circle cx='400' cy='300' r='180' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.15'/>
                    <!-- Catholic Vintage Shield Symbol -->
                    <path d='M400,120 C460,120 520,95 520,95 L520,310 C520,430 400,500 400,500 C400,500 280,430 280,310 L280,95 C280,95 340,120 400,120 Z' fill='url(#gold-grad)' fill-opacity='0.08' stroke='url(#gold-grad)' stroke-width='3'/>
                    <!-- Cross Symbol -->
                    <path d='M393,170 H407 V380 H393 Z M360,225 H440 V239 H360 Z' fill='url(#gold-grad)'/>
                    <!-- Academic open book at base of cross -->
                    <path d='M350,370 C370,360 400,375 400,375 C400,375 430,360 450,370 L450,410 C430,400 400,415 400,415 C400,415 370,400 350,410 Z' fill='url(#gold-grad)'/>
                    <path d='M400,375 V415' stroke='#002813' stroke-width='2'/>
                    <text x='400' y='540' font-family='Prompt, sans-serif' font-size='28' font-weight='bold' fill='#ffcc00' text-anchor='middle' letter-spacing='1'>สถาปนา พ.ศ. 2508</text>
                </svg>`;
                break;
                
            case 'boys':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'>
                    <defs>
                        <linearGradient id='boys-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#004d25'/>
                            <stop offset='100%' stop-color='#002813'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#boys-grad)'/>
                    <circle cx='300' cy='180' r='90' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.15'/>
                    <!-- Gentleman Shield Badge -->
                    <path d='M300,120 L340,140 L340,190 C340,220 300,240 300,240 C300,240 260,220 260,190 L260,140 Z' fill='#ffcc00' fill-opacity='0.15' stroke='#ffcc00' stroke-width='2'/>
                    <!-- Gentleman Silhouette Icon -->
                    <path d='M300,150 A15 15 0 1 0 300,180 A15 15 0 1 0 300,150 Z M300,190 C280,190 265,200 265,215 L335,215 C335,200 320,190 300,190 Z' fill='#ffcc00'/>
                    <path d='M220,290 C220,290 250,260 300,260 C350,260 380,290 380,290 L380,310 C380,310 350,330 300,330 C250,330 220,310 220,310 Z' fill='#ffcc00' fill-opacity='0.1'/>
                    <text x='300' y='375' font-family='Prompt, sans-serif' font-size='22' font-weight='bold' fill='#ffcc00' text-anchor='middle'>GENTLEMAN | สุภาพบุรุษ ยอแซฟอุปถัมภ์</text>
                    <text x='300' y='410' font-family='Sarabun, sans-serif' font-size='15' fill='#ffffff' text-anchor='middle' opacity='0.7'>อ่อนโยน ซื่อสัตย์ พลานามัยสมบูรณ์</text>
                </svg>`;
                break;
                
            case 'girls':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'>
                    <defs>
                        <linearGradient id='girls-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#2b0014'/>
                            <stop offset='100%' stop-color='#14000a'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#girls-grad)'/>
                    <circle cx='300' cy='180' r='90' fill='none' stroke='#ff6ebb' stroke-width='2' stroke-dasharray='6 4' opacity='0.25'/>
                    <!-- Lady Fleur-de-lis / Heart Crest -->
                    <path d='M300,125 C300,125 322,95 345,115 C365,135 330,175 300,205 C270,175 235,135 255,115 C278,95 300,125 300,125 Z' fill='#ff6ebb' fill-opacity='0.3' stroke='#ff6ebb' stroke-width='2'/>
                    <!-- Lady Profile Icon -->
                    <circle cx='300' cy='145' r='14' fill='#ff6ebb'/>
                    <path d='M300,165 C288,165 277,175 277,188 L323,188 C323,175 312,165 300,165 Z' fill='#ff6ebb'/>
                    <text x='300' y='375' font-family='Prompt, sans-serif' font-size='22' font-weight='bold' fill='#ff6ebb' text-anchor='middle'>LADY | กุลสตรีสง่างาม</text>
                    <text x='300' y='410' font-family='Sarabun, sans-serif' font-size='15' fill='#ffffff' text-anchor='middle' opacity='0.7'>มีกิริยางดงาม มีเมตตา อ่อนโยนแต่ไม่อ่อนแอ</text>
                </svg>`;
                break;
                
            case 'ep':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'>
                    <defs>
                        <linearGradient id='ep-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#051a2e'/>
                            <stop offset='100%' stop-color='#010b14'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#ep-grad)'/>
                    <!-- Globe Grid overlay -->
                    <circle cx='300' cy='180' r='90' fill='none' stroke='#ffcc00' stroke-width='1.5' opacity='0.2'/>
                    <ellipse cx='300' cy='180' rx='40' ry='90' fill='none' stroke='#ffcc00' stroke-width='1.2' opacity='0.3'/>
                    <ellipse cx='300' cy='180' rx='90' ry='30' fill='none' stroke='#ffcc00' stroke-width='1.2' opacity='0.3'/>
                    <line x1='210' y1='180' x2='390' y2='180' stroke='#ffcc00' stroke-width='1.5' opacity='0.4'/>
                    <!-- Globe core -->
                    <path d='M295,140 L305,140 L305,220 L295,220 Z' fill='#ffcc00' opacity='0.8'/>
                    <path d='M275,175 L325,175 L325,185 L275,185 Z' fill='#ffcc00' opacity='0.8'/>
                    <text x='300' y='375' font-family='Prompt, sans-serif' font-size='22' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ENGLISH PROGRAM | BILINGUAL</text>
                    <text x='300' y='410' font-family='Sarabun, sans-serif' font-size='15' fill='#ffffff' text-anchor='middle' opacity='0.7'>ก้าวไกลสู่นานาชาติ บนรากฐานคุณธรรมคาทอลิก</text>
                </svg>`;
                break;

            case 'kindergarten':
                svgString = `
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'>
                    <defs>
                        <linearGradient id='kid-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stop-color='#005a2b'/>
                            <stop offset='100%' stop-color='#ffcc00'/>
                        </linearGradient>
                    </defs>
                    <rect width='100%' height='100%' fill='url(#kid-grad)'/>
                    <circle cx='300' cy='180' r='90' fill='none' stroke='#ffffff' stroke-width='2' stroke-dasharray='5 5' opacity='0.3'/>
                    <!-- Kids Icon Badge -->
                    <circle cx='300' cy='150' r='18' fill='#ffffff' fill-opacity='0.2' stroke='#ffffff' stroke-width='2'/>
                    <path d='M300,138 C294,138 290,142 290,148 C290,158 300,165 300,165 C300,165 310,158 310,148 C310,142 306,138 300,138 Z' fill='#ffcc00'/>
                    <path d='M275,200 C275,190 285,180 300,180 C315,180 325,190 325,200 L325,225 H275 Z' fill='#ffffff' fill-opacity='0.3' stroke='#ffffff' stroke-width='2'/>
                    <text x='300' y='375' font-family='Prompt, sans-serif' font-size='22' font-weight='bold' fill='#ffcc00' text-anchor='middle'>KINDERGARTEN | แผนกอนุบาล</text>
                    <text x='300' y='410' font-family='Sarabun, sans-serif' font-size='15' fill='#ffffff' text-anchor='middle' opacity='0.8'>เติบโตอย่างสมวัย ใส่ใจจินตนาการ ด้วยรักอบอุ่น</text>
                </svg>`;
                break;
        }
        
        return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
    }

    // Custom logo fallback generator adapting to current theme
    function applyLogoFallback(imgElement) {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        const strokeColor = isDark ? '#ffcc00' : '#005a2b';
        const fillCrest = isDark ? '#131b11' : '#005a2b';
        const txtColor = isDark ? '#ffcc00' : '#ffcc00';
        const primaryCircleFill = isDark ? '#0b1109' : '#005a2b';
        const outerStroke = isDark ? '#ffcc00' : '#ffcc00';
        
        const svgString = `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <!-- Outer Golden Circle -->
            <circle cx='50' cy='50' r='46' fill='${primaryCircleFill}' stroke='${outerStroke}' stroke-width='3.5'/>
            <!-- Catholic shield border -->
            <path d='M50,18 C58,18 78,13 78,13 L78,55 C78,72 50,83 50,83 C50,83 22,72 22,55 L22,13 C22,13 42,18 50,18 Z' fill='none' stroke='#ffcc00' stroke-width='2'/>
            <!-- Holy Cross inside -->
            <path d='M48.5,24 H51.5 V75 H48.5 Z M32,38 H68 V41 H32 Z' fill='#ffcc00'/>
            <!-- Shield with letters -->
            <rect x='40' y='48' width='20' height='16' rx='3' fill='${fillCrest}' stroke='#ffcc00' stroke-width='1.5'/>
            <text x='50' y='60' font-family='Prompt, sans-serif' font-size='10' font-weight='bold' fill='${txtColor}' text-anchor='middle'>ย.อ.</text>
        </svg>`;
        
        imgElement.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
        imgElement.classList.add('fallback-svg-active');
    }

    // Main Fallback Image Processor
    function handleImageError(img) {
        const id = img.getAttribute('id');
        const src = img.getAttribute('src');
        
        console.log(`Failed to load image: ${src}. Applying premium vector fallback.`);
        
        // 1. Check if it's the logo
        if (id === 'school-logo' || id === 'footer-school-logo') {
            applyLogoFallback(img);
            return;
        }
        
        // 2. Check if it's the hero banner
        if (id === 'hero-banner-image') {
            img.src = getFallbackSvgDataUrl('hero');
            img.classList.add('fallback-svg-active');
            return;
        }

        // 3. Check if it's the history banner
        if (id === 'history-main-image') {
            img.src = getFallbackSvgDataUrl('history');
            img.classList.add('fallback-svg-active');
            return;
        }

        // 4. Check if it's a department card
        if (id === 'img-boys') {
            img.src = getFallbackSvgDataUrl('boys');
            img.classList.add('fallback-svg-active');
            return;
        }
        if (id === 'img-girls') {
            img.src = getFallbackSvgDataUrl('girls');
            img.classList.add('fallback-svg-active');
            return;
        }
        if (id === 'img-ep') {
            img.src = getFallbackSvgDataUrl('ep');
            img.classList.add('fallback-svg-active');
            return;
        }
        if (id === 'img-kindergarten') {
            img.src = getFallbackSvgDataUrl('kindergarten');
            img.classList.add('fallback-svg-active');
            return;
        }

        // 4.5. Check if it's a news card image
        if (id === 'news-img-1') {
            img.src = `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M197,85 H203 V115 H197 Z M190,97 H210 V103 H190 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ประกาศปิดภาคเรียนฤดูร้อน 2569</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ข่าวประชาสัมพันธ์ - 8 เมษายน 2569</text>
            </svg>
            `)}`;
            img.classList.add('fallback-svg-active');
            return;
        }
        if (id === 'news-img-2') {
            img.src = `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#0b1109'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M192,93 H208 V96 H192 Z M192,102 H208 V105 H192 Z M192,111 H202 V114 H192 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ตารางจำหน่ายหนังสือ &amp; เครื่องแบบ</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ประกาศสำคัญ - 8 เมษายน 2569</text>
            </svg>
            `)}`;
            img.classList.add('fallback-svg-active');
            return;
        }
        if (id === 'news-img-3') {
            img.src = `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M200,85 C190,100 200,115 200,115 C200,115 210,100 200,85 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>สืบสานประเพณีสงกรานต์ รดน้ำดำหัว</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ภาพกิจกรรม - 7 เมษายน 2569</text>
            </svg>
            `)}`;
            img.classList.add('fallback-svg-active');
            return;
        }

        // 5. Default generic premium fallback if nothing matches
        const altText = img.getAttribute('alt') || 'ภาพกิจกรรมยอแซฟอุปถัมภ์';
        const genericSvg = `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
            <defs>
                <linearGradient id='gen-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stop-color='#005a2b'/>
                    <stop offset='100%' stop-color='#002813'/>
                </linearGradient>
            </defs>
            <rect width='100%' height='100%' fill='url(#gen-grad)'/>
            <!-- Decorative borders -->
            <rect x='10' y='10' width='380' height='280' fill='none' stroke='#ffcc00' stroke-width='1.5' opacity='0.2'/>
            <circle cx='200' cy='120' r='50' fill='none' stroke='#ffcc00' stroke-width='1' opacity='0.15'/>
            <!-- Elegant Gold Shield Badge -->
            <path d='M200,80 L225,95 L225,135 C225,155 200,170 200,170 C200,170 175,155 175,135 L175,95 Z' fill='#ffcc00' fill-opacity='0.12' stroke='#ffcc00' stroke-width='1.5'/>
            <!-- Holy Cross inside -->
            <path d='M199,92 H201 V152 H199 Z M188,106 H212 V108 H188 Z' fill='#ffcc00'/>
            
            <!-- Bottom Gold Banner for Description -->
            <rect x='10' y='220' width='380' height='70' fill='#ffcc00' fill-opacity='0.08' stroke='#ffcc00' stroke-width='1' stroke-opacity='0.2'/>
            
            <!-- School Name and Dynamic Alt Text -->
            <text x='200' y='208' font-family='Prompt, sans-serif' font-size='14' font-weight='700' fill='#ffffff' text-anchor='middle' opacity='0.9'>โรงเรียนยอแซฟอุปถัมภ์</text>
            <text x='200' y='245' font-family='Sarabun, sans-serif' font-size='13' font-weight='500' fill='#ffcc00' text-anchor='middle'>${altText}</text>
            <text x='200' y='270' font-family='Sarabun, sans-serif' font-size='10' fill='#ffffff' text-anchor='middle' opacity='0.5'>JOSEPH UPATHAM SCHOOL GALLERY</text>
        </svg>`;
        img.src = `data:image/svg+xml;utf8,${encodeURIComponent(genericSvg)}`;
        img.classList.add('fallback-svg-active');
    }

    // Expose handleImageError globally so inline onerror="handleImageError(this)" in HTML works
    window.handleImageError = handleImageError;

    // Attach Capture-phase Error Listener on window
    // This catches loading failures instantly as they bubble up!
    window.addEventListener('error', (event) => {
        if (event.target.tagName === 'IMG') {
            handleImageError(event.target);
        }
    }, true);

    // Initial check for images that failed to load before this script finished execution
    document.querySelectorAll('img').forEach(img => {
        if (img.naturalWidth === 0 && img.src) {
            handleImageError(img);
        }
    });

    // ==========================================
    // Interactive Features (SweetAlert2 Modals)
    // ==========================================
    
    // 1. News Details Modals
    const newsButtons = document.querySelectorAll('.interact-news');
    newsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.news-card');
            const title = card.querySelector('.news-card-title').textContent;
            const imgSrc = card.querySelector('.news-img').src;
            
            Swal.fire({
                title: title,
                text: 'กำลังปรับปรุงระบบให้แสดงเนื้อหาข่าวสารฉบับเต็ม กรุณาติดตามได้ในเร็วๆ นี้',
                imageUrl: imgSrc,
                imageWidth: 400,
                imageAlt: 'รูปภาพข่าว',
                confirmButtonText: 'รับทราบ',
                confirmButtonColor: '#005a2b',
                background: htmlElement.getAttribute('data-theme') === 'dark' ? '#1a1f18' : '#ffffff',
                color: htmlElement.getAttribute('data-theme') === 'dark' ? '#e2ebd5' : '#2b3026'
            });
        });
    });

    // 2. Portal Access Confirmation Modals
    const portalCards = document.querySelectorAll('.interact-portal');
    portalCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const portalName = card.getAttribute('data-portal-name');
            const portalUrl = card.getAttribute('data-portal-url');
            
            Swal.fire({
                title: 'ยืนยันการเข้าสู่ระบบ',
                text: `คุณกำลังจะไปยัง "${portalName}" ดำเนินการต่อหรือไม่?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#005a2b',
                cancelButtonColor: '#888',
                confirmButtonText: 'เข้าสู่ระบบ',
                cancelButtonText: 'ยกเลิก',
                background: htmlElement.getAttribute('data-theme') === 'dark' ? '#1a1f18' : '#ffffff',
                color: htmlElement.getAttribute('data-theme') === 'dark' ? '#e2ebd5' : '#2b3026'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(portalUrl, '_blank', 'noopener,noreferrer');
                }
            });
        });
    });

    // 3. Gallery Lightbox Functionality
    if (galleryContainer) {
        galleryContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.gallery-card');
            if (card) {
                const img = card.querySelector('img');
                const title = card.querySelector('.gallery-lbl').textContent;
                const desc = card.querySelector('.gallery-caption').textContent;
                
                Swal.fire({
                    title: title,
                    text: desc,
                    imageUrl: img.src,
                    imageAlt: title,
                    confirmButtonText: 'ปิด',
                    confirmButtonColor: '#005a2b',
                    width: 'auto',
                    imageWidth: '100%',
                    background: htmlElement.getAttribute('data-theme') === 'dark' ? '#1a1f18' : '#ffffff',
                    color: htmlElement.getAttribute('data-theme') === 'dark' ? '#e2ebd5' : '#2b3026',
                    backdrop: `rgba(0, 0, 0, 0.85)`
                });
            }
        });
        
        // Change cursor to pointer for gallery cards to indicate clickability
        const galleryStyle = document.createElement('style');
        galleryStyle.textContent = '.gallery-card { cursor: pointer; } .gallery-card:hover .gallery-img { transform: scale(1.1); }';
        document.head.appendChild(galleryStyle);
    }

    // ==========================================
    // 6. Dynamic Real-time Sync with WordPress REST API
    // ==========================================
    
    // Helper to get image URL safely
    function getPostImage(post) {
        try {
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                return post._embedded['wp:featuredmedia'][0].source_url || post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
            }
        } catch (e) {}
        // Fallback static high quality image
        return 'http://www.joseph.ac.th/wp-content/uploads/2026/04/05.jpg';
    }

    // Helper to get author name safely
    function getPostAuthor(post) {
        try {
            if (post._embedded && post._embedded['author'] && post._embedded['author'][0]) {
                return post._embedded['author'][0].name;
            }
        } catch (e) {}
        return 'admin1';
    }

    // Helper to get category name safely
    function getPostCategory(post) {
        try {
            if (post._embedded && post._embedded['wp:term']) {
                for (let termGroup of post._embedded['wp:term']) {
                    for (let term of termGroup) {
                        if (term.taxonomy === 'category') {
                           return term.name;
                        }
                    }
                }
            }
        } catch (e) {}
        return 'ประกาศ';
    }

    // Helper to get Buddhist-formatted Thai date safely
    function getPostDateThai(post) {
        try {
            const d = new Date(post.date);
            const months = [
                'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
            ];
            const day = d.getDate();
            const month = months[d.getMonth()];
            const year = d.getFullYear() + 543;
            return `${day} ${month} ${year}`;
        } catch (e) {}
        return '8 เมษายน 2569';
    }

    // Function to render all posts dynamically
    window.renderAllPosts = function(posts) {
        window.wpPostsSyncInitialized = true;
        console.log("Rendering posts dynamically from WordPress API...");

        // A. Populate newspaperss featured top slider (#slider)
        const sliderContainer = document.getElementById('slider');
        if (sliderContainer) {
            // Destroy slick-slider if already initialized to prevent DOM collision
            try {
                if (jQuery(sliderContainer).hasClass('slick-initialized')) {
                    jQuery(sliderContainer).slick('unslick');
                }
            } catch (e) {
                console.log("Slick destroy ignored:", e);
            }
            
            // Clear classes and styles that slick might have added
            sliderContainer.className = 'slick-slider';
            
            // Build slides HTML (posts 0 to 5)
            let slidesHtml = '';
            const sliderPosts = posts.slice(0, 6);
            sliderPosts.forEach(post => {
                slidesHtml += `
                <div class="projectitem">
                    <a class="sliderlink" href="${post.link}"> </a>
                    <div class="slider-container" style="background: url(${getPostImage(post)}) 50% 50% / cover no-repeat;">
                        <div class="post-header-outer is-absolute">
                            <div class="post-header">
                                <div class="post-cat-info">
                                    <a class="cat-info-el" href="${post.link}">${getPostCategory(post)}</a>
                                </div>
                                <h3 class="post-title is-size-2">
                                    <a class="post-title-link" href="${post.link}" rel="bookmark">${post.title.rendered}</a>
                                </h3>
                                <div class="post-meta-info">
                                    <div class="post-meta-info-left">
                                        <span class="meta-info-el meta-info-author">
                                            <a class="vcard author" href="${post.link}">${getPostAuthor(post)}</a>
                                        </span>
                                        <span class="meta-info-el meta-info-date">
                                            <time class="date update">${getPostDateThai(post)}</time>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
            sliderContainer.innerHTML = slidesHtml;

            // Re-initialize slick slider via jQuery
            try {
                jQuery(sliderContainer).slick({
                    slidesToShow: 1,
                    pauseOnHover: false,
                    autoplaySpeed: 4000,
                    adaptiveHeight: false,
                    speed: 400,
                    prevArrow: '<div class="newspaperss-slider-nav newspaperss-slider-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                    nextArrow: '<div class="newspaperss-slider-nav newspaperss-slider-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
                    responsive: [{
                        breakpoint: 1023,
                        settings: {
                            adaptiveHeight: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }]
                });
            } catch (e) {
                console.error("Failed to re-initialize slick slider:", e);
            }
        }

        // B. Populate stacked cards on the right of the slider (.slider-right)
        const sliderRightContainer = document.querySelector('.slider-right .grid-x');
        if (sliderRightContainer) {
            let rightCardsHtml = '';
            // Display posts index 0 and 1
            const rightPosts = posts.slice(0, 2);
            rightPosts.forEach(post => {
                rightCardsHtml += `
                <div class="cell large-12 medium-6 small-6">
                    <article class="post-wrap">
                        <div class="post-image-warp">
                            <div class="post-thumb-overlay"></div>
                            <span class="thumbnail-post">
                                <a href="${post.link}">
                                    <img alt="" class="object-fit-postimg wp-post-image" height="400" loading="lazy" src="${getPostImage(post)}" width="428"/>
                                </a>
                            </span>
                        </div>
                        <div class="post-header-outer is-absolute">
                            <div class="post-header">
                                <div class="post-cat-info">
                                    <a class="cat-info-el" href="${post.link}">${getPostCategory(post)}</a>
                                </div>
                                <h3 class="post-title is-size-4 entry-title">
                                    <a class="post-title-link" href="${post.link}" rel="bookmark">${post.title.rendered}</a>
                                </h3>
                                <div class="post-meta-info">
                                    <span class="meta-info-el meta-info-author">
                                        <a class="vcard author" href="${post.link}">${getPostAuthor(post)}</a>
                                    </span>
                                    <span class="meta-info-el meta-info-date">
                                        <time class="date update">
                                            <span>${getPostDateThai(post)}</span>
                                        </time>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                `;
            });
            sliderRightContainer.innerHTML = rightCardsHtml;
        }

        // C. Populate bottom news grid exactly 4 cards (#site-content) in 2x2 layout
        const gridContainer = document.querySelector('#site-content .grid-x');
        if (gridContainer) {
            // Keep the section title cell
            const titleCell = gridContainer.querySelector('.block-title');
            let gridHtml = titleCell ? titleCell.outerHTML : `
            <div class="cell block-title widget-title">
                <h3 class="blog-title">ข่าวสารล่าสุด</h3>
            </div>`;
            
            // Display posts index 0 to 3
            const gridPosts = posts.slice(0, 4);
            gridPosts.forEach(post => {
                gridHtml += `
                <div class="medium-6 small-12 cell large-6">
                    <div class="card layout3-post">
                        <div class="thumbnail-resize">
                            <a href="${post.link}">
                                <img alt="" class="float-center card-image wp-post-image" height="300" loading="lazy" src="${getPostImage(post)}" width="600"/>
                            </a>
                            <div class="post-cat-info is-absolute">
                                <a class="cat-info-el" href="${post.link}">${getPostCategory(post)}</a>
                            </div>
                        </div>
                        <div class="card-section">
                            <h3 class="post-title is-size-4 card-title">
                                <a class="post-title-link" href="${post.link}" rel="bookmark">${post.title.rendered}</a>
                            </h3>
                        </div>
                        <div class="card-divider">
                            <span class="meta-info-el mate-info-date-icon">
                                <span class="screen-reader-text">Posted on</span>
                                <a href="${post.link}" rel="bookmark">
                                    <time class="entry-date published updated">${getPostDateThai(post)}</time>
                                </a>
                            </span>
                            <span class="meta-info-el meta-info-author">
                                <a class="vcard author" href="${post.link}" title="${getPostAuthor(post)}">${getPostAuthor(post)}</a>
                            </span>
                        </div>
                    </div>
                </div>
                `;
            });
            gridContainer.innerHTML = gridHtml;
        }
    };

    // Fallback static high quality data from data.js
    window.renderStaticFallbacks = function() {
        window.wpPostsSyncInitialized = true;
        console.log("Loading offline premium static data fallback from data.js...");
        // Reconstruct posts structure from schoolData static items
        const dummyPosts = [
            {
                id: 1,
                link: "http://www.joseph.ac.th/2026/04/08/%e0%b8%88%e0%b8%b3%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b9%81%e0%b8%a5%e0%b8%b0-2/",
                title: { rendered: "จำหน่ายหนังสือเรียนและอุปกรณ์การเรียน ป.1 – ม.6 ทุกแผนก" },
                date: "2026-04-08T13:51:10",
                _embedded: {
                    'wp:featuredmedia': [{ source_url: schoolData.images.news[0] }],
                    'author': [{ name: "admin1" }],
                    'wp:term': [[{ name: "ประกาศ", taxonomy: "category" }]]
                }
            },
            {
                id: 2,
                link: "http://www.joseph.ac.th/2026/04/08/%e0%b8%81%e0%b8%b3%e0%b8%ab%e0%b8%99%e0%b8%94%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%9b%e0%b8%b4%e0%b8%94%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%a3%e0%b8%a1%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b8%a4/",
                title: { rendered: "กำหนดการปิดกิจกรรมภาคฤดูร้อน 2569" },
                date: "2026-04-08T09:00:30",
                _embedded: {
                    'wp:featuredmedia': [{ source_url: schoolData.images.news[1] }],
                    'author': [{ name: "admin1" }],
                    'wp:term': [[{ name: "ประกาศ", taxonomy: "category" }]]
                }
            },
            {
                id: 3,
                link: "http://www.joseph.ac.th/2026/04/07/%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%aa%e0%b8%87%e0%b8%81%e0%b8%a3%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b9%8c%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2/",
                title: { rendered: "กิจกรรมสงกรานต์โรงเรียนยอแซฟอุปถัมภ์" },
                date: "2026-04-07T09:48:42",
                _embedded: {
                    'wp:featuredmedia': [{ source_url: schoolData.images.news[2] }],
                    'author': [{ name: "admin1" }],
                    'wp:term': [[{ name: "กิจกรรม", taxonomy: "category" }]]
                }
            },
            {
                id: 4,
                link: "http://www.joseph.ac.th/2026/03/13/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%89%e0%b8%b8%e0%b8%a1%e0%b8%84%e0%b8%93%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%b9%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b9%80%e0%b8%88%e0%b9%89%e0%b8%b2%e0%b8%ab%e0%b8%99%e0%b9%89/",
                title: { rendered: "ประชุมคณะครูและเจ้าหน้าที่โรงเรียนยอแซฟอุปถัมภ์ แผนกชาย" },
                date: "2026-03-13T15:16:34",
                _embedded: {
                    'wp:featuredmedia': [{ source_url: schoolData.images.history }],
                    'author': [{ name: "admin1" }],
                    'wp:term': [[{ name: "กิจกรรม", taxonomy: "category" }]]
                }
            }
        ];
        window.renderAllPosts(dummyPosts);
    };

    // Primary entry point for Sync
    function syncWordPressPosts() {
        console.log("Initiating real-time WordPress REST API sync...");
        window.wpPostsSyncInitialized = false;
        
        // Timeout fallback of 2.0 seconds in case network/CORS hangs or JSONP fails silently
        const fallbackTimeout = setTimeout(() => {
            if (!window.wpPostsSyncInitialized) {
                console.warn("WordPress REST API sync timed out (2.0s). Resorting to static database fallback...");
                window.renderStaticFallbacks();
            }
        }, 2000);
        
        // 1. Try standard AJAX fetch first
        fetch('http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page=10')
            .then(res => {
                if (!res.ok) throw new Error("CORS or Network issue");
                return res.json();
            })
            .then(posts => {
                clearTimeout(fallbackTimeout);
                if (Array.isArray(posts) && posts.length > 0) {
                    window.renderAllPosts(posts);
                } else {
                    window.renderStaticFallbacks();
                }
            })
            .catch(err => {
                console.warn("Standard AJAX fetch failed. Attempting CORS JSONP fallback...", err);
                if (window.wpPostsSyncInitialized) return; // Already timed out and fell back
                
                // 2. Dynamic JSONP script insertion to bypass CORS
                const script = document.createElement('script');
                script.src = 'http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page=10&_jsonp=handleWpPosts';
                script.onerror = () => {
                    clearTimeout(fallbackTimeout);
                    console.error("JSONP fetch completely failed. Resorting to static database.");
                    window.renderStaticFallbacks();
                };
                document.body.appendChild(script);
            });
    }

    // Run sync
    syncWordPressPosts();
});

// Global dynamic sync callback hook for JSONP bypass
window.handleWpPosts = function(posts) {
    if (window.wpPostsSyncInitialized) return;
    window.wpPostsSyncInitialized = true;
    
    console.log("JSONP fetch loaded successfully:", posts);
    if (Array.isArray(posts) && posts.length > 0) {
        window.renderAllPosts(posts);
    } else {
        window.renderStaticFallbacks();
    }
};

