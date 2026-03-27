import { card } from '../card.js';
import { baseDeDatos } from '../db/db.js';

// const divAlmacenamiento = document.querySelector('#card__almacenamiento');
// const divFuente = document.querySelector('#card__fuente__de__alimentacion');
// const divGabinete = document.querySelector('#card__gabinetes');
// const divMemoria = document.querySelector('#card__memoria__ram');
// const divMotherboards = document.querySelector('#card__motherboards');
// const divProcesadores = document.querySelector('#card__procesadores');
let listComponents = document.querySelector('#list__components');
const main = document.querySelector('main');



// crea todos las card de los componentes y los coloca en div con su respectiva categoria
export function creadorDeCards(db, tipos) {
    if(!listComponents){
        listComponents = document.createElement('section');
        listComponents.style = 'padding-top: 150px;';
        listComponents.setAttribute('id', 'list__components');
    }
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.style = 'text-transform: upperCase; text-align: center;';
    h1.textContent = 'Componentes';
    div.classList.add('products');

    tipos.forEach( compo => {
        db.componentes[compo].forEach( (producto)=> {
            card(div, producto.id, producto.nombre, producto.img, producto.stock, producto.precio, producto.financiacion);
        })
    });
    listComponents.appendChild(h1);
    listComponents.appendChild(div);

    // Hide skeleton loader once products are ready
    const skeleton = document.getElementById('skeleton__loader');
    if (skeleton) skeleton.style.display = 'none';

    // If the user arrived via ?q= search redirect, apply the pending filter now
    if (window.__pendingSearchQuery) {
        const q = window.__pendingSearchQuery;
        window.__pendingSearchQuery = null; // clear flag
        const inputBusqueda = document.querySelector('#id-barra-busqueda');
        if (inputBusqueda) inputBusqueda.value = q;
        // Re-query the section (it's now in the DOM)
        const updatedList = document.querySelector('#list__components');
        if (updatedList) {
            const li = updatedList.querySelectorAll('.title__card');
            const cards = updatedList.querySelectorAll('.container__card');
            const filter = q.toUpperCase();
            for (let i = 0; i < li.length; i++) {
                cards[i].style.display = li[i].textContent.toUpperCase().includes(filter) ? '' : 'none';
            }
        }
    }

    return listComponents;
}

if(location.pathname === '/pages/componentes'){
    (function cardDeComponentes() {    
        const nombres = [
             'almacenamiento',
             'fuenteDeAlimentacion',
             'gabinete' ,
             'motherboard',
             'memoriaRam',
             'procesadores',
             'monitores',
             'placaDeVideo'
        ]
        creadorDeCards(baseDeDatos, nombres)
    })()
}

