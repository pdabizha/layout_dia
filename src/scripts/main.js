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


const burgerButtons = document.querySelectorAll('.burger-menu_button');
const burgerMenu = document.querySelector('.burger-menu__content');

burgerButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    console.log('1');
    event.preventDefault();
    burgerMenu.classList.toggle('burger-menu__content_active');
  });
});
