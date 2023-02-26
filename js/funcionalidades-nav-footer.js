
const button = document.querySelector('.logos-nav-lupa');
const input = document.querySelector('.container-barra-busqueda');
const div_barra_busqueda = document.querySelector('.div-barra-busqueda');
var imagenLupa = document.getElementById("logo_barra_busqueda");
const inputBusqueda = document.querySelector("#id-barra-busqueda");
        

//despliegue de barra de busqueda:

button.addEventListener('click', () => {
    if(getComputedStyle(input).display === 'flex'){
        input.style.display = 'none' 
        div_barra_busqueda.style = 'position: flex'
        imagenLupa.src = "img/logo lupa.png"; 
        inputBusqueda.value = "";
        

    }
    else{
        input.style.display = 'flex'  
        div_barra_busqueda.style = 'position: absolute; justify-content: center'
        imagenLupa.src = "img/logo x.png";
        
        
    }
});
        

//despliegue del menu:

const button_menu = document.querySelector('.btn-menu-responsive');
const sub_menu = document.querySelector('.sub-menu');
const cerrar_x_menu = document.querySelector('.logo_x');

button_menu.addEventListener('click', () => {
    if(getComputedStyle(sub_menu).display === 'block'){
        sub_menu.style.display = 'none';         

    }
    else{
        sub_menu.style.display = 'block'; 
        casilla_usuario.style.display = 'none';        
    }
});

cerrar_x_menu.addEventListener('click', () => {
    sub_menu.style.display = 'none';
});

//despliegue del menu de usuario y carrito:

const button_usuario = document.querySelector('.logo-user');
const casilla_usuario = document.querySelector('.casilla-usuario');
const cerrar_x_usuario = document.querySelector('.logo_x_usuario')

button_usuario.addEventListener('click', () => {
    if(getComputedStyle(casilla_usuario).display === 'flex'){
        casilla_usuario.style.display = 'none'; 
        
        

    }
    else{
        casilla_usuario.style.display = 'flex'; 
        sub_menu.style.display = 'none';        
    }
});

cerrar_x_usuario.addEventListener('click', () => {
    casilla_usuario.style.display = 'none';
});


 
