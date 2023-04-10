import { changeAmount, verifyProducts } from "../Firebase/firebase.js";

export function productAdded(img, title, price, amount, id) {
    var subTotal = price.split(" ")[1] * amount;
    const li = document.createElement('li');
    li.classList = 'products__added';
    li.innerHTML = `
    <img src=${img} alt=${title} class="img__products__added">
    <p class="name__products__added">	
    ${title}</p>
    <span class="price__products__added" >${price}</span>
    <input type="number" class="input__products__added" data-id-add-product=${id}>
    <div class="container__subtotal__delete__products__added">
    <p class="subtotal__products__added">$ ${subTotal}.000</p>
    <img src="../../pages/img/papelera.svg" alt="papelera" class="img__delete__products__added">
    </div>
    `
    if(window.location.pathname === '/pages/carrito.html'){
        document.querySelector('.list__products').appendChild(li);
    }
    amountProducts(amount, id);
    changeValueInput(id,price.split(" ")[1],title)
    papeleraRed()
}


export function papeleraRed() {
    const papeleras = document.querySelectorAll('.img__delete__products__added');

    papeleras.forEach((papelera)=> {
        papelera.addEventListener('mouseover', (e)=> {
            papelera.src = '../../pages/img/papelera-red.svg';
            papelera.style.cursor = 'pointer';
        })
    
        papelera.addEventListener('mouseleave', ()=> {
            papelera.src = '../../pages/img/papelera.svg';
        })
    })
}

export function amountProducts(amountProduct, idAmount) {
    const amounts = document.querySelectorAll('.input__products__added');
    amounts.forEach((amount)=> {
        const idProduct = amount.getAttribute('data-id-add-product');
        if(idProduct === idAmount) {
            amount.value = amountProduct;
        }
    })
}

export function changeValueInput(idAmount, price, title) {
    const amounts = document.querySelectorAll('.input__products__added');
    amounts.forEach((amount)=> {
        const idProduct = amount.getAttribute('data-id-add-product');
        if(idProduct === idAmount) {
            amount.addEventListener('change', ()=> {
                changeAmount(title, amount.value);
                const papeleta = amount.nextSibling;
                papeleta.nextSibling.children[0].innerHTML = `$ ${price * amount.value}.000`;
            })
        }
    })
}