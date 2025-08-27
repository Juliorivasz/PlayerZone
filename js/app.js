import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth, readProducts } from "./Firebase/firebase.js";
import { loginCheck } from "./logincheck.js";
import './loggedOut.js';

const big = document.querySelector('.big');
const arrow = document.querySelectorAll('.arrow');
const listArrow = document.querySelectorAll('.no-activo');
const listArrowAqua = document.querySelectorAll('.activo');
const point = document.querySelectorAll('.point');
const countCart = document.querySelector('.counter_cart');

let posicion = 0;
const totalImages = point.length;
const movement = 100 / totalImages;

countCart.textContent = localStorage.getItem('count') ? localStorage.getItem('count') : 0;

// Escuchar el estado de login
onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
});

// Navegación con los puntos
point.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener('click', () => {
        posicion = i;
        const operacion = posicion * -movement;
        big.style.transform = `translateX(${operacion}%)`;

        point.forEach(p => p.classList.remove('active'));
        point[posicion].classList.add('active');
    });
});

// Carrusel automático
let flash = () => {
    if (posicion === totalImages - 1) {
        posicion = 0;
    } else {
        posicion++;
    }

    const operacion = posicion * -movement;
    big.style.transform = `translateX(${operacion}%)`;

    point.forEach(p => p.classList.remove('active'));
    point[posicion].classList.add('active');
};

setInterval(flash, 6000);

// Funcionalidad de las flechas
arrow.forEach((flecha) => {
    flecha.addEventListener('click', () => {
        if (flecha.alt === 'arrow right') {
            desplazarImagenDerecha();
        } else {
            desplazarImagenIzquierda();
        }
    });
});

// Desplazar a la derecha
const desplazarImagenDerecha = () => {
    if (posicion === totalImages - 1) {
        posicion = 0;
    } else {
        posicion++;
    }

    const operacion = posicion * -movement;
    big.style.transform = `translateX(${operacion}%)`;

    point.forEach(p => p.classList.remove('active'));
    point[posicion].classList.add('active');
};

// Desplazar a la izquierda
const desplazarImagenIzquierda = () => {
    if (posicion === 0) {
        posicion = totalImages - 1;
    } else {
        posicion--;
    }

    const operacion = posicion * -movement;
    big.style.transform = `translateX(${operacion}%)`;

    point.forEach(p => p.classList.remove('active'));
    point[posicion].classList.add('active');
};

readProducts();