(function(){
'use strict';
const RM   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(pointer: fine)').matches;
const WIDE = window.matchMedia('(min-width: 860px)');
const G  = typeof gsap !== 'undefined';
const ST = G && typeof ScrollTrigger !== 'undefined';
if (G && ST) gsap.registerPlugin(ScrollTrigger);

/* ---------- data: replace with your own projects ---------- */
const EMAIL = 'zkhairnar999@gmail.com';

/* NOTE — the image URLs below came from the chat file transfer and are
   TEMPORARY (they can expire). Before publishing, download them into an
   "images" folder next to this HTML file and swap each URL for its local path.
   Also place your resume PDF next to this file, named exactly: resume.pdf
   (the download button saves it to visitors as "Zeel-Khairnar-Resume.pdf").
   Rehost list:
     Sugatsune posters (9) .... images/foldable.png, images/100000.png,
                              images/mlgx25.png, images/hook.png,
                              images/concealed.png, images/torque.png,
                              images/handles.png, images/swivel.png,
                              images/whats-inside.png
     Sugatsune IREE railway
       creatives (4) ......... images/iree-train.jpg (case opener, WhatsApp 10.50.53),
                              images/iree-gate.jpg (WhatsApp 10.50.08),
                              images/iree-coach.jpg (WhatsApp 10.52.05),
                              images/iree-corridor.jpg (WhatsApp 10.53.02)
     Dream Vox / Havmor (2) ... images/havmor-set.png (the shoot setup),
                              images/havmor-strawberries.png (the kitchen prep)
     Oragraphy lookbook (3) ... images/oragraphy-look-1.png,
                              images/oragraphy-look-2.png,
                              images/oragraphy-look-3.png
     Sequinze bridal (6) ...... images/sequinze-1.png … images/sequinze-6.png
                              (originals 1.png–6.png)
     Your photos (2) .......... images/cafe.png (intro card),
                              images/on-location.png (about section)
     Resume .................. resume.pdf (your CV PDF, exact filename) */

/* IREE railway creatives — the expo series */
const IREE = {
  gate:     'images/iree_gate.jpg',
  train:    'images/iree_train.jpg',
  coach:    'images/iree_coach.jpg',
  corridor: 'images/iree_corridor.jpg'
};

/* Sequinze — wedding apparel shoot frames */
const SEQ = {
  f1: 'images/sequinze_1.webp',
  f2: 'images/sequinze_2.webp',
  f3: 'images/sequinze_3.webp',
  f4: 'images/sequinze_4.webp',
  f5: 'images/sequinze_5.webp',
  f6: 'images/sequinze_6.webp'
};

/* NOTE: no `year` fields anywhere — the site displays no dates by design */
const PROJECTS = [
  { num:'01', title:'Sugatsune India', client:'Sugatsune India',
    tags:'B2B · Campaign · Exhibition', metric:'13 Creatives · IREE',
    role:'Campaign Creative — Concept, Copy & Design', services:'Campaigns · Content · Social · Exhibition Design',
    seed:'zk-sugatsune',
    preview:'images/sugatsune_preview.webp',
    heroImg: IREE.train,
    heroCapL:'The hero frame — Rolling Stock, Component by Component',
    heroCapR:'IREE · Railway Series',
    challenge:'Sugatsune makes the hardware that architects specify and nobody screenshots — brackets, hinges, linear guides. Impeccably engineered, emotionally inert. The India arm needed a content series that could make a torque hinge compete for attention in a feed full of sneaker drops and phone launches — and a physical presence to match at IREE, India’s largest rail technology exhibition.',
    play:'A poster series that steals the visual grammar of consumer advertising — tech-launch swagger, beverage colour-blocking, Dyson-grade restraint — and points it at industrial components. Every concept is anchored to a real engineering spec: 100,000 test cycles become heartbeats, a folding bracket becomes the original foldable, an exploded hinge becomes the hero shot. The same thinking went physical: I designed the stall creatives and all promotional material for IREE — where Sugatsune India showcased its precision hardware solutions to decision-makers across the railway and infrastructure sector, through a dedicated railway application series.',
    results:[['13','Campaign creatives — poster series + railway series'],['100,000','Cycles, translated into a heartbeat'],['IREE','Stall creatives & promo — India’s largest rail expo']],
    quote:'You didn’t need a $2,000 phone to see the future — Sugatsune’s been building it.',
    quoteBy:'Creative rationale — EB Folding Bracket',
    worksLabel:'posters — concept, copy & design',
    works:[
      { img:'images/sugatsune_1.webp',
        title:'EB Folding Bracket', line:'Foldable? We’ve been doing it for years.',
        note:'The hook came from watching everyone lose their minds over the foldable-phone reveal — while folding hardware has quietly existed in cabinetry for decades. The poster borrows that big-tech-launch swagger and points it at a bracket, which is the joke and the flex at the same time: you didn’t need a $2,000 phone to see the future — Sugatsune’s been building it.' },
      { img:'images/sugatsune_2.webp',
        title:'The 100,000-Cycle Test', line:'Your heart beats 100,000 times daily.',
        note:'A cycle-test number is just a spec until you give it a body to compare against. Tying 100,000 cycles to a heartbeat turns an engineering stat into something a non-engineer feels — durability stops being abstract and starts being personal.' },
      { img:'images/sugatsune_3.webp',
        title:'MLGX25 Linear Guide', line:'Built to Move',
        note:'Gen-Z poster language: big blunt type, high contrast, attitude over politeness. Industrial hardware rarely gets to look cool — this gave a linear guide rail the same visual energy as a sneaker drop.' },
      { img:'images/sugatsune_4.webp',
        title:'Recessed Hook', line:'No metaphor. Just the product, working.',
        note:'No borrowed concept — a real shot from an actual product shoot. Sometimes the most convincing creative is just showing the thing well: a finger interacting with the hook, mid-motion. No metaphor needed when the product photographs this cleanly.' },
      { img:'images/sugatsune_5.webp',
        title:'Concealed Torque Hinge', line:'Invisible design. Reliable performance.',
        note:'From the same shoot, caught mid-install on a real structure. The line on the poster wrote itself — because the hinge genuinely disappears into the build. The concept is the product’s own behaviour.' },
      { img:'images/sugatsune_6.webp',
        title:'Torque Hinge', line:'Two words. The whole ad.',
        note:'Pulled from Dyson’s playbook: minimal copy, one dominant product shot, and engineering that speaks through the lighting and the hand holding it. Restraint as a flex — the kind of ad that trusts the object to do the convincing.' },
      { img:'images/sugatsune_7.webp',
        title:'Stainless Steel Handles', line:'One family. One frame.',
        note:'A product range presented like a lineup — the whole handle family in a single confident frame, given the presence a hero product usually gets. Range, read in one glance.' },
      { img:'images/sugatsune_preview.webp',
        title:'Swivel Torque Hinge', line:'20,000 Cycle Tested',
        note:'Inspired by a Coke Zero ad’s bold colour-block-and-big-type treatment. The red field and stacked type give a mechanical swivel component the same punch a beverage brand gives a can — hardware treated like it deserves that level of visual confidence.' },
      { img:'images/sugatsune_9.webp',
        title:'HG-TAWJ40 Spring-Assisted Hinge', line:'What’s Inside?',
        note:'Engineering made legible: an exploded view with every component named, turning “spring-assisted” from jargon into something you can actually see — and making the inside of a hinge the interesting part.' }
    ],
    works2Title:'The Railway Series — IREE',
    works2Label:'railway creatives — designed for the expo',
    works2:[
      { img: IREE.gate,
        title:'At the Ticket Gate', line:'The first thing a passenger touches is a hinge.',
        note:'The railway series opens where passengers do — the ticket gate. One machine, four callouts: recessed handle, double-action hinge, soft-down stay, torque hinge with cable. Commuters pass through this hardware a million times without seeing it; the IREE creative points directly at it, so the people who specify it never miss it again.' },
      { img: IREE.coach,
        title:'Inside the Coach', line:'Every seat is a hardware catalogue.',
        note:'Five callouts deep inside a carriage — foot rest mechanism, mini guide rail, torque hinges at every fold point. Railway hardware is invisible by design: the passenger never notices, which is exactly why the creative has to point at it. The decision-maker recognises the coach; now they know what’s holding it together.' },
      { img: IREE.corridor,
        title:'Down the Corridor', line:'Even the toilet door is a spec sheet.',
        note:'The unglamorous half of the coach — touchless lid, indicator latch, TB handles, stainless ventilator. This is the hardware procurement teams actually specify on paper, so it earns its own frame. The quiet claim of the whole series: if it moves on a train, Sugatsune probably made it move better.' }
    ] },
  { num:'02', title:'Dream Vox Studios', client:'Havmor — via Dream Vox Studios',
    tags:'Production · BTS · On-Camera', metric:'PA + Model',
    role:'Production Assistant — & on-camera talent, Havmor ad', services:'Production · Timeline Management · Client Liaison · Talent',
    seed:'zk-dreamvox',
    preview:'images/dreamvox_preview.webp',
    challenge:'Dream Vox Studios is a production house — brands like Havmor arrive with a brief, and the studio has to turn it into a shootable day. My job as production assistant sat exactly in that gap: between what the client asked for and what the crew could actually build, solved before a single frame was shot.',
    play:'I worked between the client and the internal team so the brief made sense before anyone started building anything; managed the production timeline from the first idea to the final file, keeping the day on track and on budget; and helped the creative, tech and admin crews row in the same direction. On the Havmor shoot I also crossed the line — set support in the morning, on-camera talent by the afternoon. Both sides of the lens, one production.',
    results:[['PA + Model','Both sides of the camera — same shoot'],['Havmor','The brand on the call sheet'],['Idea → File','Timeline managed end-to-end']],
    quote:'Make the brief make sense before anyone starts building — then keep the day on schedule and on budget.',
    quoteBy:'The production assistant’s brief — Zeel’s job, lived daily',
    worksLabel:'frames — behind the scenes, Havmor',
    works:[
      { img:'images/dreamvox_set.webp',
        title:'The Set, Before Anybody Says Action', line:'Every hero shot starts as a taped-down table.',
        note:'Pre-shoot on the Havmor job: camera and long lens mounted, strawberries staged in their basket, fill light and tripod set, everything taped and marked. This is the part of a shoot a production assistant owns — the runway before takeoff, where a well-briefed day and a well-run timeline decide whether the footage lands.' },
      { img:'images/dreamvox_preview.webp',
        title:'Strawberry Prep, Between Takes', line:'The co-star arrives fresh.',
        note:'Sliced and styled on the prep board, ready for their close-up — the quiet half of a shoot day. And on this one I wasn’t only behind the table: I prepped and ran the set as production assistant, then stepped in front of the camera as a model in the ad. Rare thing, being answerable for both the schedule and the smile.' }
    ] },
  { num:'03', title:'Oragraphy', client:'Oragraphy · Sequinze',
    tags:'Fashion · Bridal · Photography', metric:'2 Labels · 9 Frames',
    role:'Marketing Assistant & Photographer', services:'Marketing Support · Photography · Lookbook · Bridal Campaign',
    seed:'zk-oragraphy',
    preview:'images/oragraphy_preview.webp',
    /* editorial: render the galleries as magazine-spread collages, not rows */
    editorial: true,
    challenge:'Fashion labels live and die by their image flow — lookbooks, feed posts, campaign frames, all needed yesterday. Oragraphy needed someone who could think like the marketing desk and shoot like a photographer, without the budget for two separate people. Sequinze — a big name in wedding apparel — needed a bridal campaign that felt ceremonial without turning the model into a waxwork.',
    play:'Both hats, both labels. At Oragraphy I planned what the brand needed to say as its marketing assistant, then picked up the camera and executed it — a floral lookbook shot on clean white, the garment carrying every frame. For Sequinze I built the wedding-apparel shoot on a single idea: ivory embroidery against crimson silk, floor to ceiling — every frame inside that palette, every pose allowed to breathe, so the collection reads as one story.',
    results:[['MA + Photo','Marketing desk and viewfinder — one person'],['09','Campaign frames across two labels'],['2','Labels — Oragraphy & Sequinze']],
    quote:'Write the plan. Shoot the plan. Post the plan.',
    quoteBy:'The marketing assistant’s week — Zeel, at Oragraphy & Sequinze',
    worksLabel:'lookbook frames — shot by Zeel',
    works:[
      { img:'images/oragraphy_preview.webp',
        title:'Hands Folded', line:'Clean white. One subject. Zero noise.',
        note:'A floral print doesn’t need a set — it needs silence.' },
      { img:'images/oragraphy_look2.webp',
        title:'The Slip Dress', line:'The fabric moves, the shot breathes.',
        note:'I let the model settle into her own posture instead of posing her.' },
      { img:'images/oragraphy_look3.webp',
        title:'Tied Shoulders', line:'If a detail is the argument, shoot the argument.',
        note:'The construction is the reason someone picks this dress over the next one.' }
    ],
    works2Title:'Sequinze — Wedding Apparel',
    works2Label:'bridal frames — shot by Zeel',
    works2:[
      { img: SEQ.f1, title:'The Crimson Set', line:'A wedding in two colours.',
        note:'Every frame inside one palette, so the collection reads as a single story.' },
      { img: SEQ.f2, title:'Seated in Silk', line:'Regal, not rigid.',
        note:'The gown supplies the ceremony, she supplies the ease.' },
      { img: SEQ.f3, title:'The Silhouette', line:'Crop top, full skirt, one unbroken line.',
        note:'When the garment is the argument, the photograph stays out of the way.' },
      { img: SEQ.f4, title:'Centre Frame', line:'Symmetry is the ceremony.',
        note:'The most formal frame of the series, on purpose — tradition, without a word of copy.' },
      { img: SEQ.f5, title:'The Lean', line:'Formality with a pulse.',
        note:'One degree off symmetry: formal enough for the mother, alive enough for the bride.' },
      { img: SEQ.f6, title:'The Accessories', line:'The ring and the necklace earn their close-up.',
        note:'Bridal jewellery is part of the purchase decision — so the series closes on it.' }
    ] }
];

/* ---------- smooth scroll (Lenis) ---------- */
let lenis = null;
if (!RM && typeof Lenis !== 'undefined'){
  lenis = new Lenis({ duration: 1.1 });
  lenis.on('scroll', ()=>{ ST && ScrollTrigger.update(); });
  if (G){ gsap.ticker.add(t => lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0); }
  else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  lenis.stop(); // held until the loader finishes
}
const lockScroll = on => {
  document.documentElement.classList.toggle('locked', on);
  if (lenis) on ? lenis.stop() : lenis.start();
};
function goTo(sel){
  const el = document.querySelector(sel);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset:-64, duration:1.2 });
  else el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' });
}

