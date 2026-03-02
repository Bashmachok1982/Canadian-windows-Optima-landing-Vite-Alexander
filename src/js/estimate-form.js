document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     ELEMENTS
  ========================= */

  // Все шаги (БЕЗ thank-you)
  const steps = document.querySelectorAll('.estimate-window:not(.thank-you)');

  // Thank You окно
  const thankYou = document.getElementById('thank-you');

  // NEXT кнопки (только переходы между шагами)
  const nextStepButtons = document.querySelectorAll('.next-btn[data-next]');

  // SEND кнопка (в Step 3)
  const sendButton = document.querySelector('#step3 .next-btn');

  // Close button в thank-you
  const closeBtn = document.querySelector('.close-btn');

  let currentStep = 0;

  /* =========================
     INIT
  ========================= */

  // на всякий случай — показываем первый шаг
  steps.forEach(step => step.classList.remove('active'));
  steps[0].classList.add('active');
  thankYou.classList.remove('active');

  /* =========================
     NEXT STEP (Step 1 → Step 2 → Step 3)
  ========================= */

  nextStepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      steps[currentStep].classList.remove('active');
      currentStep++;

      if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
      }
    });
  });

  /* =========================
     SEND (Step 3 → Thank You)
  ========================= */

  if (sendButton) {
    sendButton.addEventListener('click', e => {
      e.preventDefault();

      steps[currentStep].classList.remove('active');
      thankYou.classList.remove('hidden');
      thankYou.classList.add('active');
    });
  }

  /* =========================
     CLOSE THANK YOU → BACK TO STEP 1
  ========================= */

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      thankYou.classList.remove('active');
      thankYou.classList.add('hidden');
      thankYou.classList.remove('active');
      steps.forEach(step => step.classList.remove('active'));
      steps[0].classList.add('active');

      currentStep = 0;
    });
  }
});
