import { card } from '../card.js';
import { baseDeDatos } from '../db/db.js';

const divAlmacenamiento = document.querySelector('#card__almacenamiento');
const divFuente = document.querySelector('#card__fuente__de__alimentacion');
const divGabinete = document.querySelector('#card__gabinetes');
const divMemoria = document.querySelector('#card__memoria__ram');
const divMotherboards = document.querySelector('#card__motherboards');
const divProcesadores = document.querySelector('#card__procesadores');



function creadorDeCards(db, tipos) {
    const [almacenamiento, fuenteDeAlimentacion, gabinete, motherboard, memoriaRam, procesadores] = tipos;

    tipos.forEach( compo => {
        const div = document.createElement('div');
        div.classList.add('products');
        db.componentes[compo].forEach( (producto)=> {
            card(div, producto.id, producto.nombre, producto.img, producto.stock, producto.precio, producto.financiacion);
            if(compo === procesadores){
                divProcesadores.appendChild(div);
            }
        })
        if(compo === almacenamiento){
            divAlmacenamiento.appendChild(div);
        }
        if(compo === fuenteDeAlimentacion){
            divFuente.appendChild(div);
        }
        if(compo === gabinete){
            divGabinete.appendChild(div);
        }
        if(compo === motherboard){
            divMotherboards.appendChild(div);
        }
        if(compo === memoriaRam){
            divMemoria.appendChild(div);
        }
    });
}

(function cardDeComponentes() {    
    const nombres = [
         'almacenamiento',
         'fuenteDeAlimentacion',
         'gabinete' ,
         'motherboard',
         'memoriaRam',
         'procesadores'
    ]
    creadorDeCards(baseDeDatos, nombres)
})()