/* ---------- text splitters ---------- */
function splitChars(el){
  const frag = document.createDocumentFragment();
  [...el.childNodes].forEach(n => {
    if (n.nodeType === Node.TEXT_NODE){
      for (const ch of n.textContent){
        if (ch === ' '){ frag.appendChild(document.createTextNode(' ')); continue; }
        const s = document.createElement('span'); s.className = 'k'; s.textContent = ch;
        frag.appendChild(s);
      }
    } else frag.appendChild(n);
  });
  el.textContent = ''; el.appendChild(frag);
}
function splitWords(el){
  const out = [];
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === Node.TEXT_NODE){
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          const i = document.createElement('span'); i.className = 'wi'; i.textContent = part;
          w.appendChild(i); frag.appendChild(w); out.push(i);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
    });
  };
  walk(el); return out;
}
document.querySelectorAll('[data-chars]').forEach(splitChars);
const heroChars = [...document.querySelectorAll('.hero-name .k')];

/* ---------- build work rows (no year column) ---------- */
const workList = document.getElementById('workList');
workList.innerHTML = PROJECTS.map((p,i)=>`
  <article class="work-row" data-project="${i}" data-cursor="VIEW" tabindex="0" role="button" aria-label="Open case: ${p.title}">
    <span class="w-num">0${i+1}</span>
    <div class="w-main"><h3 class="w-title">${p.title}</h3><p class="w-tags">${p.tags}</p></div>
    <div class="w-meta"><span class="w-metric">${p.metric}</span></div>
    <span class="w-arrow"><svg class="i"><use href="#i-ne"/></svg></span>
    <img class="w-thumb" loading="lazy" src="${p.preview || `https://picsum.photos/seed/${p.seed}/640/400.jpg`}" alt="${p.title} preview">
  </article>`).join('');

/* ---------- loader + hero intro ---------- */
let heroReady = false;
const loader = document.getElementById('loader');
const freeLines = ()=> document.querySelectorAll('.hn-line').forEach(l=>l.classList.add('free'));
function endLoad(){ if (loader) loader.remove(); lenis && lenis.start(); }

if (!G || RM){ endLoad(); freeLines(); heroReady = true; }
else {
  const cnt = { v:0 };
  const ldCount = document.getElementById('ldCount');
  const ldBar   = document.getElementById('ldBar');
  gsap.set('.hero-name .k', { yPercent:130 });
  const tl = gsap.timeline({ onComplete: ()=>{ freeLines(); heroReady = true; } });
  tl.to(cnt, { v:100, duration:1.4, ease:'power2.inOut', onUpdate:()=>{
       ldCount.textContent = String(Math.round(cnt.v)).padStart(3,'0');
       ldBar.style.transform = 'scaleX(' + (cnt.v/100) + ')';
     }})
    .to(loader, { clipPath:'inset(0 0 100% 0)', duration:.8, ease:'expo.inOut' }, '+=.12')
    .add(endLoad, '-=.3')
    .fromTo('.hero-name .k', { yPercent:130 }, { yPercent:0, duration:1.1, ease:'expo.out', stagger:.045 }, '-=.55')
    .fromTo('.hn-role', { y:26, autoAlpha:0 }, { y:0, autoAlpha:1, duration:.9, ease:'expo.out' }, '-=.7')
    .fromTo('.hero-blurb,.scroll-cue', { y:26, autoAlpha:0 }, { y:0, autoAlpha:1, duration:.9, ease:'expo.out' }, '-=.7')
    .fromTo('.stamp', { scale:.55, autoAlpha:0, rotate:-30 }, { scale:1, autoAlpha:1, rotate:0, duration:1.1, ease:'elastic.out(1,.5)' }, '-=.75')
    .fromTo('.ticker', { autoAlpha:0 }, { autoAlpha:1, duration:.7 }, '-=.6');
}

/* ---------- kinetic hero type (variable font reacts to cursor) ---------- */
const hero = document.getElementById('hero');
let mx = -9999, my = -9999, heroActive = true;
hero.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
hero.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });
new IntersectionObserver(en => { heroActive = en[0].isIntersecting; }).observe(hero);
const kState = heroChars.map(el => ({ el, w:380, o:48, y:0 }));

function kinetic(t){
  if (RM || !heroReady || !heroActive) return;
  for (let i = 0; i < kState.length; i++){
    const s = kState[i], r = s.el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) continue;
    const dx = mx - (r.left + r.width/2), dy = my - (r.top + r.height/2);
    let inf = Math.max(0, 1 - Math.hypot(dx, dy) / 320);
    inf = inf * inf * (3 - 2 * inf); // smoothstep
    const wave = .09 + .07 * Math.sin(t * 1.5 + i * .65); // always breathing
    const tgt = Math.min(1, inf + wave);
    s.w += (380 + tgt * 520 - s.w) * .16;
    s.o += (48  + tgt * 96  - s.o) * .16;
    s.y += (-tgt * Math.min(r.height * .12, 26) - s.y) * .16;
    s.el.style.fontVariationSettings = `'wght' ${s.w.toFixed(0)}, 'opsz' ${s.o.toFixed(1)}`;
    s.el.style.transform = `translate3d(0,${s.y.toFixed(2)}px,0)`;
  }
}

/* ---------- custom cursor ---------- */
const curDot = document.getElementById('cur-dot'),
      curRing = document.getElementById('cur-ring'),
      curLabel = document.getElementById('cur-label'),
      clIn = curLabel.querySelector('.cl-in');
let cx = innerWidth/2, cy = innerHeight/2, rx = cx, ry = cy;
if (FINE){
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    curDot.style.transform = `translate3d(${cx}px,${cy}px,0)`;
    curDot.style.opacity = curRing.style.opacity = 1;
    document.body.classList.remove('cur-off');
    const t = e.target.closest ? e.target.closest('a,button,[data-cursor]') : null;
    const lab = t ? (t.dataset.cursor || '') : '';
    document.body.classList.toggle('cur-hover', !!t && !lab);
    document.body.classList.toggle('cur-label', !!lab);
    if (lab) clIn.textContent = lab;
  });
  document.addEventListener('mouseleave', () => document.body.classList.add('cur-off'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cur-off'));
}
function cursorFrame(){
  if (!FINE) return;
  rx += (cx - rx) * .16; ry += (cy - ry) * .16;
  curRing.style.transform  = `translate3d(${rx}px,${ry}px,0)`;
  curLabel.style.transform = `translate3d(${rx}px,${ry}px,0)`;
}

/* ---------- floating work preview ---------- */
const preview = document.getElementById('preview');
const pvIn = preview.querySelector('.pv-in');
const pvCap = preview.querySelector('.pv-cap');
PROJECTS.forEach((p,i)=>{
  const img = document.createElement('img');
  img.dataset.i = i; img.alt = '';
  img.src = p.preview || `https://picsum.photos/seed/${p.seed}/640/480.jpg`;
  pvIn.insertBefore(img, pvCap);
});
const pvImgs = [...pvIn.querySelectorAll('img')];
let pOn = false, px = 0, py = 0, pr = 0, lastMx = 0;
function showPreview(i){
  if (!FINE || !WIDE.matches) return;
  pvImgs.forEach(im => im.classList.toggle('on', +im.dataset.i === i));
  pvCap.textContent = `0${i+1} — ${PROJECTS[i].title.toUpperCase()}`;
  if (!pOn){ pOn = true; preview.classList.add('show'); px = cx; py = cy; }
}
function hidePreview(){ pOn = false; preview.classList.remove('show'); }
document.querySelectorAll('.work-row').forEach(row => {
  row.addEventListener('mouseenter', () => showPreview(+row.dataset.project));
  row.addEventListener('mouseleave', hidePreview);
});
function previewFrame(){
  if (!FINE || !pOn){ pr *= .9; return; }
  const w = 340, h = 255;
  let tx = cx + 28; if (tx + w > innerWidth - 16) tx = cx - w - 28;
  const ty = Math.max(16, Math.min(innerHeight - h - 16, cy - h * .55));
  px += (tx - px) * .12; py += (ty - py) * .12;
  const vel = cx - lastMx; lastMx = cx;
  pr += (Math.max(-9, Math.min(9, vel * .55)) - pr) * .1;
  preview.style.transform = `translate3d(${px}px,${py}px,0) rotate(${pr}deg)`;
}

