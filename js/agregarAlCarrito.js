function agregarAlCarrito() {

// Crear el pop-up
var popUp = document.createElement("div");
popUp.id = "pop-up";
popUp.style.position = "fixed";
popUp.style.top = "0";
popUp.style.left = "0";
popUp.style.width = "100%";
popUp.style.height = "100%";
popUp.style.backgroundColor = "rgba(0,0,0,0.5)";
popUp.style.zIndex= "4";
      
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
    <div style="display: flex; flex-direction: column; align-items: center;">
        <p style="margin: 5px 0">Agregado al Carrito con Exito</p>
        <img src="/img/check-circle-fill.svg" alt="close" style="width: 50px; margin: 15px 0;">
`;
popUp.appendChild(contenidoPopUp);
      
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
  buttonClosePopup.addEventListener('mouseover', ()=>{
    buttonClosePopup.style.cursor = "pointer";
  })
  popUp.appendChild(buttonClosePopup);

    // Dentro del contenido del pop-up
    buttonClosePopup.addEventListener('click', ()=>{
      cerrarPopUp();
    })



          
}
