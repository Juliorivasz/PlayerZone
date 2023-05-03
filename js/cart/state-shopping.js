import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "../Firebase/firebase.js";

const shipping = document.querySelector('#shipping');
const creditCard = document.querySelector('#credit__card');
const security = document.querySelector('#security');
const containerProducts = document.querySelector('.container__products__and__more__options');
const containerListProducts = document.querySelector('.container__list__products');
const tds = document.querySelectorAll('td');
const tBody = document.querySelectorAll('tbody');
const tdPay = document.querySelector('#td__pay');

const buttonPay = (numeroDeBoton, numeroDeInput)=> {
    const input = document.querySelectorAll('input');
    const buttons = document.querySelectorAll('.btn__start__pay');

        buttons[numeroDeBoton].addEventListener('click', (e)=> {
            e.preventDefault();
            onAuthStateChanged(auth, async (user)=>{
                if(user){
                    if(input[numeroDeInput].checked) {
                    alert('ahora elige la forma de pago');
                }else {
                    alert('debes aceptar los terminos y condiciones');
                }}else {
                    alert('Por favor, Iniciar Sesion');
                }
            })
        })
}

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

        buttonPay(1,5);
    };
    if(window.location.pathname === '/pages/carrito.html'){
        buttonPay(0,4);
    }
})()

