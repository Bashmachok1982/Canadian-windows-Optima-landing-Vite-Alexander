import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const base = import.meta.env.BASE_URL;

  document.querySelectorAll('.windows-list-item a').forEach(link => {
    const file = link.getAttribute('href');
    link.href = base + file;
  });

  new SimpleLightbox('.windows-list-item a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true,
  });
});
