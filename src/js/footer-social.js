// footer-social.js
// На мобилке hover не работает — заменяем на клик
// На десктопе JS ничего не делает, там работает CSS :hover

document.addEventListener('DOMContentLoaded', () => {
  const slots = document.querySelectorAll('.social-slot');
  if (!slots.length) return;

  slots.forEach(slot => {
    slot.addEventListener('click', e => {
      e.stopPropagation();

      const isOpen = slot.classList.contains('is-open');
      slots.forEach(s => s.classList.remove('is-open'));
      if (!isOpen) slot.classList.add('is-open');
    });
  });

  document.addEventListener('click', () => {
    slots.forEach(s => s.classList.remove('is-open'));
  });
});
