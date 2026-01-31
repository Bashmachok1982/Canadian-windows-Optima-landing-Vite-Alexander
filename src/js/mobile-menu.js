(() => {
  const burgerButton = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  const closeButton = document.querySelector('.mobile-close');
  const navLinks = document.querySelectorAll('.mobile-nav a');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  burgerButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();
