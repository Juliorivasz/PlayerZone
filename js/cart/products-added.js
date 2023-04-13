import { changeAmount, deleteProducts } from "../Firebase/firebase.js";

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

// 
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
                if(amount.value < 1) return amount.value = 1;
                changeAmount(title, amount.value);
                const papeleta = amount.nextSibling;
                papeleta.nextSibling.children[0].innerHTML = `$ ${price * amount.value}.000`;
                priceTotalProducts()
            })
        }
    })
}

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
        listProducts.appendChild(divBanner);
    }
}


export function priceTotalProducts() {
    const total = document.querySelector('.price__total');
    const prices = document.querySelectorAll('.subtotal__products__added');
    let priceTotal = 0;
    for(let price of prices){
        priceTotal = priceTotal + parseInt(price.textContent.split(" ")[1]);
        
    }
    total.innerHTML= `$ ${priceTotal}.000`
}
