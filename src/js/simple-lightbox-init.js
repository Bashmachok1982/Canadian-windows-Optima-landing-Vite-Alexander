import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
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
