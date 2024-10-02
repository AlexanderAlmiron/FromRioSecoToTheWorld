const carousel = document.querySelector('#carousel');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function showNextSlide() {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Cambio automático de imágenes cada 3 segundos
const interval = setInterval(showNextSlide, 3000);
    