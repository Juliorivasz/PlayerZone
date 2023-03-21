import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
// import {  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = {
    apiKey: "AIzaSyA2P5IMO3DZlc4vgTvaOKo-9o0z440429M",
    authDomain: "playerzone-i9700.firebaseapp.com",
    projectId: "playerzone-i9700",
    storageBucket: "playerzone-i9700.appspot.com",
    messagingSenderId: "919696731863",
    appId: "1:919696731863:web:3ce6143e7c9937f5874a92",
    measurementId: "G-CLTQZ8J0JZ"
};


export const app = initializeApp(firebase);

const db = getFirestore(app);

// almacenar datos a una collecion llamada RegisterUsers
export const saveData = (nombre, usuario, email, password, telefono, direccion)=> {
    addDoc(collection(db, 'RegisterUsers'), {nombre, usuario, email, password, telefono, direccion });
}

export const verifyUsers = async ( data )=> {
    const readData = await getDocs(collection(db, 'RegisterUsers'));
    const {nombre, usuario, email, password, telefono, direccion} = data;
    let permitted = true;
    readData.forEach((doc) => {
        const docData = doc.data();
        // validacion de si existe o no el dato pasado al input en la base de datos
        if(docData.usuario === usuario) {
            permitted = false;
            alert('Este Nombre de Usuario ya Existe');
        }else if(docData.email === email) {
            permitted = false;
            alert('Este correo ya esta registrado');
        }else if(docData.telefono === telefono) {
            permitted = false;
            alert('Este telefono ya esta registrado');
        }
    });
    
    if(permitted) {
        alert('Registrado con Exito');
        saveData(nombre, usuario, email, password, telefono, direccion);
    }
    return permitted;
}