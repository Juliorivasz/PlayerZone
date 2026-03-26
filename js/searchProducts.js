const formularioSearch = document.querySelector('.container-barra-busqueda');
const inputSearch = document.querySelector('#id-barra-busqueda');
const listComponents = document.querySelector('#list__components');
// input de la barra de busqueda
const inputBusqueda = document.querySelector("#id-barra-busqueda");


// al enviar el buscador realiza la busqueda en componentes
formularioSearch.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(location.pathname.includes('/pages/componentes')){
        searchs(listComponents);
    } else {
        location.href = `/pages/componentes.html?q=${inputSearch.value}`;
    }
})

// realiza el filtro de busqueda
const searchs = (listComponents) => {
    let filter = inputSearch.value.toUpperCase();
    let li = listComponents.querySelectorAll('.title__card');
    let card = listComponents.querySelectorAll('.container__card');

    if (!li || li.length === 0) return;

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
    if(location.pathname.includes('/pages/componentes')){
        searchs(listComponents);
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if(q) {
        inputBusqueda.value = q;
        if(location.pathname.includes('/pages/componentes')) {
            setTimeout(() => searchs(listComponents || document.querySelector('#list__components')), 100);
        }
    }
});
