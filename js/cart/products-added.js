import './state-shopping.js';
import { changeAmount, deleteProducts } from "../Firebase/firebase.js";


// crea el producto en la lista del carrito desde la base de datos
export function productAdded(img, title, price, amount, id,docId) {
    var subTotal = price.split(" ")[1] * amount;
    const li = document.createElement('li');
    li.classList = 'products__added';
    li.innerHTML = `
    <img src=${img} alt=${title} class="img__products__added">
    <p class="name__products__added">	
    ${title}</p>
    <span class="price__products__added" >${price}</span>
    <input type="number" class="input__products__added" data-id-add-product=${id} min="1">
    <div class="container__subtotal__delete__products__added">
    <p class="subtotal__products__added">$ ${subTotal}.000</p>
    <img src="../../pages/img/papelera.svg" alt="papelera" class="img__delete__products__added" data-id-delete-produt=${id}>
    </div>
    `
    if(window.location.pathname === '/pages/carrito.html'){
        document.querySelector('.list__products').appendChild(li);
        priceTotalProducts();
    }
    amountProducts(amount, id);
    changeValueInput(id,price.split(" ")[1],title)
    papeleraRed(id, docId)
}

// realiza el estilo de la papelera y la eliminacion del producto de la base de datos
export function papeleraRed(id, docId) {
    const papeleras = document.querySelectorAll('.img__delete__products__added');

    papeleras.forEach((papelera)=> {
        papelera.addEventListener('mouseover', (e)=> {
            papelera.src = '../../pages/img/papelera-red.svg';
            papelera.style.cursor = 'pointer';
        })
    
        papelera.addEventListener('mouseleave', ()=> {
            papelera.src = '../../pages/img/papelera.svg';
        })

        papelera.addEventListener('click', ()=> {
            const idPapelera = papelera.getAttribute('data-id-delete-produt');
            if(id === idPapelera){
                deleteProducts(docId);
                setTimeout(()=> {
                    location.reload();
                }, 1500)
            }
        })
    })
}

// coloca la cantidad inicial al agregar el producto al carrito desde el home
export function amountProducts(amountProduct, idAmount) {
    const amounts = document.querySelectorAll('.input__products__added');
    amounts.forEach((amount)=> {
        const idProduct = amount.getAttribute('data-id-add-product');
        if(idProduct === idAmount) {
            amount.value = amountProduct;
        }
    })
}

// al cambiar el valor de la cantidad de productos, hace la modificacion del subtotal
export function changeValueInput(idAmount, price, title) {
    const amounts = document.querySelectorAll('.input__products__added');
    amounts.forEach((amount)=> {
        const idProduct = amount.getAttribute('data-id-add-product');
        if(idProduct === idAmount) {
            amount.addEventListener('change', ()=> {
                if(amount.value < 1) return amount.value = 1;
                changeAmount(title, amount.value);
                const papeleta = amount.nextSibling;
                papeleta.nextSibling.children[0].innerHTML = `$ ${price * amount.value}.000`;
                priceTotalProducts()
            })
        }
    })
}

// realiza el aviso de que no se ah agregado ningun producto al carrito
export function emptyList(numero) {
    if(numero === 0) {
        const divBanner = document.createElement('div');
        divBanner.innerHTML = `
            <h3 style="background: gray;
            color: white;
            text-align: center;
            padding: 3rem;
            margin: 1rem 0;">No se encuentran productos agregados</h3>
        `;
        const listProducts = document.querySelector('.list__products');
        if(location.pathname === '/pages/carrito.html'){
            listProducts.appendChild(divBanner);
    }
    }
}

// realiza el total de los productos agregados al carro
export function priceTotalProducts() {
    const total = document.querySelector('.price__total');
    const subtotalFinal = document.querySelector('#only__subtotal');
    const prices = document.querySelectorAll('.subtotal__products__added');
    const totalPay = document.querySelector('#total__pay');
    const radio = document.querySelector('[data-id-delivery]');
    let priceTotal = 0;
    for(let price of prices){
        priceTotal = priceTotal + parseInt(price.textContent.split(" ")[1]);
        
    }
    total.innerHTML= `$ ${priceTotal}.000`;
    subtotalFinal.innerHTML = `$${priceTotal}.000`;
    if(radio.checked){
        totalPay.innerHTML = `$${priceTotal + 1}.300`;
    }else {
        totalPay.innerHTML = `$${priceTotal}.000`;
    }
}

// selecciona el metodo de envio del producto modifica el total
export function deliveryMethod() {
    const inputRadio = document.querySelectorAll('.inputSend');
    const priceInputRadio = document.querySelector('#PriceSendAllPais');
    const priceDelivery = document.querySelector('#price__delivery');
    const subtotalFinal = document.querySelector('#only__subtotal'); 
    const totalPay = document.querySelector('#total__pay');
    inputRadio.forEach( (radio)=> {
        const sendAllPais = radio.getAttribute('data-id-delivery');
        radio.addEventListener('change', ()=> {
            if(radio.checked && sendAllPais) {
                priceDelivery.textContent = priceInputRadio.textContent;
                if(subtotalFinal.textContent !== '$0'){
                totalPay.innerHTML = `$${parseInt(subtotalFinal.textContent.slice(1)) + parseInt(priceDelivery.textContent.slice(1,2))}.300`};
            }else {
                priceDelivery.textContent = `$0`;
                totalPay.innerHTML = subtotalFinal.textContent;
            }
        })
        
    })
}

deliveryMethod();


