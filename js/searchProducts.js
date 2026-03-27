const formularioSearch = document.querySelector('.container-barra-busqueda');
const inputSearch = document.querySelector('#id-barra-busqueda');
const inputBusqueda = document.querySelector("#id-barra-busqueda");

// Expose pending search query globally so card-componentes.js can apply it after Firebase loads
window.__pendingSearchQuery = null;

// al enviar el buscador realiza la busqueda en componentes
formularioSearch.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(location.pathname.includes('/pages/componentes')){
        const listComponents = document.querySelector('#list__components');
        if (listComponents) searchs(listComponents);
    } else {
        location.href = `/pages/componentes.html?q=${encodeURIComponent(inputSearch.value.trim())}`;
    }
})

// realiza el filtro de busqueda
export const searchs = (listComponents) => {
    let filter = inputBusqueda.value.toUpperCase();
    let li = listComponents.querySelectorAll('.title__card');
    let card = listComponents.querySelectorAll('.container__card');

    if (!li || li.length === 0) return;

    let foundCount = 0;
    for (let i = 0; i < li.length; i++) {
        let name = li[i].textContent.toUpperCase();
        if (name.indexOf(filter) > -1) {
            card[i].style.display = "";
            foundCount++;
        } else {
            card[i].style.display = "none";
        }
    }
    return foundCount;
}

// al escribir en el input se realiza la busqueda en tiempo real
inputBusqueda.addEventListener('input', ()=> {
    const listComponents = document.querySelector('#list__components');
    if(location.pathname.includes('/pages/componentes') && listComponents){
        searchs(listComponents);
    }
})

// If arriving from another page with ?q=, store it and wait for products to be ready
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if(q && location.pathname.includes('/pages/componentes')) {
        inputBusqueda.value = q;
        window.__pendingSearchQuery = q;
    }
});
