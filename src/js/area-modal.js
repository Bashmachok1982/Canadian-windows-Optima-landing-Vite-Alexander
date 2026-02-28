document.addEventListener('DOMContentLoaded', () => {
  const geoLink = document.querySelector('.hero-location');
  const geoModal = document.getElementById('geoModal');
  const geoClose = document.querySelector('.geo-close');

  if (geoLink && geoModal) {
    geoLink.addEventListener('click', e => {
      e.preventDefault();
      geoModal.classList.remove('hidden');
    });
  }

  if (geoClose && geoModal) {
    geoClose.addEventListener('click', () => {
      geoModal.classList.add('hidden');
    });
  }

  if (geoModal) {
    geoModal.addEventListener('click', e => {
      if (e.target === geoModal) {
        geoModal.classList.add('hidden');
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !geoModal.classList.contains('hidden')) {
      geoModal.classList.add('hidden');
    }
  });
});
