import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('betterWindow');
  const arrowBtn = document.querySelector('.arrow-btn');

  if (!wrapper || !arrowBtn) return;

  const lightbox = new SimpleLightbox('[data-lightbox="better"]', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    nav: true,
    close: true,
    showCounter: true,
    animationSpeed: 300,
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    docClose: true,
    swipeClose: true,
    preloading: true,
  });

  arrowBtn.addEventListener('click', () => {
    arrowBtn.disabled = true;
    wrapper.classList.add('show-new');

    setTimeout(() => {
      lightbox.open(0);
    }, 600);
  });

  // ✅ ВОТ ЗДЕСЬ
  lightbox.on('closed.simplelightbox', () => {
    wrapper.classList.remove('show-new');
    arrowBtn.disabled = false;
  });
});
