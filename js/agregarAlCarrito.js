import { registerProducts, readProducts} from "./Firebase/firebase.js";
import { pantallaDeCarga } from "./cart/products-added.js";
// se inicializa la variable que contiene el valor del local-storage
// para hacer un contador de los productos agregados al carrito

export function agregarAlCarrito(idCard) {

  // Crear el pop-up
  var popUp = document.createElement("div");
  popUp.id = "pop-up";
  popUp.style.position = "fixed";
  popUp.style.top = "0";
  popUp.style.left = "0";
  popUp.style.width = "100%";
  popUp.style.height = "100%";
  popUp.style.backgroundColor = "rgba(0,0,0,0.5)";
  popUp.style.zIndex = "4";

  // Agregar contenido al pop-up
  var contenidoPopUp = document.createElement("div");
  contenidoPopUp.id = "contenido-pop-up";
  contenidoPopUp.style.color = "#fff"
  contenidoPopUp.style.position = "fixed";
  contenidoPopUp.style.top = "50%";
  contenidoPopUp.style.left = "50%";
  contenidoPopUp.style.transform = "translate(-50%,-50%)";
  contenidoPopUp.style.backgroundColor = "rgb(15, 0, 68";
  contenidoPopUp.style.padding = "20px";
  contenidoPopUp.style.borderRadius = "10px";
  contenidoPopUp.innerHTML = ` 
    <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <p style="margin: 5px 0">Agregado al Carrito con Exito</p>
        <img src="/img/check-circle-fill.svg" alt="close" style="width: 50px; margin: 15px 0;">
        <div style="display: flex; align-items: center; text-align: center; flex-direction: column;">
        <button id="continuar">Continuar</button>
        <button id="verPedido">Ver Pedido</button>
        </div>
`;
  popUp.appendChild(contenidoPopUp);

  // botones que aparecen en el popup al agregar un producto al carrito
  const continuar = contenidoPopUp.querySelector('div').querySelector('div').querySelector('#continuar');
  const verPedido = contenidoPopUp.querySelector('div').querySelector('div').querySelector('#verPedido');
   
  
  continuar.style = `
      color: white;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1.1rem;
      margin: 0.5rem 1rem;
      padding: 0.7rem;
      border-radius: 10px;
      background: linear-gradient(to right, rgb(54, 209, 220) 0%, rgb(91, 134, 229) 51%, rgb(54, 209, 220) 100%);
      background-size: 200% auto;
      border: none;
      transition: .5s;
`;
verPedido.style = `
      color: white;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1.1rem;
      padding: 0.7rem;
      border-radius: 10px;
      background: linear-gradient(to right, rgb(54, 209, 220) 0%, rgb(91, 134, 229) 51%, rgb(54, 209, 220) 100%);
      background-size: 200% auto;
      border: none;
      transition: .5s;
`;

continuar.addEventListener('mouseover', () => {
  continuar.style.backgroundPosition = '100%';
  continuar.style.cursor = 'pointer';

})

continuar.addEventListener('mouseleave', () => {
  continuar.style.backgroundPosition = '200%';
})

continuar.addEventListener('click', ()=> {
    cerrarPopUp();
    pantallaDeCarga();
    setTimeout(()=> {
      location.reload();
    }, 1000)
})

verPedido.addEventListener('mouseover', () => {
  verPedido.style.backgroundPosition = '100%';
  verPedido.style.cursor = 'pointer';

})

verPedido.addEventListener('mouseleave', () => {
  verPedido.style.backgroundPosition = '200%';
})

verPedido.addEventListener('click', ()=> {
    cerrarPopUp();
    pantallaDeCarga();
    setTimeout(()=> {
      location.href= './pages/carrito';
    }, 1000)
})

  console.log();

  // Agregar el pop-up a la página
  document.body.appendChild(popUp);

  function cerrarPopUp() {
    var popUpClose = document.getElementById("pop-up");
    document.body.removeChild(popUpClose);
  }

  //  button para cerrar el pop-up 
  var buttonClosePopup = document.createElement('button');
  buttonClosePopup.innerHTML = `<img src="/img/logo x.png" alt="close" title="close-popUp" style="width: 100%">`;
  buttonClosePopup.id = "pop-up-close";
  buttonClosePopup.style.color = "#fff";
  buttonClosePopup.style.backgroundColor = "rgb(15, 0, 68";
  buttonClosePopup.style.position = "fixed";
  buttonClosePopup.style.top = "100px";
  buttonClosePopup.style.right = "50px";
  buttonClosePopup.style.width = "50px";
  buttonClosePopup.style.border = "2px solid rgb(35, 46, 98)";
  buttonClosePopup.style.borderRadius = "10px";
  buttonClosePopup.addEventListener('mouseover', () => {
    buttonClosePopup.style.cursor = "pointer";
  })
  popUp.appendChild(buttonClosePopup);

  // Dentro del contenido del pop-up
  buttonClosePopup.addEventListener('click', () => {
    cerrarPopUp();
    pantallaDeCarga();
    setTimeout(()=> {
      location.reload();
    }, 1000)
  })

  // contador de productos agregados al carrito
  // const countCart = document.querySelector('.counter_cart');
  // localStorage.setItem('count', count);
  // countCart.innerHTML = count++;

  let titles = document.querySelectorAll('.title__card');
  let imgs = document.querySelectorAll('.img__card');
  let prices = document.querySelectorAll('.price__products');


  registerProducts(idCard,titles[idCard].textContent, imgs[idCard].src, prices[idCard].textContent, 1);
}
