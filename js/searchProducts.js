const formularioSearch = document.querySelector('.container-barra-busqueda');
const inputSearch = document.querySelector('#id-barra-busqueda');
const listComponents = document.querySelector('#list__components');
// input de la barra de busqueda
const inputBusqueda = document.querySelector("#id-barra-busqueda");


// al enviar el buscador realiza la busqueda en componentes
formularioSearch.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(location.pathname === '/pages/componentes.html'){
        searchs(listComponents);
    }
})

// realiza el filtro de busqueda
const searchs = (listComponents) => {
    let filter = inputSearch.value.toUpperCase();
    let li = listComponents.querySelectorAll('.title__card');
    let card = listComponents.querySelectorAll('.container__card');

        for (let i = 0; i < li.length; i++) {
            let name = li[i].textContent.toUpperCase();
            if (name.indexOf(filter) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }
}

// al escribir en el input se realiza la busqueda
inputBusqueda.addEventListener('input', ()=> {
    if(location.pathname === '/pages/componentes.html'){
        searchs(listComponents);
    }
})