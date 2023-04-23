const shipping = document.querySelector('#shipping');
const creditCard = document.querySelector('#credit__card');
const security = document.querySelector('#security');
const containerProducts = document.querySelector('.container__products__and__more__options');
const containerListProducts = document.querySelector('.container__list__products');
const tds = document.querySelectorAll('td');
const tBody = document.querySelectorAll('tbody');
const tdPay = document.querySelector('#td__pay');

console.log(window.location.pathname === '/pages/carrito.html');

(function StateShopping(){
    if(window.location.pathname === '/pages/carrito.html' && window.innerWidth <= 990){
        creditCard.style = 'display: none';

        security.style = 'display: none';

        containerProducts.style = 'justify-content: center;';

        containerListProducts.style = 'width: 100%;';

        tds.forEach( (td)=> {
            td.style = 'padding: 0;';
        })
        const trFinal = document.createElement('tr');
        const tdFinal = document.createElement('td');
        tdPay.style = 'display: none;';
        tdFinal.innerHTML = tdPay.innerHTML;
        tdFinal.colSpan = '2';
        trFinal.appendChild(tdFinal)
        tBody[tBody.length -1].appendChild(trFinal)

    }
})()