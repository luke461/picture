/**
 * lukexcarter — Photography Portfolio
 * Main JavaScript
 */

(function () {
  'use strict';

  // ========================================
  // Intersection Observer — Fade-in on scroll
  // ========================================
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const observeFadeIns = () => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
      fadeObserver.observe(el);
    });
  };

  observeFadeIns();

  // ========================================
  // Navbar — Background on scroll
  // ========================================
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const toggle = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('navbar__links--open');
    });

    navLinks.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('navbar__links--open');
      });
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ========================================
  // Lightbox
  // ========================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const lightboxCaption = lightbox.querySelector('.lightbox__caption');
  const lightboxClose = lightbox.querySelector('.lightbox__close');

  const openLightbox = (src, alt, title) => {
    // Use 1200w version for lightbox
    lightboxImg.src = src.replace('-800w.', '-1200w.').replace('.jpg', '.webp');
    lightboxImg.alt = alt;
    lightboxCaption.textContent = title;
    lightbox.classList.add('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('lightbox--open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  };

  const bindGalleryItems = () => {
    document.querySelectorAll('.gallery__item').forEach((item) => {
      if (item.dataset.lightboxBound) return;
      item.dataset.lightboxBound = 'true';

      const img = item.querySelector('img');
      const title = item.querySelector('.gallery__caption-title');

      const handleOpen = () => {
        openLightbox(img.src, img.alt, title ? title.textContent : '');
      };

      item.addEventListener('click', handleOpen);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  };

  bindGalleryItems();

  // Re-bind when gallery-loader finishes
  window.addEventListener('galleryLoaded', () => {
    observeFadeIns();
    bindGalleryItems();
  });

  // Close lightbox
  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('lightbox--open')) {
      closeLightbox();
    }
  });
})();
