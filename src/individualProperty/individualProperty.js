// JavaScript for carousel functionality
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

prevButton.addEventListener('click', () => {
    slides.scrollBy({
        left: -slides.offsetWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    slides.scrollBy({
        left: slides.offsetWidth,
        behavior: 'smooth'
    });
});