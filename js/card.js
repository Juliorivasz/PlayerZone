// funcion para crear el card pasandole por parametro la informacion
// que quiera tener en el card
const products = document.querySelector('.products');

function card(section,title, imagen, stock, price, financing) {
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
                <span class="price__products__old" >$ ${price*1.2}.000</span>
                <span class="price__products">$ ${price} </span>
                <p class="financing">
                    Hasta en 12 cuotas de <span class="price__card" >$ ${Math.round(financing/12)}.000</span>
                    Sin interés del precio de lista
                </p>
                <button class="btn__products" type="button">
                <img class="logos-nav" src="img/logo carrito.png" alt="carrito">
                <p class="text__btn" >agregar</p>
                </button>
            </div>`;
    section.appendChild(div);
};

card(products,'i5 12600 Procesador', './img/Procesador-Intel-Core-i5-11400.png', false, '150.000', '280.000');
card(products,'Monitor Predator 27" curvo', './img/monitor-predator-z.png', true, '320.000', '400.000');
card(products,'Motherboard Asus Rog Strix b450 F', './img/mother-asus-rog.png', true, '60.000', '90.000');
card(products,'Placa de Video RTX 2060 6gb Gddr6', './img/placa-de-video-rtx2060.png', true, '180.000', '320.000');


export default card;