/* ---------- shared rAF loop ---------- */
const darkSecs = [...document.querySelectorAll('.dark')];
let onRedNow = false;
function headerWatch(){
  let hit = false;
  for (let i = 0; i < darkSecs.length; i++){
    const r = darkSecs[i].getBoundingClientRect();
    if (r.top <= 74 && r.bottom >= 10){ hit = true; break; }
  }
  if (hit !== onRedNow){ onRedNow = hit; document.body.classList.toggle('on-red', hit); }
}
function frame(tms){
  const t = tms / 1000;
  kinetic(t); cursorFrame(); previewFrame(); headerWatch();
}
if (G) gsap.ticker.add(t => frame(t * 1000));
else { const loop = t => { frame(t); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }

/* ---------- case study overlay ---------- */
const caseEl = document.getElementById('case');
const caseBody = caseEl.querySelector('.case-body');
const caseScroll = caseEl.querySelector('.case-scroll');
let caseOpenFlag = false;

if (G && !RM) gsap.set(caseEl, { yPercent:100, y:0 });

['wheel', 'touchmove', 'touchstart'].forEach(evt =>
  caseEl.addEventListener(evt, e => e.stopPropagation(), { passive: true }));

/* figure for the editorial spread — № caption + italic campaign line */
function spreadFig(it, n, cls){
  return `<figure class="${cls}">
    <img loading="lazy" src="${it.img}" alt="${it.title} — ${it.line}">
    <figcaption class="sp-cap"><b>№ ${String(n).padStart(2,'0')}</b> — ${it.title}
      <span class="sp-line">“${it.line}”</span></figcaption>
  </figure>`;
}

/* the magazine-spread collage — magazine layout for fashion cases */
function spreadBlock(items, o){
  if (!items || !items.length) return '';
  const head = `
  <header class="spread-head">
    <div>
      <p class="spread-kicker mono">${o.kicker}</p>
      <h3 class="spread-title">${o.title}</h3>
    </div>
    <p class="spread-sub">${o.sub}</p>
  </header>`;
  if (o.variant === 'or'){
    return `<section class="spread">${head}
      <div class="spread-grid">
        ${spreadFig(items[0], 1, 'or-1')}
        <aside class="sp-note or-2">
          <p class="sp-note-k mono">Both hats</p>
          <p>The eyes that wrote the shot list were the eyes behind the viewfinder — nothing got lost
          between “we need this” and “here it is.” Planned as marketing, shot as photography.</p>
        </aside>
        ${spreadFig(items[1], 2, 'or-3')}
        ${spreadFig(items[2], 3, 'or-4')}
      </div>
    </section>`;
  }
  return `<section class="spread">${head}
    <div class="spread-grid">
      ${spreadFig(items[0], 1, 'sq-1')}
      <aside class="sp-note red sq-2">
        <p class="sp-note-k mono">The concept</p>
        <p class="sp-note-big">A wedding in two colours — ivory embroidery against crimson silk, floor to ceiling.</p>
        <p>Every frame inside that one palette, so the collection reads as a single story — a campaign, not a catalogue.</p>
      </aside>
      ${spreadFig(items[1], 2, 'sq-3')}
      ${spreadFig(items[3], 3, 'sq-4')}
      ${spreadFig(items[2], 4, 'sq-5')}
      <aside class="sp-note sq-6">
        <p class="sp-note-k mono">On the floor</p>
        <p>Bridal photography defaults to stiffness — everyone instructs the model to be a monument.
        I let her settle into the chair instead: the gown supplies the ceremony, she supplies the ease.</p>
      </aside>
      ${spreadFig(items[4], 5, 'sq-7')}
      ${spreadFig(items[5], 6, 'sq-8')}
    </div>
  </section>`;
}

function tpl(p, i){
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const opener = p.heroImg
    ? `<figure class="case-opener">
         <img loading="lazy" src="${p.heroImg}" alt="${p.title} — ${p.heroCapL || 'opening frame'}">
         <figcaption class="case-opener-cap"><span>${p.heroCapL || ''}</span><span>${p.heroCapR || ''}</span></figcaption>
       </figure>`
    : (p.works || p.works2)
      ? '' /* galleries carry the visuals — no duplicated strip */
      : `<figure class="case-hero"><img loading="lazy" src="https://picsum.photos/seed/${p.seed}/1600/1000.jpg" alt="${p.title} — key visual"></figure>`;
  /* standard alternating gallery (non-editorial cases) */
  const gallery = (items, title, label, prefix) => (items && items.length) ? `
  <div class="case-works">
    <div class="case-works-head">
      <h4 class="mono accent">${title}</h4>
      <span class="mono mut">${String(items.length).padStart(2, '0')} ${label}</span>
    </div>
    ${items.map((w, j) => `
    <figure class="wk${j % 2 ? ' flip' : ''}">
      <div class="wk-fig"><img loading="lazy" src="${w.img}" alt="${w.title} — ${p.title}"></div>
      <figcaption class="wk-cap">
        <span class="mono mut">${prefix}.${String(j + 1).padStart(2, '0')}</span>
        <h5 class="wk-title">${w.title}</h5>
        <p class="wk-line">“${w.line}”</p>
        <p class="wk-note">${w.note}</p>
      </figcaption>
    </figure>`).join('')}
  </div>` : '';
  /* editorial cases (Oragraphy) render magazine spreads instead of rows */
  const galleries = p.editorial
    ? spreadBlock(p.works, { variant:'or',
        kicker:'Oragraphy — The Lookbook · № 01–03',
        title:'FLORALS<br>ON WHITE',
        sub:'Clean white, one subject, zero noise — the garment carries every frame.' })
      + spreadBlock(p.works2, { variant:'sq',
        kicker:'Sequinze — Wedding Apparel · № 01–06',
        title:'GIRLS<br>ON SILK',
        sub:'A famous wedding-apparel name, one idea: ivory against crimson, floor to ceiling. Ceremony, with a pulse.' })
    : gallery(p.works, 'The Work', p.worksLabel || 'pieces', 'W')
      + gallery(p.works2, p.works2Title || 'More Work', p.works2Label || 'pieces', 'R');
  const closing = p.works
    ? `<div class="case-quote-solo">
         <p>“${p.quote}”</p>
         <span class="mono mut">${p.quoteBy}</span>
       </div>`
    : `<div class="case-gal">
         <figure class="case-g1"><img loading="lazy" src="https://picsum.photos/seed/${p.seed}-2/900/1100.jpg" alt="${p.title} — detail"></figure>
         <div class="case-quote"><p>“${p.quote}”</p><span class="mono mut">${p.quoteBy}</span></div>
       </div>
       <figure class="case-g2"><img loading="lazy" src="https://picsum.photos/seed/${p.seed}-3/1600/640.jpg" alt="${p.title} — in situ"></figure>`;
  return `
  <div class="case-head">
    <span class="mono mut">Case ${p.num} <span class="accent">/</span> 0${PROJECTS.length}</span>
    <button class="case-close" data-cursor="CLOSE">Close <svg class="i"><use href="#i-x"/></svg></button>
  </div>
  <h2 class="case-title">${p.title}</h2>
  <div class="case-meta">
    <div class="cm"><span class="mono mut">Client</span><span>${p.client}</span></div>
    <div class="cm"><span class="mono mut">Role</span><span>${p.role}</span></div>
    <div class="cm"><span class="mono mut">Services</span><span>${p.services}</span></div>
  </div>
  ${opener}
  <div class="case-cols">
    <div class="case-block"><h4 class="mono accent">The Challenge</h4><p>${p.challenge}</p></div>
    <div class="case-block"><h4 class="mono accent">The Play</h4><p>${p.play}</p></div>
  </div>
  <div class="case-results">
    ${p.results.map(r => `<div class="res"><span class="res-num">${r[0]}</span><span class="mono mut">${r[1]}</span></div>`).join('')}
  </div>
  ${galleries}
  ${closing}
  <button class="case-next" data-next="${(i + 1) % PROJECTS.length}" data-cursor="NEXT">
    <span class="mono mut">Next case — ${next.num}</span>
    <span class="cn-title">${next.title} <svg class="i"><use href="#i-ne"/></svg></span>
  </button>`;
}
function staggerIn(){
  if (G && !RM) gsap.fromTo(caseBody.children, { y:46, autoAlpha:0 },
    { y:0, autoAlpha:1, duration:.85, stagger:.055, ease:'power3.out', clearProps:'all' });
}
function openCase(i){
  caseBody.innerHTML = tpl(PROJECTS[i], i);
  caseOpenFlag = true;
  caseEl.style.display = 'block'; caseScroll.scrollTop = 0;
  caseScroll.focus({ preventScroll: true });
  caseBody.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.fb) return;
      img.dataset.fb = '1';
      const slug = (img.alt || 'work').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'work';
      img.src = 'https://picsum.photos/seed/' + encodeURIComponent(slug) + '/900/1100.jpg';
    });
  });
  hidePreview(); lockScroll(true);
  if (G && !RM){
    gsap.fromTo(caseEl, { yPercent:100, y:0 }, { yPercent:0, y:0, duration:.7, ease:'expo.inOut' });
    setTimeout(staggerIn, 300);
  } else staggerIn();
}
function closeCase(){
  if (!caseOpenFlag) return;
  caseOpenFlag = false;
  const done = () => { caseEl.style.display = 'none'; lockScroll(false); };
  if (G && !RM) gsap.to(caseEl, { yPercent:100, y:0, duration:.6, ease:'expo.inOut', onComplete:done });
  else done();
}
caseEl.addEventListener('click', e => {
  if (e.target.closest('.case-close')) closeCase();
  const nx = e.target.closest('.case-next');
  if (nx){
    const n = +nx.dataset.next;
    const go = () => { caseBody.innerHTML = tpl(PROJECTS[n], n); caseScroll.scrollTop = 0; staggerIn(); };
    if (G && !RM) gsap.to(caseBody, { y:-24, autoAlpha:0, duration:.3, ease:'power2.in',
      onComplete:() => { gsap.set(caseBody, { y:0, autoAlpha:1 }); go(); } });
    else go();
  }
});
workList.addEventListener('click', e => {
  const row = e.target.closest('.work-row');
  if (row) openCase(+row.dataset.project);
});
workList.addEventListener('keydown', e => {
  const row = e.target.closest('.work-row');
  if (row && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); openCase(+row.dataset.project); }
});

