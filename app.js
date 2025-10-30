import { español } from './translate/español.js';
import { ingles } from './translate/ingles.js'


// logica del programa
const root = document.getElementById('root')
const button = document.getElementById('button')

root.innerHTML = español;
let bandera = true



button.addEventListener('click', () => {

    bandera = !bandera
    if(bandera){
        root.innerHTML = español
    }else{
        root.innerHTML = ingles
    }
});

// Ocultar botón flotante al llegar al footer
document.addEventListener('DOMContentLoaded', () => {
    const btnInstagram = document.querySelector('.btn-instagram');
    const footer = document.querySelector('#footer');

    function toggleButtonVisibility() {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

    if (footerRect.top < windowHeight) {
        btnInstagram.style.opacity = '0';
        btnInstagram.style.pointerEvents = 'none';
    } else {
        btnInstagram.style.opacity = '1';
        btnInstagram.style.pointerEvents = 'auto';
    }
    }

    window.addEventListener('scroll', toggleButtonVisibility);

});


