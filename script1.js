/* =============================================================================
   FUATECH Website JavaScript
   Federal University of Agriculture & Technology, Obio Akpa
   
   Table of Contents:
   1. Intersection Observer for Fade-in Animations
   2. Mobile Navigation Toggle
   ============================================================================ */

/* =============================================================================
   1. Intersection Observer for Fade-in Animations
   ============================================================================ */
document.addEventListener('DOMContentLoaded', function() {
  // Create IntersectionObserver to detect when elements enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add 'visible' class when element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    threshold: 0.1  // Trigger when 10% of element is visible
  });

  // Observe all elements with 'fade-in' class
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});

/* =============================================================================
   2. Mobile Navigation Toggle
   ============================================================================ */
document.addEventListener('DOMContentLoaded', function() {
  // Get menu toggle button and mobile navigation elements
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  // Add click event listener to toggle mobile menu
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }
});