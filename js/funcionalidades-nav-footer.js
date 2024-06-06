
const button = document.querySelector('.logos-nav-lupa');
const input = document.querySelector('.container-barra-busqueda');
const div_barra_busqueda = document.querySelector('.div-barra-busqueda');
var imagenLupa = document.getElementById("logo_barra_busqueda");
const inputBusqueda = document.querySelector("#id-barra-busqueda");
        

//tocar logo e ir a pagina principa:

const logo_ir_inicio = document.querySelector('.div-logo');
logo_ir_inicio.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});


//despliegue de barra de busqueda:

button.addEventListener('click', () => {
    if(location.pathname !== '/pages/componentes'){
        location.href = './pages/componentes';
    }
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
        if(window.innerWidth > 990) {
            return; // Si el ancho es mayor a 990px no hace nada
        }
        else {
            casilla_usuario.style.display = 'none';
            sub_menu.style.display = 'none';
        };
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
        input.style.display = 'none' 
        div_barra_busqueda.style = 'position: flex'
        imagenLupa.src = "img/logo lupa.png"; 
        inputBusqueda.value = "";
        

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

    if(window.innerWidth > 990) {
    return; // Si el ancho es mayor a 990px no hace nada
    }

    else if(getComputedStyle(casilla_usuario).display === 'flex'){
        casilla_usuario.style.display = 'none'; 
        
        

    }
    else{
        casilla_usuario.style.display = 'flex'; 
        sub_menu.style.display = 'none';
        input.style.display = 'none' 
        div_barra_busqueda.style = 'position: flex'
        imagenLupa.src = "img/logo lupa.png"; 
        inputBusqueda.value = "";        
    }
});

cerrar_x_usuario.addEventListener('click', () => {
    casilla_usuario.style.display = 'none';
});


//  foncionalidades del footer


// ir al inicio de la pagina
const ir_a_inicio = document.querySelector('.li_inicio');
ir_a_inicio.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'}
  );
});
