import { español } from './translate/español.js';
import { ingles } from './translate/ingles.js'

let currentIndex = 0;
let slides = [];
let totalSlides = 0;


// logica del programa
const root = document.getElementById('root')
const button = document.getElementById('button')

root.innerHTML = español;
inicializarCarrousel();
let bandera = true



button.addEventListener('click', () => {

    bandera = !bandera
    if(bandera){
        root.innerHTML = español
    }else{
        root.innerHTML = ingles
    }
    inicializarCarrousel(); 
})

function inicializarCarrousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        slides.forEach(slide => {
            slide.className = 'carousel-slide'; // Limpia todas las clases de posición
        });

        // Asegurarse de que el número de diapositivas sea suficiente para el efecto
        if (totalSlides < 5) {
            // Manejar un número bajo de imágenes de forma elegante
            // Por ejemplo, solo mostrar la imagen principal si solo hay una
            if (totalSlides > 0) {
                slides[0].classList.add('active');
            }
            return;
        }

        // Asigna las clases a las imágenes en las posiciones deseadas
        slides[currentIndex].classList.add('active');
        
        // La fórmula para manejar índices circulares de forma segura
        const prev1Index = (currentIndex - 1 + totalSlides) % totalSlides;
        const prev2Index = (currentIndex - 2 + totalSlides) % totalSlides;
        const next1Index = (currentIndex + 1) % totalSlides;
        const next2Index = (currentIndex + 2) % totalSlides;

        slides[prev1Index].classList.add('prev1');
        slides[prev2Index].classList.add('prev2');
        slides[next1Index].classList.add('next1');
        slides[next2Index].classList.add('next2');
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    updateCarousel(); // Inicializa el carrusel
    
    // Inicia el movimiento automático solo si hay más de una imagen
    if (totalSlides > 1) {
        setInterval(showNextImage, 5000);
    } 
};



