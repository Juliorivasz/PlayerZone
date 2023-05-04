import { alertAuth } from "./alertAuth.js";

const formularioSearch = document.querySelector('.container-barra-busqueda');
const inputSearch = document.querySelector('#id-barra-busqueda');
const listComponents = document.querySelector('#list__components');


formularioSearch.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(location.pathname === '/pages/componentes.html'){
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
    }else {
        location.href= '/pages/componentes.html';
    }
})
