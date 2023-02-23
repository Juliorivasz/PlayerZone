// funcion para crear el card pasandole por parametro la informacion
// que quiera tener en el card
const products = document.querySelector('.products');

function card(title, imagen, stock, price, financing) {
    const div = document.createElement('div');
    div.classList.add('container__card');
    div.innerHTML = `
            <div class="container__img__card">
                <img class="img__card" src=${imagen} alt="i5 procesador">
            </div>
            <div class="container__info__card">
                <h1 class="title__card">${title}</h1>
                <div class="container__check__stock">
                    <img src=${stock ? "./img/check-circle-fill.svg" : "./img/x-circle-fill.svg"} alt="check__fill">
                    <span class="stock__products">Producto ${stock ? 'con' : 'sin'} Stock</span>
                </div>
            <span class="price__products">$ ${price} </span>
            <p class="financing">
                Hasta en 12 cuotas de <span class="price__card" >$ ${Math.round(financing/12)}.000</span>
                Sin interés del precio de lista
            </p>
            <button class="btn__products" type="button">
            <img class="logos-nav" src="img/logo carrito en negro.png" alt="carrito">
            <p class="text__btn" >agregar</p>
            </button>
            </div>`;
    products.appendChild(div);
};

card('i7 12600 Procesador', './img/Procesador-Intel-Core-i5-11400.png', false, '300.000', '400.000');
card('i5 11400 Procesador', './img/Procesador-Intel-Core-i5-11400.png', true, '300.000', '400.000');
card('i5 11400 Procesador', './img/Procesador-Intel-Core-i5-11400.png', true, '300.000', '400.000');
card('i5 11400 Procesador', './img/Procesador-Intel-Core-i5-11400.png', true, '300.000', '400.000');
card('i5 11400 Procesador', './img/Procesador-Intel-Core-i5-11400.png', true, '300.000', '400.000');
card('i5 11400 Procesador', './img/Procesador-Intel-Core-i5-11400.png', true, '300.000', '400.000');


export default card;

