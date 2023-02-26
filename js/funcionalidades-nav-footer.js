
const button = document.querySelector('.logos-nav-lupa');
const input = document.querySelector('.container-barra-busqueda');
const div_barra_busqueda = document.querySelector('.div-barra-busqueda');
var imagenLupa = document.getElementById("logo_barra_busqueda");
const inputBusqueda = document.querySelector("#id-barra-busqueda");
        



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
             






 
