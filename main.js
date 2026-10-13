const DATA={"reviews": [{"q": "I went to Kim after weeks of sciatica pain with no relief from chiropractic care. After one session combining massage and cranial work, my pain was completely gone. Her calming voice and professional approach made the experience incredible.", "n": "Claudia Gutierrez"}, {"q": "Kim’s knowledge and skill are world-class. I’ve had therapeutic massages around the world, and her work is among the best. She provides deep tissue massage without causing pain, and I never feel sore afterward.", "n": "Craig Clark"}, {"q": "From the moment I walked in, Kim’s calm and grounding energy made me feel completely at ease. The session felt like a blend of massage and guided meditation, offering both physical and mental healing.", "n": "Kerra Robinson"}, {"q": "My experience with Kimberly was beyond amazing. She is a truly gifted healer who customized my session perfectly. I left feeling renewed and deeply relaxed.", "n": "Jessica Wilson"}, {"q": "This was one of the best massages I’ve ever had. She listened carefully and customized the session to my specific needs. I left feeling relaxed and pain-free and am already looking forward to my next visit.", "n": "Jeff M."}, {"q": "Kim was warm, welcoming, and genuinely attentive to my needs. The environment was incredibly relaxing, and the massage was amazing. The added stretching relieved my pain, and I’ll definitely be returning.", "n": "Philip Achee"}]};
/* Body Balance Therapies — Concept 1 interactions (no dependencies) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var dd = $('[data-region="dd"]');
  var menu = $('[data-region="menu"]');
  var ddBtn = $('[data-action="toggleDd"]');
  var current = 0;

  function setDd(open) {
    dd.hidden = !open;
    if (ddBtn) ddBtn.setAttribute('aria-expanded', String(open));
  }

  function setMenu(open) {
    menu.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }

  function showReview(i) {
    var n = DATA.reviews.length;
    current = (i + n) % n;
    $('[data-bind="quote"]').textContent = DATA.reviews[current].q;
    $('[data-bind="qname"]').textContent = DATA.reviews[current].n;
    $$('[data-action="d.go"]').forEach(function (b, k) {
      b.className = k === current ? 'dot dot-on' : 'dot';
      b.setAttribute('aria-current', k === current ? 'true' : 'false');
    });
  }

  var actions = {
    toggleDd: function () { setDd(dd.hidden); },
    closeDd: function () { setDd(false); },
    toggleMenu: function () { setMenu(menu.hidden); },
    prev: function () { showReview(current - 1); },
    next: function () { showReview(current + 1); },
    'd.go': function (el) { showReview(parseInt(el.getAttribute('data-index'), 10) || 0); }
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (el && actions[el.getAttribute('data-action')]) {
      // links keep their default (smooth scroll to the section); buttons don't have one
      actions[el.getAttribute('data-action')](el);
      return;
    }
    if (!dd.hidden && !e.target.closest('header')) setDd(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!dd.hidden) { setDd(false); if (ddBtn) ddBtn.focus(); }
    if (!menu.hidden) setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 && !menu.hidden) setMenu(false);
    if (window.innerWidth <= 1024 && !dd.hidden) setDd(false);
  });

  // swipe between testimonials on touch screens
  var quote = $('[data-bind="quote"]');
  var startX = null;
  if (quote) {
    var box = quote.closest('section');
    box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) showReview(current + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  showReview(0);
})();
