(() => {
  const S = STORY;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /* ---------- 1. Quiz gate (case-insensitive answer) ---------- */
  $('quiz-eyebrow').textContent = S.quiz.eyebrow;
  $('quiz-title').textContent = S.quiz.title;
  $('quiz-subtitle').textContent = S.quiz.subtitle;
  $('quiz-question').textContent = S.quiz.question;
  $('quiz-button').textContent = S.quiz.button;
  $('answer').placeholder = S.quiz.placeholder;

  const gate = $('gate'), site = $('site');
  function unlock() {
    gate.classList.add('hide'); site.classList.remove('locked');
    try { sessionStorage.setItem('ourStoryUnlocked', 'yes'); } catch (_) {}
  }
  try { if (sessionStorage.getItem('ourStoryUnlocked') === 'yes') unlock(); } catch (_) {}

  $('gate-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const typed = $('answer').value.trim().toLowerCase();
    if (typed === S.quiz.answer.toLowerCase()) { $('gate-error').textContent = ''; unlock(); return; }
    $('gate-error').textContent = S.quiz.wrong;
    const card = $('gate-card'); card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
    $('answer').select();
  });

  /* ---------- 2. Hero (batch 1) ---------- */
  $('hero-eyebrow').textContent = S.hero.eyebrow;
  $('hero-photo').src = S.hero.photo;
  $('hero-caption').textContent = S.hero.caption;
  $('hero-title').innerHTML = S.hero.title;
  S.hero.lines.forEach((l, i) => $('hero-lines').append(el('p', i ? 'hero-line strong' : 'hero-line', l)));
  $('hero-cue').textContent = S.hero.cue;

  /* ---------- 3. Chapters (batches 2 to 7) ---------- */
  const wrap = $('chapters');
  S.chapters.forEach((c, i) => {
    const sec = el('section', 'chapter section-pad' + (i % 2 ? ' alt' : '')); sec.id = c.id;
    const head = el('div', 'section-title');
    head.append(el('span', 'chapter-number', String(i + 1).padStart(2, '0')), el('span', 'eyebrow', c.eyebrow), el('h2', null, c.title));
    (c.text || []).forEach(t => head.append(el('p', null, t)));
    sec.append(head);

    if (c.photos && c.photos.length) {
      const n = c.photos.length;
      const grid = el('div', c.layout === 'row' ? 'row-grid' : (n <= 2 ? 'pair-grid' : 'masonry'));
      c.photos.forEach(src => {
        const b = el('button', 'ph'); b.type = 'button';
        const img = el('img'); img.src = src; img.alt = c.eyebrow; img.loading = 'lazy';
        b.append(img); b.addEventListener('click', () => openLightbox(src)); grid.append(b);
      });
      sec.append(grid);
    }

    if (c.visits) {
      const g = el('div', 'visit-grid');
      c.visits.forEach(v => {
        const a = el('article', 'visit');
        const b = el('button', 'ph'); b.type = 'button';
        const img = el('img'); img.src = v.photo; img.alt = v.title; img.loading = 'lazy';
        b.append(img); b.addEventListener('click', () => openLightbox(v.photo));
        a.append(b, el('span', 'eyebrow', v.when), el('h3', null, v.title), el('p', null, v.text));
        g.append(a);
      });
      sec.append(g);
    }

    if (c.video) {
      const f = el('figure', 'video-frame');
      const v = el('video'); v.controls = true; v.playsInline = true; v.preload = 'metadata'; v.poster = c.video.poster;
      const s = el('source'); s.src = c.video.src; s.type = 'video/mp4'; v.append(s);
      f.append(v, el('figcaption', null, c.video.caption)); sec.append(f);
    }

    if (c.note) sec.append(el('div', 'handwritten', c.note));
    wrap.append(sec);
  });

  /* ---------- 4. Letter ---------- */
  $('letter-greeting').textContent = S.letter.greeting;
  S.letter.paragraphs.forEach(p => $('letter-body').append(el('p', null, p)));
  $('letter-signature').textContent = S.letter.signature;
  $('footer-text').textContent = S.footer;

  /* ---------- Lightbox ---------- */
  const lb = $('lightbox'), lbImg = $('lightbox-img');
  function openLightbox(src) { lbImg.src = src; lb.classList.add('show'); lb.setAttribute('aria-hidden', 'false'); }
  function closeLightbox() { lb.classList.remove('show'); lb.setAttribute('aria-hidden', 'true'); lbImg.removeAttribute('src'); }
  $('hero-polaroid').addEventListener('click', () => openLightbox(S.hero.photo));
  $('lightbox-close').addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- 5. Feedback: Yes / No game ----------
     Each "No" makes No smaller and Yes bigger.
     After maxNo taps the No button disappears, so only Yes is left. */
  const F = S.feedback;
  $('fb-eyebrow').textContent = F.eyebrow;
  $('fb-title').innerHTML = F.title;
  $('fb-question').textContent = F.question;
  $('fb-label').textContent = F.formLabel;
  $('fb-text').placeholder = F.placeholder;
  $('fb-send').textContent = F.send;

  function setupYesNo(box, onYes) {
    const yes = box.querySelector('.yes'), no = box.querySelector('.no');
    let count = 0;
    const reset = () => { count = 0; yes.style.transform = ''; no.style.transform = ''; no.style.display = ''; };
    no.addEventListener('click', () => {
      count++;
      if (count >= F.maxNo) { no.style.display = 'none'; yes.style.transform = `scale(${1 + count * 0.22})`; return; }
      no.style.transform = `scale(${Math.max(0.25, 1 - count * 0.17)})`;
      yes.style.transform = `scale(${1 + count * 0.22})`;
    });
    yes.addEventListener('click', () => onYes(reset));
    return reset;
  }

  const modal = $('modal'), modalQ = $('modal-q');
  let step = 0;
  function showModal(text) { modalQ.textContent = text; modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); }
  function hideModal() { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }

  setupYesNo($('ask-card'), () => { step = 1; resetModal(); showModal(F.confirm1); });
  const resetModal = setupYesNo(modal.querySelector('.modal-card'), (reset) => {
    if (step === 1) { step = 2; reset(); showModal(F.confirm2); return; }
    hideModal();
    $('ask-card').classList.add('hidden');
    $('feedback-form').classList.remove('hidden');
    $('fb-text').focus();
  });

  /* Hosted pages can't send emails or download files, so the note is shown with a Copy button. */
  $('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const words = $('fb-text').value.trim();
    const msg = $('form-message');
    if (!words) { msg.textContent = 'Write a little something first ♡'; return; }
    const text = 'My note for you ♡\n\n' + words;
    try { localStorage.setItem('ourStoryNote', text); } catch (_) {}
    msg.innerHTML = '';
    const card = el('pre', 'note-card'); card.textContent = text;
    const btn = el('button', 'pill submit-pill', 'Copy my note <span>♡</span>'); btn.type = 'button';
    const tip = el('p'); tip.textContent = F.copyTip;
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(text); tip.textContent = 'Copied! Now paste it to me on WhatsApp ♡'; }
      catch (_) { tip.textContent = 'Could not copy here, so take a screenshot and send it to me ♡'; }
    });
    msg.append(card, btn, tip);
    $('feedback-form').classList.add('hidden');
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