/* ---------- fullscreen menu ---------- */
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
let menuOpen = false;
['wheel', 'touchmove', 'touchstart'].forEach(evt =>
  menu.addEventListener(evt, e => e.stopPropagation(), { passive: true }));
function toggleMenu(force){
  const open = force !== undefined ? force : !menuOpen;
  if (open === menuOpen) return;
  menuOpen = open;
  document.body.classList.toggle('menu-open', open);
  menuBtn.textContent = open ? 'Close' : 'Menu';
  menu.style.pointerEvents = open ? 'auto' : 'none';
  menu.setAttribute('aria-hidden', String(!open));
  lockScroll(open);
  const clip = open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)';
  if (G && !RM){
    gsap.to(menu, { clipPath:clip, duration:.65, ease:'expo.inOut' });
    if (open) gsap.fromTo('.menu-inner a', { y:44, autoAlpha:0 },
      { y:0, autoAlpha:1, duration:.7, stagger:.06, delay:.25, ease:'power3.out' });
  } else menu.style.clipPath = clip;
}
menuBtn.addEventListener('click', () => toggleMenu());

/* ---------- anchor scrolls ---------- */
document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const t = el.dataset.scroll;
    const wasMenu = menuOpen;
    if (menuOpen) toggleMenu(false);
    setTimeout(() => goTo(t), wasMenu ? 420 : 0);
  });
});

