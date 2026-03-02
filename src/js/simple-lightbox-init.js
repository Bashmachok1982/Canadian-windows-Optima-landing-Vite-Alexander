import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Определяем базовый путь к папке с большими картинками для lightbox
const LIGHTBOX_BASE = new URL('/img/lightbox/windows/', import.meta.url).href;

document.addEventListener('DOMContentLoaded', () => {
  // Находим все нужные ссылки
  const links = document.querySelectorAll('.windows-list-item a');

  // Для каждой ссылки заменяем href на полный правильный URL
  links.forEach(link => {
    const filename = link.getAttribute('href').split('/').pop(); // берём только имя файла, например windows-1-2x.webp
    link.href = LIGHTBOX_BASE + filename;
  });

  // Теперь инициализируем lightbox как обычно
  new SimpleLightbox('.windows-list-item a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionClass: 'sl-custom-caption',
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true,
    preloading: true,
    docClose: true,
    swipeClose: true,
  });
});
