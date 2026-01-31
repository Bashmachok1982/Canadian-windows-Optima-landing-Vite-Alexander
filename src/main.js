import './js/mobile-menu.js';
import './js/technology.js';
import './js/forma.js';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
  offset: 120,
  easing: 'ease-out-cubic',
  anchorPlacement: 'top-bottom',
});

console.log('AOS инициализирован — анимации по скроллу готовы');
