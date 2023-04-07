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

export function amountProducts() {
    const amounts = document.querySelectorAll('.input__products__added');
    amounts.forEach((amount)=> {
        amount.value = 1;
    })
}


export function productAdded(id, idPrice, idInput, idSubtotal) {
    const li = document.createElement('li');
    li.classList = 'products__added';
    li.id = id;
    li.innerHTML = `
    <img src="../img/monitor-predator-z.png" alt="monitor-predator-z" class="img__products__added">
    <p class="name__products__added">	
    PC GAMER D INTEL CORE I3 10105 | 16GB RAM | SSD 240GB | RTX 3060 TI | 650W BRONZE</p>
    <span class="price__products__added" id=${idPrice}>180.000</span>
    <input type="number" class="input__products__added"  id=${idInput}>
    <div class="container__subtotal__delete__products__added">
    <p class="subtotal__products__added" id=${idSubtotal}>$ 180.000</p>
    <img src="./img/papelera.svg" alt="papelera" class="img__delete__products__added">
    </div>
    `
    document.querySelector('.list__products').appendChild(li); 
}

export function subtotal() {
    const amounts = document.querySelectorAll('.input__products__added');
    const prices = document.querySelectorAll('.price__products__added');
    const subtotalProductsAdded = document.querySelectorAll('.subtotal__products__added');
    

    amounts.forEach((amount)=> {
        amount.addEventListener('change', (e)=> {
            const subtotalAdded = prices[0].textContent * amounts[0].value;
            subtotalProductsAdded[0].textContent = `$ ${subtotalAdded}.000`;
        })
    })
}


amountProducts()
productAdded('a', 'idprice1', 'idinput1', 'idsubtotal1');
productAdded('b', 'idprice2', 'idinput2', 'idsubtotal2');

subtotal()
papeleraRed()

