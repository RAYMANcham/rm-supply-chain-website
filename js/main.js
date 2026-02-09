// RM Supply Chain Management - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      menuButton.setAttribute('aria-expanded', isOpen);

      // Toggle hamburger / X icon
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', isOpen);
        iconClose.classList.toggle('hidden', !isOpen);
      }
    });
  }

  // Nav shadow on scroll
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    });
  }

  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      // Desktop: add underline style
      link.classList.add('text-white', 'font-medium');
      link.classList.remove('text-gray-300');
      if (!link.classList.contains('block')) {
        // Desktop link - add border
        link.classList.add('border-b-2', 'border-white', 'pb-0.5');
      }
    } else {
      // Remove active state from non-current links
      link.classList.remove('border-b-2', 'border-white', 'pb-0.5');
      if (!link.classList.contains('block')) {
        link.classList.remove('font-medium');
      }
    }
  });
});
