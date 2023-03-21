import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { alertAuth } from "../alertAuth.js";
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
export const authUsers = async ( user )=> {
    const getUserRegister = await getDocs(collection(db, 'RegisterUsers'));
    let error;
    let validado;
    let nombre;
    const { usuario , contrasena } = user;

    getUserRegister.forEach( (doc) => {
        const docDataUser = doc.data();


        if(docDataUser.usuario === usuario && docDataUser.password === contrasena) {
            console.log(docDataUser.usuario, docDataUser.password)
            nombre = docDataUser.nombre;
            return validado = 'login';
        }else if(docDataUser.usuario === usuario && docDataUser.password !== contrasena) {
            return error = 'Contraseña incorrecta';
        }else if(docDataUser.usuario !== usuario && docDataUser.password === contrasena) {
            return error = 'Usuario incorrecto';
        }else {
            console.log('error')
            return error = 'Credenciales incorrectas';
        }
    })
    console.log(validado)
    if(validado === 'login') {
        alertAuth('Bienvenido ' + nombre);
            setTimeout(()=> {
                window.location.href = "../index.html";

            }, 1000)
    }else if(error === 'Contraseña incorrecta') {
        return alertAuth(error, 'invalido');
    }else if(error === 'Usuario incorrecto') {
        return alertAuth(error, 'invalido');
    }else {
        return alertAuth(error, 'invalido');
    }

}