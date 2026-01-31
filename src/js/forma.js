document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#footerForm');
  const phoneScreen = document.querySelector('.phone-screen');
  const successScreen = document.querySelector('.phone-success');

  const modal = document.querySelector('#successModal');
  const modalClose = modal?.querySelector('.modal-close');

  if (!form || !phoneScreen || !successScreen || !modal) {
    console.error('Required elements not found');
    return;
  }

  const originalContent = phoneScreen.innerHTML;

  const openModal = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    // очищаем форму
    form.reset();

    // меняем экран телефона
    phoneScreen.innerHTML = successScreen.innerHTML;

    // открываем модалку
    openModal();

    // возвращаем экран телефона назад
    setTimeout(() => {
      phoneScreen.innerHTML = originalContent;
    }, 5000);
  });
});