/* ---------- services accordion ---------- */
document.querySelectorAll('.svc-head').forEach(h => {
  h.addEventListener('click', () => {
    const svc = h.parentElement, open = svc.classList.contains('open');
    document.querySelectorAll('.svc.open').forEach(s => {
      if (s !== svc){ s.classList.remove('open'); s.querySelector('.svc-head').setAttribute('aria-expanded','false'); }
    });
    svc.classList.toggle('open', !open);
    h.setAttribute('aria-expanded', String(!open));
  });
});

/* ---------- scroll-triggered reveals, scrub, parallax ---------- */
if (G && ST && !RM){
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const words = splitWords(el);
    gsap.set(words, { yPercent:115 });
    ScrollTrigger.create({ trigger:el, start:'top 88%', once:true,
      onEnter:() => gsap.to(words, { yPercent:0, duration:.95, ease:'expo.out', stagger:.03 }) });
  });
  document.querySelectorAll('.sec-rule').forEach(r => {
    gsap.set(r, { scaleX:0, transformOrigin:'left center' });
    ScrollTrigger.create({ trigger:r, start:'top 92%', once:true,
      onEnter:() => gsap.to(r, { scaleX:1, duration:1.1, ease:'expo.out' }) });
  });
  gsap.from('.work-row', { y:44, autoAlpha:0, duration:.9, ease:'power3.out', stagger:.07,
    scrollTrigger:{ trigger:'.work-list', start:'top 85%', once:true } });
  const mani = document.getElementById('maniText');
  if (mani){
    const w = splitWords(mani);
    gsap.fromTo(w, { opacity:.13 }, { opacity:1, ease:'none', stagger:.05,
      scrollTrigger:{ trigger:mani, start:'top 80%', end:'top 30%', scrub:.4 } });
  }
  document.querySelectorAll('.media[data-parallax] img').forEach(img => {
    gsap.fromTo(img, { yPercent:-10 }, { yPercent:10, ease:'none',
      scrollTrigger:{ trigger:img.parentElement, start:'top bottom', end:'bottom top', scrub:true } });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
}

/* ---------- intro card: physical tilt + scroll drift ---------- */
const introCard = document.getElementById('introCard');
if (introCard){
  const tilt = introCard.querySelector('.ic-tilt');
  if (G && ST && !RM){
    gsap.from(introCard, { y:70, autoAlpha:0, duration:1.1, ease:'power3.out',
      scrollTrigger:{ trigger:introCard, start:'top 90%', once:true } });
    gsap.fromTo(introCard, { rotate:-3.4 }, { rotate:1.2, ease:'none',
      scrollTrigger:{ trigger:introCard, start:'top bottom', end:'bottom top', scrub:1 } });
  }
  if (FINE && G && !RM){
    introCard.addEventListener('mousemove', e => {
      const r = introCard.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - .5;
      const dy = (e.clientY - r.top) / r.height - .5;
      gsap.to(tilt, { rotationY: dx * 8, rotationX: -dy * 8,
        transformPerspective: 900, duration:.6, ease:'power3.out' });
    });
    introCard.addEventListener('mouseleave', () =>
      gsap.to(tilt, { rotationX:0, rotationY:0, duration:1, ease:'elastic.out(1,.4)' }));
  }
}

/* ---------- magnetic elements ---------- */
if (FINE && G && !RM){
  document.querySelectorAll('[data-magnet]').forEach(el => {
    const str = parseFloat(el.dataset.magnet) || .3;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x:(e.clientX - r.left - r.width/2) * str,
                    y:(e.clientY - r.top - r.height/2) * str, duration:.6, ease:'power3.out' });
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x:0, y:0, duration:.9, ease:'elastic.out(1,.35)' }));
  });
}

/* ---------- toast + email copy ---------- */
let toastT;
function toast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2600);
}
document.getElementById('emailCopy').addEventListener('click', () => {
  const done = () => toast('Copied — ' + EMAIL);
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = EMAIL; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch(e){ toast('Email: ' + EMAIL); }
    ta.remove();
  };
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(EMAIL).then(done).catch(fallback);
  else fallback();
});

/* ---------- keyboard ---------- */
window.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ if (caseOpenFlag) closeCase(); else if (menuOpen) toggleMenu(false); }
});
})();