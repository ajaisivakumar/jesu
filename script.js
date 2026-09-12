/* ================================================================
   COMFESTA 2K26 — Main JavaScript
   Cinematic scroll intro · Events · Modal · Preloader · Cursor
   ================================================================ */
'use strict';

/* ================================================================
   1. EVENT DATA (from index.html / script.js)
   ================================================================ */
const eventDetails = {
  paper: {
    tag: 'Technical', title: 'Paper Presentation',
    icon: '📄', category: 'tech',
    desc: 'Present innovative ideas, research findings, and emerging technologies in computer science before an expert panel.',
    team: '1 – 3 members', eligibility: 'Any UG / PG institution',
    rules: [
      'IEEE format is mandatory for the paper.',
      '6 minutes presentation + 2 minutes Q&A.',
      'Abstract submission is optional but recommended.',
      'Plagiarised content leads to disqualification.'
    ],
    judging: 'Originality, technical depth, clarity of delivery, and handling of Q&A.',
    prize: 'Cash + Certificate'
  },
  auction: {
    tag: 'Technical', title: 'Auction Coding Contest',
    icon: '🔨', category: 'tech',
    desc: 'Bid virtual credits to "buy" coding problems of varying difficulty, then solve them on the clock.',
    team: '2 members', eligibility: 'CSE / IT / allied branches',
    rules: [
      'Each team starts with a fixed credit pool.',
      'Problems are locked once purchased by a team.',
      'Only permitted compilers / judge tools may be used.',
      'Partial marks are not awarded for incomplete solutions.'
    ],
    judging: 'Problems solved, time taken, and bidding strategy.',
    prize: 'Cash + Certificate'
  },
  vibe: {
    tag: 'Technical', title: 'AI Vibe Coding',
    icon: '🤖', category: 'tech',
    desc: 'Build a working micro-product or creative tool using AI coding assistants and prompt engineering.',
    team: '1 – 2 members', eligibility: 'Any UG / PG institution',
    rules: [
      'Any AI coding assistant or tool is allowed.',
      'Theme is revealed on the spot.',
      '90-minute build window.',
      'A short live walkthrough / demo is required at the end.'
    ],
    judging: 'Creativity, functionality, effective use of AI tooling, and presentation.',
    prize: 'Cash + Certificate'
  },
  qr: {
    tag: 'Technical', title: 'QR Decrypt Hunt',
    icon: '🔍', category: 'tech',
    desc: 'Follow a trail of QR codes hidden across campus, each decrypting into a clue for the next checkpoint.',
    team: '2 – 3 members', eligibility: 'Any UG / PG institution',
    rules: [
      'Only the provided scanner page may be used — no general internet access.',
      'Skipped checkpoints carry a time penalty.',
      'Tampering with codes leads to disqualification.',
      'Final answer must be sealed at the finish desk.'
    ],
    judging: 'Total time taken and number of checkpoints cleared.',
    prize: 'Cash + Certificate'
  },
  image: {
    tag: 'Non-technical', title: 'Image Finding',
    icon: '🖼️', category: 'nontech',
    desc: 'Spot hidden objects, patterns and mismatches across a series of rapid-fire image rounds.',
    team: 'Individual or duo', eligibility: 'Open to all students',
    rules: [
      '3 rounds with decreasing time limits.',
      'No zooming or external tools allowed.',
      'Ties are broken by the fastest correct buzz.'
    ],
    judging: 'Accuracy and response time.',
    prize: 'Prizes + Certificate'
  },
  charades: {
    tag: 'Non-technical', title: 'Dumb Charades',
    icon: '🎭', category: 'nontech',
    desc: 'Act it out — no words allowed. A fast, funny test of expression and teamwork.',
    team: '3 – 4 members', eligibility: 'Open to all students',
    rules: [
      'No sounds or lip-syncing permitted.',
      '60 seconds per word.',
      'Category list is shared 24 hours before the event.',
      "The judge's call on gestures is final."
    ],
    judging: 'Correct guesses, time remaining, and showmanship.',
    prize: 'Prizes + Certificate'
  },
  gaming: {
    tag: 'Non-technical', title: 'Gaming Arena',
    icon: '🎮', category: 'nontech',
    desc: 'Squad up and battle it out in a custom-room Free Fire knockout tournament.',
    team: '4 members per squad', eligibility: 'Own registered game ID required',
    rules: [
      'Custom room code is shared 15 minutes before the match.',
      'Emulator use is not allowed.',
      'Teaming or hacking leads to instant disqualification.',
      'Participants must arrange their own device and internet.'
    ],
    judging: 'Placement points plus kill points across matches.',
    prize: 'Prizes + Certificate'
  },
  ads: {
    tag: 'Non-technical', title: 'Ads On Spot',
    icon: '📺', category: 'nontech',
    desc: 'Turn a surprise product into a punchy 60-second ad — on the spot, with no scripts prepared in advance.',
    team: '1 – 3 members', eligibility: 'Open to all students',
    rules: [
      'Product / theme is revealed 10 minutes before the performance.',
      'Props are limited to what is provided at the venue.',
      'No offensive or vulgar content.',
      'Time limit is strictly enforced.'
    ],
    judging: 'Creativity, persuasiveness, presentation, and adherence to time.',
    prize: 'Prizes + Certificate'
  }
};

