// funcion para crear el card pasandole por parametro la informacion
// que quiera tener en el card
import { agregarAlCarrito } from "./agregarAlCarrito.js";
import { alertAuth } from "./alertAuth.js";
const products = document.querySelector('.products');

export function card(section, id, title, imagen, stock, price, financing) { 
    // if (!section) {
    //     console.error("El elemento section es nulo o indefinido");
    //     return;
    // }
    const div = document.createElement('div');
    div.classList.add('container__card');
    div.innerHTML = `
            <div class="container__img__card">
                <img class="img__card" src=${imagen}>
            </div>
            <div class="container__info__card">
                <h1 class="title__card">${title}</h1>
                <div class="container__check__stock">
                    <img src=${stock ? "/img/check-circle-fill.svg" : "/img/x-circle-fill.svg"} alt="check__fill">
                    <span class="stock__products">Producto ${stock ? 'con' : 'sin'} Stock</span>
                </div>
                <span class="price__products__old" >$ ${Math.round(price*1.2)}.000</span>
                <span class="price__products">$ ${price} </span>
                <p class="financing">
                    Hasta en 12 cuotas de <span class="price__card" >$ ${Math.round(financing/12)}.000</span>
                    Sin interés del precio de lista
                </p>
                <button class="btn__products" type="button" data-id="${id}">
                <img class="logos-nav" src="img/logo carrito.png" alt="carrito">
                <p class="text__btn" >agregar</p>
                </button>
            </div>`;

    section.appendChild(div);

    const btnsAgregarAlCarrito = document.querySelectorAll('.btn__products');
    btnsAgregarAlCarrito.forEach((btnAgregarAlCarrito)=> {
        const idCard = btnAgregarAlCarrito.getAttribute('data-id');
        if(idCard === '1' || idCard === '2') {
            btnAgregarAlCarrito.onclick = () => alertAuth('No Hay Stock', 'no')
        }else{
            btnAgregarAlCarrito.onclick = () => agregarAlCarrito(idCard);
        }
    })
    return div;
};

if(window.location.pathname === '/index.html' || window.location.pathname === '/' ){
    card(products, '0', 'Monitor Predator 27 curvo', './img/monitor-predator-z.png', true, '150.000', '200.000');
    card(products, '1', 'i5 12600 Procesador', '/img/Procesador-Intel-Core-i5-11400.png', false, '120.000', '180.000');
    card(products, '2', 'Motherboard Asus Rog Strix b450 F', './img/mother-asus-rog.png', false, '60.000', '90.000');
    card(products, '3', 'Placa de Video RTX 2060 6gb Gddr6', './img/placa-de-video-rtx2060.png', true, '160.000', '210.000');
}

