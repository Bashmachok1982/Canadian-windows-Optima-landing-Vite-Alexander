import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const base = import.meta.env.BASE_URL;

  // Обрабатываем ВСЕ ссылки с data-lightbox
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    const href = link.getAttribute('href');

    // если ссылка относительная — добавляем base
    if (href && !href.startsWith('http') && !href.startsWith(base)) {
      link.href = base + href.replace(/^\.?\//, '');
    }
  });

  // Один инстанс для всех галерей
  new SimpleLightbox('[data-lightbox]', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true,
  });
});