/* ================================================================
   2. TERMINAL PRELOADER
   ================================================================ */
(function initPreloader() {
  const termBody    = document.getElementById('termBody');
  const termCursor  = document.getElementById('termCursor');
  const preloader   = document.getElementById('preloader');
  if (!termBody) return;

  const lines = [
    { text: 'C:\\Users\\Ajai&gt;git init',                                 cls: 'term-cmd', delay: 200 },
    { text: 'Initialized empty Git repository in C:/Users/Ajai/.git/', cls: 'term-dim', delay: 400 },
    { text: '',                                                               delay: 150 },
    { text: 'C:\\Users\\Ajai&gt;git add.',                                 cls: 'term-cmd', delay: 500 },
    { text: '',                                                               delay: 250 },
    { text: 'C:\\Users\\Ajai&gt;git commit -m "Are you ready to?"',        cls: 'term-cmd', delay: 500 },
    { text: '[master (root-commit) 4e21a9c] Are you ready to?',       cls: 'term-dim', delay: 350 },
    { text: '<ok>✓ 1 file changed, 25 insertions(+)</ok>',                    delay: 300 },
    { text: '',                                                               delay: 200 },
    { text: 'C:\\Users\\Ajai&gt;git remote add origin "UCEV"',             cls: 'term-cmd', delay: 500 },
    { text: '',                                                               delay: 250 },
    { text: 'C:\\Users\\Ajai&gt;git push',                                 cls: 'term-cmd', delay: 500 },
    { text: 'Enumerating objects: 42, done.',                         cls: 'term-dim', delay: 350 },
    { text: 'Writing objects: 100% (42/42), done.',                   cls: 'term-dim', delay: 350 },
    { text: '<ok>✓ Pushed to UCEV</ok>',                                      delay: 350 },
    { text: '',                                                               delay: 200 },
    { text: 'Starting COMFESTA 2K26...',                              cls: '',         delay: 600 },
  ];

  let i = 0;
  function showNext() {
    if (i >= lines.length) {
      // Done — fade out
      termCursor.style.display = 'none';
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = '';
        startIntro();
      }, 700);
      return;
    }
    const l = lines[i++];
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'term-line';
      let html = l.text
        .replace(/<ok>(.*?)<\/ok>/g, '<span class="term-ok">$1</span>');
      if (l.cls) span.classList.add(l.cls);
      span.innerHTML = html;
      termBody.appendChild(span);
      termBody.scrollTop = termBody.scrollHeight;
      showNext();
    }, l.delay || 0);
  }

  document.body.style.overflow = 'hidden';
  setTimeout(showNext, 400);
})();

/* ================================================================
   3. EVENT CARDS — BUILD DOM
   ================================================================ */
