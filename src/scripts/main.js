'use strict';

document.addEventListener('input', function (event) {
  if (event.target.classList.contains('input__textarea')) {
    event.target.style.height = '26px'; // Сбросим высоту
    event.target.style.height = `${event.target.scrollHeight}px`; // Установим новую высоту
  }
});

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');


switcher.addEventListener('click', () => {
  page.classList.toggle('theme--color');
});
