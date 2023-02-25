
 const button = document.querySelector('.logos-nav-lupa');
 const input = document.querySelector('.container-barra-busqueda');




button.addEventListener('click', () => {
    if(getComputedStyle(input).display === 'flex'){
        input.style.display = 'none'
    }
    else{
        input.style.display = 'flex'
    }
});
             






 