function buildEventCards() {
  const techGrid    = document.getElementById('techGrid');
  const nonTechGrid = document.getElementById('nonTechGrid');
  if (!techGrid || !nonTechGrid) return;

  const techOrder    = ['paper','auction','vibe','qr'];
  const nonTechOrder = ['image','charades','gaming','ads'];
  const nums = { paper:'01', auction:'02', vibe:'03', qr:'04',
                 image:'05', charades:'06', gaming:'07', ads:'08' };

  function makeCard(id) {
    const d = eventDetails[id];
    const card = document.createElement('article');
    card.className = `event-card ${d.category} reveal`;
    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.setAttribute('aria-label',`${d.title} — view details`);
    card.innerHTML = `
      <div class="card-num">${nums[id]}</div>
      <div class="card-icon" aria-hidden="true">${d.icon}</div>
      <div class="card-kicker">${d.tag}</div>
      <h3 class="card-title">${d.title}</h3>
      <p class="card-desc">${d.desc}</p>
      <div class="card-footer">
        <span class="prize-badge">${d.prize}</span>
        <span class="card-cta">View details →</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(id); });
    return card;
  }

  techOrder.forEach(id => techGrid.appendChild(makeCard(id)));
  nonTechOrder.forEach(id => nonTechGrid.appendChild(makeCard(id)));

  // 3D tilt on desktop
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -10;
        const ry = ((x / rect.width)  - 0.5) *  10;
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }
}

/* ================================================================
   4. MODAL
   ================================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');

function openModal(id) {
  const d = eventDetails[id];
  document.getElementById('modalTag').textContent    = d.tag;
  document.getElementById('modalTag').className      = `modal-tag ${d.category}`;
  document.getElementById('modalTitle').textContent  = d.title;
  document.getElementById('modalDesc').textContent   = d.desc;
  document.getElementById('modalTeam').textContent   = d.team;
  document.getElementById('modalEligibility').textContent = d.eligibility;
  document.getElementById('modalPrize').textContent  = d.prize;
  document.getElementById('modalJudging').textContent = d.judging;
  const rulesList = document.getElementById('modalRules');
  rulesList.innerHTML = '';
  d.rules.forEach(rule => {
    const li = document.createElement('li');
    li.textContent = rule;
    rulesList.appendChild(li);
  });
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Brochure iframe click events
window.addEventListener('message', e => {
  if (e.data && e.data.type === 'brochure-event-click' && e.data.eventId) {
    openModal(e.data.eventId);
  }
});

/* ================================================================
   5. NAVIGATION
   ================================================================ */
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Mobile toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('.nav-link, .nav-cta-btn').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Scroll: add background + active link
const sections = document.querySelectorAll('section[id], div[id]');
function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  const top = window.scrollY + 120;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= top) current = s.id;
  });
  navLinks.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ================================================================
   6. SCROLL PROGRESS + FAB + BACK TO TOP
   ================================================================ */
const scrollBar = document.getElementById('scrollProgress');
const fabReg    = document.getElementById('fabRegister');
const backTop   = document.getElementById('backToTop');
const scrollInd = document.getElementById('scrollIndicator');

window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  if (scrollBar) scrollBar.style.width = pct + '%';
  const past = window.scrollY > 500;
  if (fabReg)   fabReg.classList.toggle('visible', past);
  if (backTop)  backTop.classList.toggle('visible', past);
  if (scrollInd) scrollInd.classList.toggle('hidden', window.scrollY > 100);
}, { passive: true });

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ================================================================
   7. CUSTOM CURSOR (pointer devices only)
   ================================================================ */
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (canHover && cursorDot && cursorRing) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  let lastSpark = 0;
  const sparkColors = ['#E01429','#FF3B52','#FFFFFF','rgba(245,245,247,.7)'];

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left  = mx + 'px';
    cursorDot.style.top   = my + 'px';

    // Spark trail
    const now = performance.now();
    if (now - lastSpark > 50) {
      lastSpark = now;
      const sp = document.createElement('div');
      sp.className = 'sparkle';
      sp.style.cssText = `
        left:${mx + (Math.random()*16-8)}px;
        top:${my  + (Math.random()*16-8)}px;
        width:${3+Math.random()*4}px;
        height:${3+Math.random()*4}px;
        background:${sparkColors[Math.floor(Math.random()*sparkColors.length)]};
      `;
      document.body.appendChild(sp);
      setTimeout(() => sp.remove(), 950);
    }
  }, { passive: true });

  // Lag ring for smoothness
  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow on interactive elements
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .event-card, .faq-q, .dock-btn, .nav-link')) {
      cursorRing.classList.add('active');
    }
  });
  document.addEventListener('mouseout', () => cursorRing.classList.remove('active'));
}

/* ================================================================
   8. COUNTDOWN
   ================================================================ */
// Confirmed date: September 30, 2026
const EVENT_DATE             = new Date('September 30, 2026 09:00:00').getTime();
const REGISTRATION_OPEN      = new Date('September 1, 2026 00:00:00').getTime();
const REGISTRATION_DEADLINE  = new Date('September 30, 2026 08:00:00').getTime();

function updateCounters() {
  const now  = Date.now();
  const diff = EVENT_DATE - now;

  const timerEl = document.getElementById('timer');
  if (timerEl) {
    if (diff > 0) {
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      timerEl.textContent = `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
    } else {
      timerEl.textContent = '🔴 EVENT LIVE';
    }
  }

  // Registration pulse widget: countdown + how much of the registration
  // window has elapsed.
  const pDays  = document.getElementById('pulseDays');
  const pHours = document.getElementById('pulseHours');
  const pMins  = document.getElementById('pulseMins');
  const pFill  = document.getElementById('pulseFill');
  const pText  = document.getElementById('pulseTrackText');

  const rdiff = REGISTRATION_DEADLINE - now;
  if (pDays && pHours && pMins) {
    if (rdiff > 0) {
      pDays.textContent  = String(Math.floor(rdiff / 86400000));
      pHours.textContent = String(Math.floor((rdiff % 86400000) / 3600000)).padStart(2, '0');
      pMins.textContent  = String(Math.floor((rdiff % 3600000) / 60000)).padStart(2, '0');
    } else {
      pDays.textContent = '0'; pHours.textContent = '00'; pMins.textContent = '00';
    }
  }
  if (pFill && pText) {
    const total   = REGISTRATION_DEADLINE - REGISTRATION_OPEN;
    const elapsed = now - REGISTRATION_OPEN;
    const pct     = Math.min(100, Math.max(0, (elapsed / total) * 100));
    pFill.style.width = pct + '%';
    if (rdiff <= 0) {
      pText.textContent = 'Registration window closed';
      const badge = document.querySelector('.reg-status-badge');
      if (badge) { badge.textContent = 'Closed'; badge.style.background = 'rgba(100,100,100,.2)'; badge.style.color = 'var(--white-dim)'; }
    } else if (pct > 80) {
      pText.textContent = 'Final days to register — window closing soon';
    } else {
      pText.textContent = 'Registration window open';
    }
  }
}
setInterval(updateCounters, 1000);
updateCounters();

