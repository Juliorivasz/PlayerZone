import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "./Firebase/firebase.js";
import { loginCheck } from "./logincheck.js";
import './loggedOut.js';

const big = document.querySelector('.big')
const arrow = document.querySelectorAll('.arrow')
const listArrow = document.querySelectorAll('.no-activo')
const listArrowAqua = document.querySelectorAll('.activo')
const point = document.querySelectorAll('.point')
const countCart = document.querySelector('.counter_cart');

countCart.textContent = localStorage.getItem('count') ? localStorage.getItem('count') : 0;


// escuchar el estado de login
onAuthStateChanged(auth, async (user)=>{
    // hace la modificacion estilizada para el login
    loginCheck(user);
})


// cuando hago click en un punto
    // Saber la posicion de ese punto
    // Aplicar un transform traslateX al big
    // Quitar la clase active de TODOS los puntos 
    // Añadir la clase active al punto que hemos hecho CLICK 

    // recorre el array de point
point.forEach( (cadaPunto, i) => {
    // al hacer click en un punto 
    // cambia de imagen
    point[i].addEventListener('click', ()=>{
        let posicion = i;
        let operacion = posicion * -50;

        big.style.transform = `translateX(${ operacion }%)`;

        point.forEach((cadaPunto, i)=> {
            point[i].classList.remove('active');
        })

        point[i].classList.add('active');
    });
    // count es el contador y validador de la funcionalidad de cambiar
    // la imagen en un intervalo de tiempo
    let count = 0;
    let flash = ()=>{
        // cambia a la primera imagen
        if(count) {
            count = 0;
            let posicion = count;
            let operacion = posicion * -50;

            // se le aplica un estilo a la etiqueta con la clase big 
            big.style.transform = `translateX(${ operacion }%)`;

            // se cambia las clases que muestra el punto seleccionado
            point[1].classList.remove('active');
            point[count].classList.add('active');
        }else{
            // cambia a la segunda imagen
            count = 1;
            let posicion = count;
            let operacion = posicion * -50;

            big.style.transform = `translateX(${ operacion }%)`;

            point[0].classList.remove('active');
            point[count].classList.add('active');
        }
    };
    setInterval(flash,6000);
})
let posicion = 0;
arrow.forEach((Flecha, i)=> {
    Flecha.addEventListener('click', ()=> {
        if(arrow[i].alt === 'arrow right'){
            // cambiar la opacidad de la flecha a color aqua
            listArrowAqua[1].style.opacity = 1;
            listArrow[1].className = 'activo right';
            listArrowAqua[1].className = 'no-activo right';
            // use la funcion para desplazar la imagen
            desplazarImagen();          
            setTimeout(()=>{
                listArrow[1].className = 'no-activo right';
                listArrowAqua[1].className = 'activo right';
            },200)
        }else {
            // cambiar la opacidad de la flecha a color aqua
            listArrowAqua[0].style.opacity = 1;
            listArrow[0].className = 'activo right';
            listArrowAqua[0].className = 'no-activo right';
            desplazarImagen();
            setTimeout(()=>{
                listArrow[0].className = 'no-activo right';
                listArrowAqua[0].className = 'activo right';
            },200)
        }
        
    })
})

// funcion para desplazar la imagen al hacer click en las flechas
const desplazarImagen = ()=>{
    if(posicion){
        posicion = 0;
        var operacion = posicion * -50;
        big.style.transform = `translateX(${ operacion }%)`;
        point[1].classList.remove('active');
        point[0].classList.add('active');
    }else {
        posicion = 1;
        operacion = posicion * -50;
        big.style.transform = `translateX(${ operacion }%)`;
        point[0].classList.remove('active');
        point[1].classList.add('active');             
    }
}

