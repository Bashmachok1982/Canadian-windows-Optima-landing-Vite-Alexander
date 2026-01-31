document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(
    '.technology-card:not(.technology-card--empty)'
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200); // задержка 200 мс между карточками
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => observer.observe(card));
});