/* ================================================================
   9. REGISTRATION LINK
   ================================================================ */
// TODO: Replace PASTE_GOOGLE_FORM_LINK_HERE with the actual Google Form URL
function openReg() { window.open('PASTE_GOOGLE_FORM_LINK_HERE', '_blank', 'noopener'); }

/* ================================================================
   10. FAQ ACCORDION
   ================================================================ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('.faq-item');
    const answer  = faqItem.querySelector('.faq-a');
    const isOpen  = btn.getAttribute('aria-expanded') === 'true';

    // Close all others
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-q').setAttribute('aria-expanded','false');
      item.querySelector('.faq-a').classList.remove('open');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded','true');
      answer.classList.add('open');
    }
  });
});

/* ================================================================
   11. PARTICLE BACKGROUND CANVAS
   ================================================================ */
(function particles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let pts = [], W, H;
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 30 : 60;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < count; i++) {
    pts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - .5) * .5,
      vy: (Math.random() - .5) * .5,
      r: .8 + Math.random() * 1.4,
      alpha: .2 + Math.random() * .4
    });
  }

  let rafId = null;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.fillStyle = `rgba(224,20,41,${p.alpha})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
      for (let j = i+1; j < pts.length; j++) {
        const q = pts[j];
        const d = Math.hypot(p.x-q.x, p.y-q.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(255,59,82,${(1 - d/130) * .25})`;
          ctx.lineWidth = .5;
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
        }
      }
    });
    rafId = requestAnimationFrame(draw);
  }

  // Only animate when intro section visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { if (!rafId) draw(); }
      else { cancelAnimationFrame(rafId); rafId = null; }
    });
  });
  const introSec = document.getElementById('home');
  if (introSec) observer.observe(introSec);
  else draw();
})();

/* ================================================================
   12. CINEMATIC INTRO — auto-playing crossfade sequence
   Scene 1 (college) -> Scene 2 (dept presents) -> Scene 3 (COMFESTA
   3D reveal) -> Hero CTA (persistent). Plays automatically on load —
   no scrolling required to see the branding pop in.
   ================================================================ */
