/* ============================================================
   APEX MOTO — Main JavaScript
   js/main.js
   ============================================================ */

'use strict';

// ── DOM Ready ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initAccordion();
  initStatCounter();
  initSmoothScroll();
  initFormValidation();
});

// ── Navigation ─────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const navLinks = document.querySelectorAll('.nav__link');

  // Scroll state
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 40);

    // Active link highlighting based on section
    navLinks.forEach(link => {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        const section = document.querySelector(target);
        if (section) {
          const rect = section.getBoundingClientRect();
          link.classList.toggle('active', rect.top <= 80 && rect.bottom > 80);
        }
      }
    });

    lastScrollY = scrollY;
  }, { passive: true });

  // Mobile toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on mobile link click
    mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ── Accordion ──────────────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-trigger.open').forEach(t => {
        t.classList.remove('open');
        t.nextElementSibling.classList.remove('open');
      });

      // Open clicked (if was closed)
      if (!isOpen) {
        trigger.classList.add('open');
        content.classList.add('open');
      }
    });
  });
}

// ── Stat Counter Animation ─────────────────────────────────
function initStatCounter() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const decimal = el.dataset.decimal === 'true';
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;
        el.textContent = prefix + (decimal ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ── Smooth Scroll ──────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.querySelector('.nav')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── Form Validation ────────────────────────────────────────
function initFormValidation() {
  const form = document.querySelector('.js-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'rgba(201,66,8,0.6)';
        valid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (valid) {
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Request Sent!';
      btn.style.background = '#4ade80';
      btn.style.borderColor = '#4ade80';
      btn.style.color = '#0f0e0c';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Book Appointment →';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });

  // Clear error on input
  form.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('input', () => {
      input.style.borderColor = '';
    });
  });
}
