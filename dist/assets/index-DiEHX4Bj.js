(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function y(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(l){if(l.ep)return;l.ep=!0;const c=y(l);fetch(l.href,c)}})();const p={gospelValues:{values:[{key:"J",term:"JUSTICE",desc:"ความยุติธรรม"},{key:"O",term:"OBEDIENCE",desc:"ความเชื่อฟัง"},{key:"S",term:"SILENCE",desc:"ความเงียบ สงบ"},{key:"E",term:"EXPERIENCE",desc:"ความฉลาดในการใช้ประสบการณ์ที่มี"},{key:"P",term:"PRUDENCE",desc:"ความสุขุม รอบคอบ มัธยัสถ์"},{key:"H",term:"HUMILITY",desc:"ความสุภาพ"}]},images:{history:"./images/history_meeting.jpg",news:["./images/news1_books.jpg","./images/news2_uniform.jpg","./images/boys_songkran2.jpg"],gallery:[{category:"ครบรอบ 60 ปี (2569)",url:"./images/hero_60years.jpg",desc:"งานฉลองครบรอบ 60 ปี โรงเรียนยอแซฟอุปถัมภ์ — คืนสู่เหย้าชาวเหลือง-เขียว",postDate:"21 มีนาคม 2569"},{category:"กิจกรรมสงกรานต์ 2569 (แผนกชาย)",url:"./images/boys_songkran1.jpg",desc:"กิจกรรมสงกรานต์ วัฒนธรรมไทย / รดน้ำดำหัว / แต่งชุดไทย แผนกชาย",postDate:"10 เมษายน 2569"},{category:"กิจกรรมสงกรานต์ 2569 (แผนกชาย)",url:"./images/boys_songkran2.jpg",desc:"กิจกรรมสงกรานต์ มินิคอนเสิร์ตแห่งวงดนตรี แผนกชาย ยอแซฟอุปถัมภ์",postDate:"10 เมษายน 2569"},{category:"กิจกรรมสงกรานต์ 2569 (แผนกชาย)",url:"./images/boys_songkran3.jpg",desc:"สงกรานต์แผนกชาย — บรรยากาศครึกครื้นและเต็มไปด้วยรอยยิ้ม",postDate:"10 เมษายน 2569"},{category:"ประชุมคณะครู",url:"./images/history_meeting.jpg",desc:"ประชุมคณะครูและเจ้าหน้าที่โรงเรียนยอแซฟอุปถัมภ์ แผนกชาย (11 มี.ค. 2569)",postDate:"11 มีนาคม 2569"},{category:"ประชุมคณะครู",url:"./images/gallery_meeting2.jpg",desc:"บรรยากาศการประชุมและรับโล่รางวัล Empowering Innovation Teachers",postDate:"11 มีนาคม 2569"},{category:"ประกาศผลการเรียน",url:"./images/gallery_result.jpg",desc:"ประกาศผลการเรียน ป.1–ม.5 แผนกชาย พร้อมรับเอกสารรายงานผลรายบุคคล",postDate:"14 มีนาคม 2569"},{category:"ตารางเรียน SUMMER",url:"./images/gallery_summer.jpg",desc:"ตารางเรียนภาคฤดูร้อน (SUMMER) ประจำปีการศึกษา 2568",postDate:"9 มีนาคม 2569"}]}};document.addEventListener("DOMContentLoaded",()=>{const r=document.documentElement,h=document.getElementById("theme-toggle"),y=localStorage.getItem("theme"),u=window.matchMedia("(prefers-color-scheme: dark)").matches;y?r.setAttribute("data-theme",y):u?r.setAttribute("data-theme","dark"):r.setAttribute("data-theme","light"),h&&h.addEventListener("click",()=>{const e=r.getAttribute("data-theme");let t="light";e==="light"&&(t="dark"),document.body.style.transition="background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",r.setAttribute("data-theme",t),localStorage.setItem("theme",t);const a=document.getElementById("school-logo");a&&a.classList.contains("fallback-svg-active")&&C(a);const s=document.getElementById("footer-school-logo");s&&s.classList.contains("fallback-svg-active")&&C(s)});const l=document.querySelectorAll(".dept-tab-btn"),c=document.querySelectorAll(".dept-pane");l.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-target");l.forEach(s=>s.classList.remove("active")),c.forEach(s=>s.classList.remove("active")),e.classList.add("active");const a=document.getElementById(`pane-${t}`);a&&a.classList.add("active")})}),window.switchDept=e=>{const t=document.querySelector(`.dept-tab-btn[data-target="${e}"]`);if(t){t.click();const a=document.getElementById("departments");a&&a.scrollIntoView({behavior:"smooth"})}};const f=document.getElementById("navbar"),b=document.getElementById("back-to-top"),M=document.querySelectorAll(".nav-link"),H=document.querySelectorAll("section");window.addEventListener("scroll",()=>{const e=window.scrollY;f&&(e>50?f.classList.add("scrolled"):f.classList.remove("scrolled")),b&&(e>400?b.classList.add("visible"):b.classList.remove("visible"));let t="";H.forEach(a=>{const s=a.offsetTop-150,i=a.offsetHeight;e>=s&&e<s+i&&(t=a.getAttribute("id"))}),t&&M.forEach(a=>{a.classList.remove("active"),a.getAttribute("href")===`#${t}`&&a.classList.add("active")})}),b&&b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const w=document.getElementById("mobile-menu-toggle"),v=document.getElementById("nav-menu");w&&v&&(w.addEventListener("click",()=>{v.classList.toggle("open");const e=w.querySelector("i");v.classList.contains("open")?e.className="fa-solid fa-xmark":e.className="fa-solid fa-bars"}),M.forEach(e=>{e.addEventListener("click",()=>{v.classList.remove("open"),w.querySelector("i").className="fa-solid fa-bars"})}));const x=document.getElementById("gospel-values-container");if(x){x.innerHTML="";const e={J:"fa-solid fa-scale-balanced",O:"fa-solid fa-hands-praying",S:"fa-solid fa-ear-listen",E:"fa-solid fa-brain",P:"fa-solid fa-shield-halved",H:"fa-solid fa-hands-bowing"},t={J:"ความเที่ยงธรรมและสุจริต มุ่งสร้างความเท่าเทียม ความรัก และความซื่อตรงในทุกมิติชีวิตของสังคม",O:"การเชื่อฟังและไว้วางใจ นอบน้อมต่อคำสอนของผู้ใหญ่ ครูอาจารย์ และเคารพกฎกติกาด้วยความจริงใจ",S:"ความเงียบและไตร่ตรอง ฝึกฝนจิตใจให้สงบนิ่งเพื่อรับฟังเสียงสัจธรรม ความคิดสร้างสรรค์ และสติปัญญา",E:"ความฉลาดในประสบการณ์ รู้จักประยุกต์เรียนรู้จากบทเรียนชีวิต ก้าวข้ามอุปสรรคและพัฒนาความรู้สู่การปฏิบัติจริง",P:"ความสุขุม รอบคอบ ประหยัดและมัธยัสถ์ คิดทบทวนก่อนทำสิ่งใดๆ มีเหตุผลและปกป้องตนเองจากความประมาท",H:"ความถ่อมตนและนอบน้อม ไม่เย่อหยิ่งจองหอง ยอมรับความเห็นของผู้อื่น และพร้อมรับการพัฒนาตนเองอย่างต่อเนื่อง"};p.gospelValues.values.forEach(a=>{const s=document.createElement("div");s.className="gospel-card card-glow",s.innerHTML=`
                <div class="gospel-letter-badge">${a.key}</div>
                <div class="gospel-icon-wrapper">
                    <i class="${e[a.key]||"fa-solid fa-star"}"></i>
                </div>
                <h3 class="gospel-term">${a.term}</h3>
                <p class="gospel-desc">${a.desc}</p>
                <p class="gospel-body">${t[a.key]||""}</p>
            `,x.appendChild(s)})}const g=document.getElementById("gallery-container");g&&(g.innerHTML="",p.images.gallery.forEach(e=>{const t=document.createElement("div");t.className="gallery-card card-glow",t.setAttribute("data-category",e.category),t.innerHTML=`
                <img src="${e.url}" alt="${e.desc}" class="gallery-img">
                <div class="gallery-overlay-mask">
                    <span class="gallery-lbl">${e.category}</span>
                    <p class="gallery-caption">${e.desc}</p>
                </div>
            `,g.appendChild(t)}));const L=document.querySelectorAll(".gallery-tab-btn");L.length>0&&g&&L.forEach(e=>{e.addEventListener("click",()=>{L.forEach(s=>s.classList.remove("active")),e.classList.add("active");const t=e.getAttribute("data-category");g.querySelectorAll(".gallery-card").forEach(s=>{const i=s.getAttribute("data-category");t==="ทั้งหมด"||i===t?(s.style.display="block",s.style.animation="none",s.offsetWidth,s.style.animation="fade-scale-in 0.4s ease forwards"):s.style.display="none"})})});function m(e){let t="";switch(e){case"hero":t=`
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
                </svg>`;break;case"history":t=`
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
                </svg>`;break;case"boys":t=`
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
                </svg>`;break;case"girls":t=`
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
                </svg>`;break;case"ep":t=`
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
                </svg>`;break;case"kindergarten":t=`
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
                </svg>`;break}return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}function C(e){const t=r.getAttribute("data-theme")==="dark",o=`
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <!-- Outer Golden Circle -->
            <circle cx='50' cy='50' r='46' fill='${t?"#0b1109":"#005a2b"}' stroke='#ffcc00' stroke-width='3.5'/>
            <!-- Catholic shield border -->
            <path d='M50,18 C58,18 78,13 78,13 L78,55 C78,72 50,83 50,83 C50,83 22,72 22,55 L22,13 C22,13 42,18 50,18 Z' fill='none' stroke='#ffcc00' stroke-width='2'/>
            <!-- Holy Cross inside -->
            <path d='M48.5,24 H51.5 V75 H48.5 Z M32,38 H68 V41 H32 Z' fill='#ffcc00'/>
            <!-- Shield with letters -->
            <rect x='40' y='48' width='20' height='16' rx='3' fill='${t?"#131b11":"#005a2b"}' stroke='#ffcc00' stroke-width='1.5'/>
            <text x='50' y='60' font-family='Prompt, sans-serif' font-size='10' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ย.อ.</text>
        </svg>`;e.src=`data:image/svg+xml;utf8,${encodeURIComponent(o)}`,e.classList.add("fallback-svg-active")}function S(e){const t=e.getAttribute("id"),a=e.getAttribute("src");if(console.log(`Failed to load image: ${a}. Applying premium vector fallback.`),t==="school-logo"||t==="footer-school-logo"){C(e);return}if(t==="hero-banner-image"){e.src=m("hero"),e.classList.add("fallback-svg-active");return}if(t==="history-main-image"){e.src=m("history"),e.classList.add("fallback-svg-active");return}if(t==="img-boys"){e.src=m("boys"),e.classList.add("fallback-svg-active");return}if(t==="img-girls"){e.src=m("girls"),e.classList.add("fallback-svg-active");return}if(t==="img-ep"){e.src=m("ep"),e.classList.add("fallback-svg-active");return}if(t==="img-kindergarten"){e.src=m("kindergarten"),e.classList.add("fallback-svg-active");return}if(t==="news-img-1"){e.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M197,85 H203 V115 H197 Z M190,97 H210 V103 H190 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ประกาศปิดภาคเรียนฤดูร้อน 2569</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ข่าวประชาสัมพันธ์ - 8 เมษายน 2569</text>
            </svg>
            `)}`,e.classList.add("fallback-svg-active");return}if(t==="news-img-2"){e.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#0b1109'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M192,93 H208 V96 H192 Z M192,102 H208 V105 H192 Z M192,111 H202 V114 H192 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ตารางจำหน่ายหนังสือ &amp; เครื่องแบบ</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ประกาศสำคัญ - 8 เมษายน 2569</text>
            </svg>
            `)}`,e.classList.add("fallback-svg-active");return}if(t==="news-img-3"){e.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M200,85 C190,100 200,115 200,115 C200,115 210,100 200,85 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>สืบสานประเพณีสงกรานต์ รดน้ำดำหัว</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ภาพกิจกรรม - 7 เมษายน 2569</text>
            </svg>
            `)}`,e.classList.add("fallback-svg-active");return}const i=`
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
            <text x='200' y='245' font-family='Sarabun, sans-serif' font-size='13' font-weight='500' fill='#ffcc00' text-anchor='middle'>${e.getAttribute("alt")||"ภาพกิจกรรมยอแซฟอุปถัมภ์"}</text>
            <text x='200' y='270' font-family='Sarabun, sans-serif' font-size='10' fill='#ffffff' text-anchor='middle' opacity='0.5'>JOSEPH UPATHAM SCHOOL GALLERY</text>
        </svg>`;e.src=`data:image/svg+xml;utf8,${encodeURIComponent(i)}`,e.classList.add("fallback-svg-active")}if(window.handleImageError=S,window.addEventListener("error",e=>{e.target.tagName==="IMG"&&S(e.target)},!0),document.querySelectorAll("img").forEach(e=>{e.naturalWidth===0&&e.src&&S(e)}),document.querySelectorAll(".interact-news").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const a=e.closest(".news-card"),s=a.querySelector(".news-card-title").textContent,i=a.querySelector(".news-img").src;Swal.fire({title:s,text:"กำลังปรับปรุงระบบให้แสดงเนื้อหาข่าวสารฉบับเต็ม กรุณาติดตามได้ในเร็วๆ นี้",imageUrl:i,imageWidth:400,imageAlt:"รูปภาพข่าว",confirmButtonText:"รับทราบ",confirmButtonColor:"#005a2b",background:r.getAttribute("data-theme")==="dark"?"#1a1f18":"#ffffff",color:r.getAttribute("data-theme")==="dark"?"#e2ebd5":"#2b3026"})})}),document.querySelectorAll(".interact-portal").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const a=e.getAttribute("data-portal-name"),s=e.getAttribute("data-portal-url");Swal.fire({title:"ยืนยันการเข้าสู่ระบบ",text:`คุณกำลังจะไปยัง "${a}" ดำเนินการต่อหรือไม่?`,icon:"question",showCancelButton:!0,confirmButtonColor:"#005a2b",cancelButtonColor:"#888",confirmButtonText:"เข้าสู่ระบบ",cancelButtonText:"ยกเลิก",background:r.getAttribute("data-theme")==="dark"?"#1a1f18":"#ffffff",color:r.getAttribute("data-theme")==="dark"?"#e2ebd5":"#2b3026"}).then(i=>{i.isConfirmed&&window.open(s,"_blank","noopener,noreferrer")})})}),g){g.addEventListener("click",t=>{const a=t.target.closest(".gallery-card");if(a){const s=a.querySelector("img"),i=a.querySelector(".gallery-lbl").textContent,d=a.querySelector(".gallery-caption").textContent;Swal.fire({title:i,text:d,imageUrl:s.src,imageAlt:i,confirmButtonText:"ปิด",confirmButtonColor:"#005a2b",width:"auto",imageWidth:"100%",background:r.getAttribute("data-theme")==="dark"?"#1a1f18":"#ffffff",color:r.getAttribute("data-theme")==="dark"?"#e2ebd5":"#2b3026",backdrop:"rgba(0, 0, 0, 0.85)"})}});const e=document.createElement("style");e.textContent=".gallery-card { cursor: pointer; } .gallery-card:hover .gallery-img { transform: scale(1.1); }",document.head.appendChild(e)}function E(e){try{if(e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0])return e._embedded["wp:featuredmedia"][0].source_url||e._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}catch{}return"http://www.joseph.ac.th/wp-content/uploads/2026/04/05.jpg"}function k(e){try{if(e._embedded&&e._embedded.author&&e._embedded.author[0])return e._embedded.author[0].name}catch{}return"admin1"}function A(e){try{if(e._embedded&&e._embedded["wp:term"]){for(let t of e._embedded["wp:term"])for(let a of t)if(a.taxonomy==="category")return a.name}}catch{}return"ประกาศ"}function P(e){try{const t=new Date(e.date),a=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],s=t.getDate(),i=a[t.getMonth()],d=t.getFullYear()+543;return`${s} ${i} ${d}`}catch{}return"8 เมษายน 2569"}window.renderAllPosts=function(e){window.wpPostsSyncInitialized=!0,console.log("Rendering posts dynamically from WordPress API...");const t=document.getElementById("slider");if(t){try{jQuery(t).hasClass("slick-initialized")&&jQuery(t).slick("unslick")}catch(o){console.log("Slick destroy ignored:",o)}t.className="slick-slider";let i="";e.slice(0,6).forEach(o=>{i+=`
                <div class="projectitem">
                    <a class="sliderlink" href="${o.link}"> </a>
                    <div class="slider-container" style="background: url(${E(o)}) 50% 50% / cover no-repeat;">
                        <div class="post-header-outer is-absolute">
                            <div class="post-header">
                                <div class="post-cat-info">
                                    <a class="cat-info-el" href="${o.link}">${A(o)}</a>
                                </div>
                                <h3 class="post-title is-size-2">
                                    <a class="post-title-link" href="${o.link}" rel="bookmark">${o.title.rendered}</a>
                                </h3>
                                <div class="post-meta-info">
                                    <div class="post-meta-info-left">
                                        <span class="meta-info-el meta-info-author">
                                            <a class="vcard author" href="${o.link}">${k(o)}</a>
                                        </span>
                                        <span class="meta-info-el meta-info-date">
                                            <time class="date update">${P(o)}</time>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `}),t.innerHTML=i;try{jQuery(t).slick({slidesToShow:1,pauseOnHover:!1,autoplaySpeed:4e3,adaptiveHeight:!1,speed:400,prevArrow:'<div class="newspaperss-slider-nav newspaperss-slider-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',nextArrow:'<div class="newspaperss-slider-nav newspaperss-slider-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',responsive:[{breakpoint:1023,settings:{adaptiveHeight:!1,slidesToShow:1,slidesToScroll:1}}]})}catch(o){console.error("Failed to re-initialize slick slider:",o)}}const a=document.querySelector(".slider-right .grid-x");if(a){let i="";e.slice(0,2).forEach(o=>{i+=`
                <div class="cell large-12 medium-6 small-6">
                    <article class="post-wrap">
                        <div class="post-image-warp">
                            <div class="post-thumb-overlay"></div>
                            <span class="thumbnail-post">
                                <a href="${o.link}">
                                    <img alt="" class="object-fit-postimg wp-post-image" height="400" loading="lazy" src="${E(o)}" width="428"/>
                                </a>
                            </span>
                        </div>
                        <div class="post-header-outer is-absolute">
                            <div class="post-header">
                                <div class="post-cat-info">
                                    <a class="cat-info-el" href="${o.link}">${A(o)}</a>
                                </div>
                                <h3 class="post-title is-size-4 entry-title">
                                    <a class="post-title-link" href="${o.link}" rel="bookmark">${o.title.rendered}</a>
                                </h3>
                                <div class="post-meta-info">
                                    <span class="meta-info-el meta-info-author">
                                        <a class="vcard author" href="${o.link}">${k(o)}</a>
                                    </span>
                                    <span class="meta-info-el meta-info-date">
                                        <time class="date update">
                                            <span>${P(o)}</span>
                                        </time>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                `}),a.innerHTML=i}const s=document.querySelector("#site-content .grid-x");if(s){const i=s.querySelector(".block-title");let d=i?i.outerHTML:`
            <div class="cell block-title widget-title">
                <h3 class="blog-title">ข่าวสารล่าสุด</h3>
            </div>`;e.slice(0,4).forEach(n=>{d+=`
                <div class="medium-6 small-12 cell large-6">
                    <div class="card layout3-post">
                        <div class="thumbnail-resize">
                            <a href="${n.link}">
                                <img alt="" class="float-center card-image wp-post-image" height="300" loading="lazy" src="${E(n)}" width="600"/>
                            </a>
                            <div class="post-cat-info is-absolute">
                                <a class="cat-info-el" href="${n.link}">${A(n)}</a>
                            </div>
                        </div>
                        <div class="card-section">
                            <h3 class="post-title is-size-4 card-title">
                                <a class="post-title-link" href="${n.link}" rel="bookmark">${n.title.rendered}</a>
                            </h3>
                        </div>
                        <div class="card-divider">
                            <span class="meta-info-el mate-info-date-icon">
                                <span class="screen-reader-text">Posted on</span>
                                <a href="${n.link}" rel="bookmark">
                                    <time class="entry-date published updated">${P(n)}</time>
                                </a>
                            </span>
                            <span class="meta-info-el meta-info-author">
                                <a class="vcard author" href="${n.link}" title="${k(n)}">${k(n)}</a>
                            </span>
                        </div>
                    </div>
                </div>
                `}),s.innerHTML=d}},window.renderStaticFallbacks=function(){window.wpPostsSyncInitialized=!0,console.log("Loading offline premium static data fallback from data.js...");const e=[{id:1,link:"http://www.joseph.ac.th/2026/04/08/%e0%b8%88%e0%b8%b3%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b9%81%e0%b8%a5%e0%b8%b0-2/",title:{rendered:"จำหน่ายหนังสือเรียนและอุปกรณ์การเรียน ป.1 – ม.6 ทุกแผนก"},date:"2026-04-08T13:51:10",_embedded:{"wp:featuredmedia":[{source_url:p.images.news[0]}],author:[{name:"admin1"}],"wp:term":[[{name:"ประกาศ",taxonomy:"category"}]]}},{id:2,link:"http://www.joseph.ac.th/2026/04/08/%e0%b8%81%e0%b8%b3%e0%b8%ab%e0%b8%99%e0%b8%94%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%9b%e0%b8%b4%e0%b8%94%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%a3%e0%b8%a1%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b8%a4/",title:{rendered:"กำหนดการปิดกิจกรรมภาคฤดูร้อน 2569"},date:"2026-04-08T09:00:30",_embedded:{"wp:featuredmedia":[{source_url:p.images.news[1]}],author:[{name:"admin1"}],"wp:term":[[{name:"ประกาศ",taxonomy:"category"}]]}},{id:3,link:"http://www.joseph.ac.th/2026/04/07/%e0%b8%81%e0%b8%b4%e0%b8%88%e0%b8%81%e0%b8%a3%e0%b8%aa%e0%b8%87%e0%b8%81%e0%b8%a3%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b9%8c%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2/",title:{rendered:"กิจกรรมสงกรานต์โรงเรียนยอแซฟอุปถัมภ์"},date:"2026-04-07T09:48:42",_embedded:{"wp:featuredmedia":[{source_url:p.images.news[2]}],author:[{name:"admin1"}],"wp:term":[[{name:"กิจกรรม",taxonomy:"category"}]]}},{id:4,link:"http://www.joseph.ac.th/2026/03/13/%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%89%e0%b8%b8%e0%b8%a1%e0%b8%84%e0%b8%93%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%b9%e0%b9%81%e0%b8%a5%e0%b8%b0%e0%b9%80%e0%b8%88%e0%b9%89%e0%b8%b2%e0%b8%ab%e0%b8%99%e0%b9%89/",title:{rendered:"ประชุมคณะครูและเจ้าหน้าที่โรงเรียนยอแซฟอุปถัมภ์ แผนกชาย"},date:"2026-03-13T15:16:34",_embedded:{"wp:featuredmedia":[{source_url:p.images.history}],author:[{name:"admin1"}],"wp:term":[[{name:"กิจกรรม",taxonomy:"category"}]]}}];window.renderAllPosts(e)};function $(){console.log("Initiating real-time WordPress REST API sync..."),window.wpPostsSyncInitialized=!1;const e=setTimeout(()=>{window.wpPostsSyncInitialized||(console.warn("WordPress REST API sync timed out (2.0s). Resorting to static database fallback..."),window.renderStaticFallbacks())},2e3);fetch("http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page=10").then(t=>{if(!t.ok)throw new Error("CORS or Network issue");return t.json()}).then(t=>{clearTimeout(e),Array.isArray(t)&&t.length>0?window.renderAllPosts(t):window.renderStaticFallbacks()}).catch(t=>{if(console.warn("Standard AJAX fetch failed. Attempting CORS JSONP fallback...",t),window.wpPostsSyncInitialized)return;const a=document.createElement("script");a.src="http://www.joseph.ac.th/wp-json/wp/v2/posts?_embed&per_page=10&_jsonp=handleWpPosts",a.onerror=()=>{clearTimeout(e),console.error("JSONP fetch completely failed. Resorting to static database."),window.renderStaticFallbacks()},document.body.appendChild(a)})}$()});window.handleWpPosts=function(r){window.wpPostsSyncInitialized||(window.wpPostsSyncInitialized=!0,console.log("JSONP fetch loaded successfully:",r),Array.isArray(r)&&r.length>0?window.renderAllPosts(r):window.renderStaticFallbacks())};
