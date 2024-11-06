'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//   const slides = [
//     '../images/slider/slider-img-1.jpg',
//     '../images/slider/slider-img-2.jpg'
//   ];

//   let currentSlideIndex = 0;

//   const slider = document.querySelector('.slider');

//   const updateSlide = () => {
//     const currentSlide = slides[currentSlideIndex];
//     slider.style.backgroundImage = `url(${currentSlide})`;
//   };

//   document.querySelector('.slider__button-next').addEventListener('click', (e) => {
//     e.preventDefault();
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//     updateSlide();
//   });

//   document.querySelector('.slider__button-prev').addEventListener('click', (e) => {
//     e.preventDefault();
//     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//     updateSlide();
//   });

//   // Инициализация первого слайда
//   updateSlide();

// });
