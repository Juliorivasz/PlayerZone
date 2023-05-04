import { card } from '../card.js';
import { baseDeDatos } from '../db/db.js';

const listComponents = document.querySelector('#list__components');
// const divAlmacenamiento = document.querySelector('#card__almacenamiento');
// const divFuente = document.querySelector('#card__fuente__de__alimentacion');
// const divGabinete = document.querySelector('#card__gabinetes');
// const divMemoria = document.querySelector('#card__memoria__ram');
// const divMotherboards = document.querySelector('#card__motherboards');
// const divProcesadores = document.querySelector('#card__procesadores');


// crea todos las card de los componentes y los coloca en div con su respectiva categoria
function creadorDeCards(db, tipos) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.style = 'text-transform: upperCase; text-align: center;'
    h1.textContent = 'Componentes';
    div.classList.add('products');

    tipos.forEach( compo => {
        db.componentes[compo].forEach( (producto)=> {
            card(div, producto.id, producto.nombre, producto.img, producto.stock, producto.precio, producto.financiacion);
            // if(compo === procesadores){
            //     divProcesadores.appendChild(div);
            // }
        })
        // if(compo === almacenamiento){
        //     divAlmacenamiento.appendChild(div);
        // }
        // if(compo === fuenteDeAlimentacion){
        //     divFuente.appendChild(div);
        // }
        // if(compo === gabinete){
        //     divGabinete.appendChild(div);
        // }
        // if(compo === motherboard){
        //     divMotherboards.appendChild(div);
        // }
        // if(compo === memoriaRam){
        //     divMemoria.appendChild(div);
        // }
        listComponents.appendChild(h1);
        listComponents.appendChild(div);
    });
}

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