function startIntro() {
  const REDUCED  = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const scene1   = document.getElementById('scene1');
  const scene2   = document.getElementById('scene2');
  const scene3   = document.getElementById('scene3');
  const heroCta  = document.getElementById('heroCta');
  const scrollInd = document.getElementById('scrollIndicator');
  const stages   = [scene1, scene2, scene3, heroCta].filter(Boolean);

  // Autoplay the campus video
  const vid = document.getElementById('collegeVideo');
  if (vid) {
    vid.muted = true;
    vid.play().catch(() => {
      const vw = vid.closest('.video-wrapper');
      if (vw) vw.style.background = 'linear-gradient(135deg, #150507 0%, #2a0a0f 100%)';
    });
  }

  // The intro now FREEZES the instant COMFESTA is fully revealed — it no
  // longer auto-advances to the hero CTA on a timer. The rest of the
  // sequence (camera dolly toward the campus gate, hero CTA fade-in, and
  // the final cross-fade into the next section) is driven entirely by the
  // visitor's own scroll — see initEntranceScroll() below.
  function showFrozenComfesta() {
    stages.forEach(s => s.classList.remove('stage-active'));
    scene3?.classList.add('stage-active');
    document.querySelectorAll(
      '.s1-overlay, .s2-dept, .s2-presents, .cf-letter, .s3-year, .s3-tagline'
    ).forEach(el => el.classList.add('visible'));
    if (scrollInd) scrollInd.classList.add('show');
  }

  if (REDUCED) {
    // Reduced motion: skip the scroll-linked dolly-zoom entirely and just
    // present the finished hero state right away.
    showFrozenComfesta();
    scene3?.classList.remove('stage-active');
    heroCta?.classList.add('stage-active');
    if (scrollInd) scrollInd.classList.add('show');
    return;
  }

  const timers = [];
  const at = (fn, t) => timers.push(setTimeout(fn, t));

  // --- Scene 1: college identity ---
  if (scene1) scene1.classList.add('stage-active');
  at(() => document.querySelector('.s1-overlay')?.classList.add('visible'), 250);

  // --- Scene 2: department presents ---
  at(() => {
    scene1?.classList.remove('stage-active');
    scene2?.classList.add('stage-active');
    document.getElementById('s2Dept')?.classList.add('visible');
    document.getElementById('s2Presents')?.classList.add('visible');
  }, 2100);

  // --- Scene 3: COMFESTA 3D reveal — this is the FINAL auto-played stage.
  // Once every letter is visible, the scene freezes here and waits.
  at(() => {
    scene2?.classList.remove('stage-active');
    scene3?.classList.add('stage-active');
    document.querySelectorAll('.cf-letter').forEach(l => l.classList.add('visible'));
    document.getElementById('s3Year')?.classList.add('visible');
    document.getElementById('s3Tagline')?.classList.add('visible');
  }, 4200);

  // --- Freeze: reveal the scroll cue once COMFESTA has fully landed ---
  at(() => { if (scrollInd) scrollInd.classList.add('show'); }, 5400);

  // Let an impatient visitor skip straight to the frozen COMFESTA state
  let skipped = false;
  function skipIntro() {
    if (skipped) return;
    skipped = true;
    timers.forEach(clearTimeout);
    showFrozenComfesta();
  }
  window.addEventListener('scroll', () => { if (window.scrollY > 30) skipIntro(); }, { passive: true, once: true });
  document.getElementById('home')?.addEventListener('click', skipIntro, { once: true });

  initEntranceScroll();
}

/* ================================================================
   12b. SCROLL-DRIVEN CAMPUS ENTRANCE
   Once COMFESTA is frozen on screen, scrolling drives a cinematic
   dolly-zoom toward the campus gate, fades the hero CTA in, then
   cross-fades the whole intro stage into the next section.
   ================================================================ */
