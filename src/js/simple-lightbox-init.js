import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const base = import.meta.env.BASE_URL;

  // сначала меняем все href
  document.querySelectorAll('.windows-list-item a').forEach(link => {
    link.href = base + link.getAttribute('href');
  });
  document
    .querySelectorAll('.windows-list-item a, [data-lightbox="better"]')
    .forEach(link => {
      link.href = base + link.getAttribute('href');
    });

  // потом инициализируем lightbox
  new SimpleLightbox('.windows-list-item a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true,
  });
  new SimpleLightbox('[data-lightbox="better"]', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true,
  });
});
