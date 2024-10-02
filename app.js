import { español } from './translate/español.js';
import { ingles } from './translate/ingles.js'


// logica del programa
const root = document.getElementById('root')
const button = document.getElementById('button')

root.innerHTML = español
let bandera = true



button.addEventListener('click', () => {
    bandera = !bandera
    if(bandera){
        root.innerHTML = español
    }else{
        root.innerHTML = ingles
    }
})

