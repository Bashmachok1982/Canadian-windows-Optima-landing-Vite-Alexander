import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new SimpleLightbox('.windows-list-item a', {
    // ← измени селектор на .windows-list-item a
    captions: true,
    captionsData: 'alt',
    //captionSelector: 'p.windows-text', // ← берём текст именно из <p class="windows-text">
    captionPosition: 'bottom',
    captionClass: 'sl-custom-caption', // если хочешь ещё кастомизировать
    fadeSpeed: 300,
    overlayOpacity: 0.9,
    showCounter: true, // ← стрелочки и счётчик теперь будут
    preloading: true,
    docClose: true, // закрытие по клику вне картинки
    swipeClose: true, // свайп для закрытия на мобильке
  });
});
