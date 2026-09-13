// Cold Start — shared interactivity
(function () {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

   /* ---------- sticky nav condense ---------- */
   var nav = document.querySelector('header.nav');
    if (nav) {
          var onScroll = function () {
                  if (window.scrollY > 80) nav.classList.add('condensed');
                  else nav.classList.remove('condensed');
          };
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
    }

   /* ---------- mobile menu ---------- */
   var burger = document.querySelector('.navburger');
    var mobilePanel = document.querySelector('.mobile-panel');
    if (burger && mobilePanel) {
          burger.addEventListener('click', function () {
                  var open = document.body.classList.toggle('menu-open');
                  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
          });
          mobilePanel.querySelectorAll('a').forEach(function (a) {
                  a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
          });
    }

   /* ---------- scroll reveal (fade/curtain) ---------- */
   var revealEls = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
          revealEls.forEach(function (el) { el.classList.add('in'); });
    } else {
          var io = new IntersectionObserver(function (entries) {
                  entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                        entry.target.classList.add('in');
                                        io.unobserve(entry.target);
                            }
                  });
          }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
          revealEls.forEach(function (el) { io.observe(el); });
    }

   /* ---------- count-up ---------- */
   var counters = document.querySelectorAll('[data-count-to]');
    function animateCount(el) {
          var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
          if (reduceMotion) { el.textContent = '$' + target; return; }
          var duration = 900;
          var start = null;
          function step(ts) {
                  if (!start) start = ts;
                  var progress = Math.min((ts - start) / duration, 1);
                  var eased = 1 - Math.pow(1 - progress, 3);
                  el.textContent = '$' + Math.round(eased * target);
                  if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
    }
    if (counters.length && 'IntersectionObserver' in window) {
          var cio = new IntersectionObserver(function (entries) {
                  entries.forEach(function (entry) {
                            if (entry.isIntersecting) { animateCount(entry.target); cio.unobserve(entry.target); }
                  });
          }, { threshold: 0.5 });
          counters.forEach(function (el) { cio.observe(el); });
    } else {
          counters.forEach(function (el) { el.textContent = '$' + el.getAttribute('data-count-to'); });
    }

   /* ---------- faq accordion ---------- */
   document.querySelectorAll('.faq-q').forEach(function (btn) {
         btn.addEventListener('click', function () {
                 var item = btn.closest('.faq-item');
                 var wasOpen = item.classList.contains('open');
                 item.parentElement.querySelectorAll('.faq-item.open').forEach(function (el) {
                           if (el !== item) el.classList.remove('open');
                 });
                 item.classList.toggle('open', !wasOpen);
         });
   });

   /* ---------- custom cursor (desktop, fine pointer only) ---------- */
   if (finePointer && !reduceMotion) {
         document.documentElement.classList.add('has-cursor');
         var dot = document.createElement('div');
         dot.className = 'cursor-dot';
         var ring = document.createElement('div');
         ring.className = 'cursor-ring';
         document.body.appendChild(dot);
         document.body.appendChild(ring);
         var mx = -100, my = -100, rx = -100, ry = -100;
         window.addEventListener('mousemove', function (e) {
                 mx = e.clientX; my = e.clientY;
                 dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
         });
         function loop() {
                 rx += (mx - rx) * 0.16;
                 ry += (my - ry) * 0.16;
                 ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
                 requestAnimationFrame(loop);
         }
         requestAnimationFrame(loop);
         document.querySelectorAll('a, button, .faq-q').forEach(function (el) {
                 el.addEventListener('mouseenter', function () { ring.classList.add('big'); });
                 el.addEventListener('mouseleave', function () { ring.classList.remove('big'); });
         });
   }

   /* ---------- magnetic buttons ---------- */
   if (finePointer && !reduceMotion) {
         document.querySelectorAll('.magnetic').forEach(function (btn) {
                 btn.addEventListener('mousemove', function (e) {
                           var r = btn.getBoundingClientRect();
                           var relX = e.clientX - r.left - r.width / 2;
                           var relY = e.clientY - r.top - r.height / 2;
                           btn.style.transform = 'translate(' + (relX * 0.22) + 'px,' + (relY * 0.35) + 'px)';
                 });
                 btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
         });
   }

   /* ---------- side progress rail ---------- */
   var rail = document.querySelector('.rail');
    if (rail) {
          var dots = Array.prototype.slice.call(rail.querySelectorAll('a'));
          var targets = dots.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
          if (targets.length && 'IntersectionObserver' in window) {
                  var railIo = new IntersectionObserver(function (entries) {
                            entries.forEach(function (entry) {
                                        var idx = targets.indexOf(entry.target);
                                        if (idx === -1) return;
                                        if (entry.isIntersecting) {
                                                      dots.forEach(function (d) { d.classList.remove('active'); });
                                                      dots[idx].classList.add('active');
                                        }
                            });
                  }, { rootMargin: '-45% 0px -45% 0px' });
                  targets.forEach(function (t) { railIo.observe(t); });
          }
    }
})();
