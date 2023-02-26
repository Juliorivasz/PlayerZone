
const button = document.querySelector('.logos-nav-lupa');
const input = document.querySelector('.container-barra-busqueda');
const div_barra_busqueda = document.querySelector('.div-barra-busqueda');



button.addEventListener('click', () => {
    if(getComputedStyle(input).display === 'flex'){
        input.style.display = 'none' 
        div_barra_busqueda.style = 'position: flex'  
              
    }
    else{
        input.style.display = 'flex'  
        div_barra_busqueda.style = 'position: absolute; justify-content: center'
    }
});
             






 
