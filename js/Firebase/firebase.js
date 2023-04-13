import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { alertAuth } from "../alertAuth.js";
import {loginCheck} from '../logincheck.js';
import { emptyList, productAdded } from "../cart/products-added.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyA2P5IMO3DZlc4vgTvaOKo-9o0z440429M",
    authDomain: "playerzone-i9700.firebaseapp.com",
    projectId: "playerzone-i9700",
    storageBucket: "playerzone-i9700.appspot.com",
    messagingSenderId: "919696731863",
    appId: "1:919696731863:web:3ce6143e7c9937f5874a92",
    measurementId: "G-CLTQZ8J0JZ"
};

// inicializa firebase
export const app = initializeApp(firebaseConfig);

// conecta la base de datos de firebase
const db = getFirestore(app);

// conecta la utenticacion
export const auth = getAuth(app);

// almacenar datos a una collecion llamada RegisterUsers
export const saveData = (nombre, usuario, email, password, telefono, direccion)=> {
    addDoc(collection(db, 'RegisterUsers'), {nombre, usuario, email, password, telefono, direccion });
}

// verifica que el usuario no este en la base de datos
export const verifyUsers = async ( data )=> {
    const readData = await getDocs(collection(db, 'RegisterUsers'));
    const {nombre, usuario, email, password, telefono, direccion} = data;
    let permitted = true;
    readData.forEach((doc) => {
        const docData = doc.data();
        // validacion de si existe o no el dato pasado al input en la base de datos
        if(docData.usuario === usuario) {
            permitted = false;
            alertAuth('Este Nombre de Usuario ya Existe', 'denegado');
        }else if(docData.email === email) {
            permitted = false;
            alertAuth('Este correo ya esta registrado', 'denegado');
        }else if(docData.telefono === telefono) {
            permitted = false;
            alertAuth('Este telefono ya esta registrado', 'denegado');
        }
    });
    
    if(permitted) {
        alertAuth('Registro Exitoso');
        saveData(nombre, usuario, email, password, telefono, direccion);
    }
    return permitted;
}

// validar inicio de sesion
// export const authUsers = async ( user )=> {
//     const getUserRegister = await getDocs(collection(db, 'RegisterUsers'));
//     let error;
//     let validado;
//     let nombre;
//     let authUsuario;
//     let authPassword;
//     const { usuario , contrasena } = user;

//     getUserRegister.forEach( (doc) => {
//         const docDataUser = doc.data();

//         if(docDataUser.usuario === usuario && docDataUser.password === contrasena) {
//             authUsuario = docDataUser.usuario;
//             authPassword = docDataUser.password;
//             nombre = docDataUser.nombre;
//             return validado = 'login';
//         }else if(docDataUser.usuario === usuario && docDataUser.password !== contrasena) {
//             return error = 'Contraseña incorrecta';
//         }else if(docDataUser.usuario !== usuario && docDataUser.password === contrasena) {
//             return error = 'Usuario incorrecto';
//         }else {
//             console.log('error')
//             return error = 'Credenciales incorrectas';
//         }

//     })

//     if(validado === 'login') {
//         alertAuth('Bienvenido ' + nombre);
//             setTimeout(()=> {
//                 window.location.href = "../index.html";
//             }, 1000)
//     }else if(error === 'Contraseña incorrecta') {
//         return alertAuth(error, 'invalido');
//     }else if(error === 'Usuario incorrecto') {
//         return alertAuth(error, 'invalido');
//     }else {
//         return alertAuth(error, 'invalido');
//     }
// }

// creando usuario nuevo
export const nuevoUsuario = async ( email, password ) => {
    try {
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password );
        // window.location.href = '../../index.html';
    } catch (error) {
        console.error(error);
    }
}

// registra el producto sino existe en la base de datos del carrito 
export const registerProducts = async (id,title, img, price, amount) => {
    const products = await verifyProducts(title, img, price, amount);
    if(products) {
        addDoc(collection(db, 'Products'), {id,title, img, price, amount});
    }
    console.log(products)
    // const d = doc(db, 'Products', 'jpBxyKiDQJnAlRwzUIzk');
    // console.log(d)
}

// verifica que el producto exista en el carrito y si existe le aumenta la cantidad
export const verifyProducts = async ( title, img, price, amount )=> {
    const readData = await getDocs(collection(db, 'Products'));
    const document = readData.docs
    let existe;
    for(const docu of document) {
        const docData = docu.data();
        if(docData.title === title) {
            let amountTotal = parseInt(docData.amount) + 1;
            const docUpdate = doc(db, 'Products', docu.id);
            await updateDoc(docUpdate, { amount: amountTotal});
            existe = false;
        }
    };
    if(existe === undefined) {
        return !existe;
    }else {
        return existe;
    }
}

// lee si en la base de datos existen productos en el carrito
export const readProducts = async () => {
    const readDataProducts = await getDocs(collection(db, 'Products'));
    let amountTotal = 0;
    readDataProducts.forEach( (doc) => {
        const docData = doc.data();
        const docId = doc.id;
        const {img, title, price, amount, id} = docData; 
        if(docData) {
            productAdded(img,title,price,amount, id, docId);
            console.log(doc.id)
            amountTotal = amountTotal + parseInt(amount);
        }
    })
    emptyList(readDataProducts.docs.length);
    const countCart = document.querySelector('.counter_cart');
    countCart.innerHTML = amountTotal;

}

export const changeAmount = async ( title, amount )=> {
    const readData = await getDocs(collection(db, 'Products'));
    const document = readData.docs
    let existe;
    for(const docu of document) {
        const docData = docu.data();
        if(docData.title === title) {
            let amountTotal = amount;
            const docUpdate = doc(db, 'Products', docu.id);
            await updateDoc(docUpdate, { amount: amountTotal});
            existe = false;
        }
    };
    if(existe === undefined) {
        return !existe;
    }else {
        return existe;
    }
}

export const deleteProducts = async (id) => {
    const readData = await getDocs(collection(db, 'Products'))
    readData.forEach(async (document) => {
        if(document.id === id){
           await deleteDoc(doc(db, 'Products', id));
        }
    })
    // console.log(readData.docs[0].id);
}