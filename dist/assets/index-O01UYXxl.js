(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))h(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function g(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function h(l){if(l.ep)return;l.ep=!0;const a=g(l);fetch(l.href,a)}})();const k={gospelValues:{values:[{key:"J",term:"JUSTICE",desc:"ความยุติธรรม"},{key:"O",term:"OBEDIENCE",desc:"ความเชื่อฟัง"},{key:"S",term:"SILENCE",desc:"ความเงียบ สงบ"},{key:"E",term:"EXPERIENCE",desc:"ความฉลาดในการใช้ประสบการณ์ที่มี"},{key:"P",term:"PRUDENCE",desc:"ความสุขุม รอบคอบ มัธยัสถ์"},{key:"H",term:"HUMILITY",desc:"ความสุภาพ"}]},images:{gallery:[{category:"หมวดหมู่กิจกรรม",url:"http://www.joseph.ac.th/images/gallery/act_main.jpg",desc:"ภาพรวมกิจกรรมพัฒนาผู้เรียน"},{category:"ประกาศ",url:"http://www.joseph.ac.th/images/gallery/announce_main.jpg",desc:"ภาพประกาศเกียรติคุณและผลงานทางวิชาการ"},{category:"อนุบาล (HAPPY)",url:"http://www.joseph.ac.th/images/gallery/happy_kids.jpg",desc:"กิจกรรมเสริมทักษะความคิดสร้างสรรค์วัยปฐมวัย"},{category:"แผนกชาย",url:"http://www.joseph.ac.th/images/gallery/boys_sport.jpg",desc:"การทดสอบพลานามัยและทักษะการกีฬาแคมปัสชาย"},{category:"แผนกหญิง",url:"http://www.joseph.ac.th/images/gallery/girls_art.jpg",desc:"การประกวดมารยาทไทยและศิลปวัฒนธรรมสตรี"},{category:"SMART Program (EP)",url:"http://www.joseph.ac.th/images/gallery/smart_english.jpg",desc:"การนำเสนอโครงงานวิทยาศาสตร์ภาษาอังกฤษ"},{category:"JS Gifted",url:"http://www.joseph.ac.th/images/gallery/gifted_lab.jpg",desc:"การทดลองวิทยาศาสตร์ในห้องปฏิบัติการพิเศษ JS Gifted"},{category:"NELC",url:"http://www.joseph.ac.th/images/gallery/nelc_camp.jpg",desc:"บรรยากาศค่ายภาษาอังกฤษ ณ ศูนย์ NELC"}]}};document.addEventListener("DOMContentLoaded",()=>{const i=document.documentElement,n=document.getElementById("theme-toggle"),g=localStorage.getItem("theme"),h=window.matchMedia("(prefers-color-scheme: dark)").matches;g?i.setAttribute("data-theme",g):h?i.setAttribute("data-theme","dark"):i.setAttribute("data-theme","light"),n.addEventListener("click",()=>{const t=i.getAttribute("data-theme");let e="light";t==="light"&&(e="dark"),document.body.style.transition="background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",i.setAttribute("data-theme",e),localStorage.setItem("theme",e);const o=document.getElementById("school-logo");o&&o.classList.contains("fallback-svg-active")&&u(o);const s=document.getElementById("footer-school-logo");s&&s.classList.contains("fallback-svg-active")&&u(s)});const l=document.querySelectorAll(".dept-tab-btn"),a=document.querySelectorAll(".dept-pane");l.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-target");l.forEach(s=>s.classList.remove("active")),a.forEach(s=>s.classList.remove("active")),t.classList.add("active");const o=document.getElementById(`pane-${e}`);o&&o.classList.add("active")})}),window.switchDept=t=>{const e=document.querySelector(`.dept-tab-btn[data-target="${t}"]`);if(e){e.click();const o=document.getElementById("departments");o&&o.scrollIntoView({behavior:"smooth"})}};const r=document.getElementById("navbar"),y=document.getElementById("back-to-top"),b=document.querySelectorAll(".nav-link"),L=document.querySelectorAll("section");window.addEventListener("scroll",()=>{const t=window.scrollY;t>50?r.classList.add("scrolled"):r.classList.remove("scrolled"),t>400?y.classList.add("visible"):y.classList.remove("visible");let e="";L.forEach(o=>{const s=o.offsetTop-150,f=o.offsetHeight;t>=s&&t<s+f&&(e=o.getAttribute("id"))}),e&&b.forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===`#${e}`&&o.classList.add("active")})}),y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const p=document.getElementById("mobile-menu-toggle"),m=document.getElementById("nav-menu");p.addEventListener("click",()=>{m.classList.toggle("open");const t=p.querySelector("i");m.classList.contains("open")?t.className="fa-solid fa-xmark":t.className="fa-solid fa-bars"}),b.forEach(t=>{t.addEventListener("click",()=>{m.classList.remove("open"),p.querySelector("i").className="fa-solid fa-bars"})});const x=document.getElementById("gospel-values-container");if(x){x.innerHTML="";const t={J:"fa-solid fa-scale-balanced",O:"fa-solid fa-hands-praying",S:"fa-solid fa-ear-listen",E:"fa-solid fa-brain",P:"fa-solid fa-shield-halved",H:"fa-solid fa-hands-bowing"},e={J:"ความเที่ยงธรรมและสุจริต มุ่งสร้างความเท่าเทียม ความรัก และความซื่อตรงในทุกมิติชีวิตของสังคม",O:"การเชื่อฟังและไว้วางใจ นอบน้อมต่อคำสอนของผู้ใหญ่ ครูอาจารย์ และเคารพกฎกติกาด้วยความจริงใจ",S:"ความเงียบและไตร่ตรอง ฝึกฝนจิตใจให้สงบนิ่งเพื่อรับฟังเสียงสัจธรรม ความคิดสร้างสรรค์ และสติปัญญา",E:"ความฉลาดในประสบการณ์ รู้จักประยุกต์เรียนรู้จากบทเรียนชีวิต ก้าวข้ามอุปสรรคและพัฒนาความรู้สู่การปฏิบัติจริง",P:"ความสุขุม รอบคอบ ประหยัดและมัธยัสถ์ คิดทบทวนก่อนทำสิ่งใดๆ มีเหตุผลและปกป้องตนเองจากความประมาท",H:"ความถ่อมตนและนอบน้อม ไม่เย่อหยิ่งจองหอง ยอมรับความเห็นของผู้อื่น และพร้อมรับการพัฒนาตนเองอย่างต่อเนื่อง"};k.gospelValues.values.forEach(o=>{const s=document.createElement("div");s.className="gospel-card card-glow",s.innerHTML=`
                <div class="gospel-letter-badge">${o.key}</div>
                <div class="gospel-icon-wrapper">
                    <i class="${t[o.key]||"fa-solid fa-star"}"></i>
                </div>
                <h3 class="gospel-term">${o.term}</h3>
                <p class="gospel-desc">${o.desc}</p>
                <p class="gospel-body">${e[o.key]||""}</p>
            `,x.appendChild(s)})}const d=document.getElementById("gallery-container");d&&(d.innerHTML="",k.images.gallery.forEach(t=>{const e=document.createElement("div");e.className="gallery-card card-glow",e.setAttribute("data-category",t.category),e.innerHTML=`
                <img src="${t.url}" alt="${t.desc}" class="gallery-img">
                <div class="gallery-overlay-mask">
                    <span class="gallery-lbl">${t.category}</span>
                    <p class="gallery-caption">${t.desc}</p>
                </div>
            `,d.appendChild(e)}));const w=document.querySelectorAll(".gallery-tab-btn");w.length>0&&d&&w.forEach(t=>{t.addEventListener("click",()=>{w.forEach(s=>s.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-category");d.querySelectorAll(".gallery-card").forEach(s=>{const f=s.getAttribute("data-category");e==="ทั้งหมด"||f===e?(s.style.display="block",s.style.animation="none",s.offsetWidth,s.style.animation="fade-scale-in 0.4s ease forwards"):s.style.display="none"})})});function c(t){let e="";switch(t){case"hero":e=`
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
                </svg>`;break;case"history":e=`
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
                </svg>`;break;case"boys":e=`
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
                </svg>`;break;case"girls":e=`
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
                </svg>`;break;case"ep":e=`
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
                </svg>`;break;case"kindergarten":e=`
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
                </svg>`;break}return`data:image/svg+xml;utf8,${encodeURIComponent(e)}`}function u(t){const e=i.getAttribute("data-theme")==="dark",C=`
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <!-- Outer Golden Circle -->
            <circle cx='50' cy='50' r='46' fill='${e?"#0b1109":"#005a2b"}' stroke='#ffcc00' stroke-width='3.5'/>
            <!-- Catholic shield border -->
            <path d='M50,18 C58,18 78,13 78,13 L78,55 C78,72 50,83 50,83 C50,83 22,72 22,55 L22,13 C22,13 42,18 50,18 Z' fill='none' stroke='#ffcc00' stroke-width='2'/>
            <!-- Holy Cross inside -->
            <path d='M48.5,24 H51.5 V75 H48.5 Z M32,38 H68 V41 H32 Z' fill='#ffcc00'/>
            <!-- Shield with letters -->
            <rect x='40' y='48' width='20' height='16' rx='3' fill='${e?"#131b11":"#005a2b"}' stroke='#ffcc00' stroke-width='1.5'/>
            <text x='50' y='60' font-family='Prompt, sans-serif' font-size='10' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ย.อ.</text>
        </svg>`;t.src=`data:image/svg+xml;utf8,${encodeURIComponent(C)}`,t.classList.add("fallback-svg-active")}function v(t){const e=t.getAttribute("id"),o=t.getAttribute("src");if(console.log(`Failed to load image: ${o}. Applying premium vector fallback.`),e==="school-logo"||e==="footer-school-logo"){u(t);return}if(e==="hero-banner-image"){t.src=c("hero"),t.classList.add("fallback-svg-active");return}if(e==="history-main-image"){t.src=c("history"),t.classList.add("fallback-svg-active");return}if(e==="img-boys"){t.src=c("boys"),t.classList.add("fallback-svg-active");return}if(e==="img-girls"){t.src=c("girls"),t.classList.add("fallback-svg-active");return}if(e==="img-ep"){t.src=c("ep"),t.classList.add("fallback-svg-active");return}if(e==="img-kindergarten"){t.src=c("kindergarten"),t.classList.add("fallback-svg-active");return}if(e==="news-img-1"){t.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M197,85 H203 V115 H197 Z M190,97 H210 V103 H190 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ประกาศปิดภาคเรียนฤดูร้อน 2569</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ข่าวประชาสัมพันธ์ - 8 เมษายน 2569</text>
            </svg>
            `)}`,t.classList.add("fallback-svg-active");return}if(e==="news-img-2"){t.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#0b1109'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M192,93 H208 V96 H192 Z M192,102 H208 V105 H192 Z M192,111 H202 V114 H192 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>ตารางจำหน่ายหนังสือ &amp; เครื่องแบบ</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ประกาศสำคัญ - 8 เมษายน 2569</text>
            </svg>
            `)}`,t.classList.add("fallback-svg-active");return}if(e==="news-img-3"){t.src=`data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'>
                <rect width='100%' height='100%' fill='#005a2b'/>
                <rect x='10' y='10' width='380' height='230' fill='none' stroke='#ffcc00' stroke-width='2' opacity='0.25'/>
                <circle cx='200' cy='100' r='25' fill='none' stroke='#ffcc00' stroke-width='2'/>
                <path d='M200,85 C190,100 200,115 200,115 C200,115 210,100 200,85 Z' fill='#ffcc00'/>
                <text x='200' y='175' font-family='Prompt, sans-serif' font-size='16' font-weight='bold' fill='#ffcc00' text-anchor='middle'>สืบสานประเพณีสงกรานต์ รดน้ำดำหัว</text>
                <text x='200' y='205' font-family='Sarabun, sans-serif' font-size='12' fill='#ffffff' text-anchor='middle' opacity='0.7'>ภาพกิจกรรม - 7 เมษายน 2569</text>
            </svg>
            `)}`,t.classList.add("fallback-svg-active");return}const f=`
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
            <text x='200' y='245' font-family='Sarabun, sans-serif' font-size='13' font-weight='500' fill='#ffcc00' text-anchor='middle'>${t.getAttribute("alt")||"ภาพกิจกรรมยอแซฟอุปถัมภ์"}</text>
            <text x='200' y='270' font-family='Sarabun, sans-serif' font-size='10' fill='#ffffff' text-anchor='middle' opacity='0.5'>JOSEPH UPATHAM SCHOOL GALLERY</text>
        </svg>`;t.src=`data:image/svg+xml;utf8,${encodeURIComponent(f)}`,t.classList.add("fallback-svg-active")}window.addEventListener("error",t=>{t.target.tagName==="IMG"&&v(t.target)},!0),document.querySelectorAll("img").forEach(t=>{t.naturalWidth===0&&t.src&&v(t)})});