function initEntranceScroll() {
  const introSection = document.getElementById('home');
  const introSticky   = document.getElementById('introSticky');
  const scene3        = document.getElementById('scene3');
  const heroCta       = document.getElementById('heroCta');
  const scrollInd     = document.getElementById('scrollIndicator');
  if (!introSection || !introSticky) return;
  if (introSection.dataset.entranceBound) return;
  introSection.dataset.entranceBound = '1';

  const REDUCED = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  let ticking = false;

  function render() {
    ticking = false;
    const rect = introSection.getBoundingClientRect();
    const scrollable = introSection.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const p = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;

    // 0 -> 1 dolly-zoom toward the entrance gate
    introSticky.style.setProperty('--entrance-zoom', REDUCED ? Math.min(1, p) : p.toFixed(4));

    // Below this point we only touch inline styles once the visitor has
    // actually started scrolling — otherwise we'd fight the class-driven
    // scene1 -> scene2 -> scene3 reveal that autoplays on load.
    // Only take over from the class-driven auto-intro once COMFESTA has
    // actually finished its own reveal — guards against an early, tiny
    // scroll flashing scene 3 in before its scheduled time.
    const frozen = scene3 ? scene3.classList.contains('stage-active') : true;
    const active = p > 0 && frozen;
    introSticky.classList.toggle('entrance-active', active);

    if (!active) {
      if (scene3) scene3.style.opacity = '';
      if (heroCta) { heroCta.style.opacity = ''; heroCta.style.pointerEvents = ''; }
    } else {
      // COMFESTA lettering recedes as the camera starts moving in
      if (scene3) scene3.style.opacity = String(Math.max(0, 1 - p / 0.35));

      // Hero CTA (pills, countdown, register) fades in mid-way through the approach
      if (heroCta) {
        const hp = Math.min(1, Math.max(0, (p - 0.30) / 0.30));
        heroCta.style.opacity = String(hp);
        heroCta.style.pointerEvents = hp > 0.4 ? 'auto' : 'none';
      }
    }

    // Whole intro stage cross-fades away once the gate is reached
    const fadeOut = Math.min(1, Math.max(0, (p - 0.78) / 0.22));
    introSticky.style.opacity = String(1 - fadeOut);

    if (scrollInd) scrollInd.classList.toggle('show', p < 0.02);
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  }, { passive: true });

  render();
}

/* ================================================================
   13. SCROLL REVEAL (IntersectionObserver)
   ================================================================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal, .stat-card, .schedule-item, .reg-step, .guide-card, .judging-card, .coord-card, .venue-info-card, .faq-item');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('revealed');
        }, idx * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });

  // Safety net: event cards are built dynamically after this observer is
  // set up, and on very short/odd viewports an element can occasionally
  // sit just outside every threshold crossing. Guarantee visibility after
  // a short delay so content is never stuck invisible.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
  }, 3500);
})();

/* ================================================================
   14. ANIMATED STATS (count-up)
   ================================================================ */
(function countUp() {
  const statEls = document.querySelectorAll('[data-count]');
  if (!statEls.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target  = parseInt(el.dataset.count);
      const prefix  = el.dataset.prefix || '';
      const suffix  = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();
      function update(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const val = Math.round(ease * target);
        el.textContent = prefix + val.toLocaleString() + suffix;
        if (t < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => io.observe(el));
})();

/* ================================================================
   15. FOOTER CANVAS (ambient particles)
   ================================================================ */
(function footerCanvas() {
  const fc = document.getElementById('footerCanvas');
  if (!fc) return;
  const ctx = fc.getContext('2d');
  let W, H;
  function resize() {
    const footer = document.getElementById('footer');
    W = fc.width  = footer.offsetWidth;
    H = fc.height = footer.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const stars = Array.from({length: 60}, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.2,
    alpha: .15 + Math.random() * .35,
    speed: .00002 + Math.random() * .00004
  }));

  let t = 0;
  function draw() {
    t++;
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      const x = s.x * W;
      const y = s.y * H;
      const a = s.alpha * (0.5 + 0.5 * Math.sin(t * s.speed * 1000));
      ctx.fillStyle = `rgba(245,245,247,${a})`;
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) draw(); });
  });
  io.observe(fc);
})();

/* ================================================================
   16. MAGNETIC BUTTONS
   ================================================================ */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.28;
      const dy = (e.clientY - cy) * 0.28;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ================================================================
   17. CALL INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildEventCards();
  // Schedule items now play the alternating left/right timeline reveal
  // handled by initReveal() + the .schedule-item.revealed CSS — no
  // override needed here.
});
