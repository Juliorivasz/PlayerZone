import './mostrarContraseña.js';
import { auth } from './Firebase/firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { alertAuth } from './alertAuth.js';
import './googleLogin.js';


const formulario = document.querySelector('.form__login');

formulario.addEventListener('submit', async (event)=>{
    event.preventDefault();
    // usuario y contraseña
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const messageError = document.querySelectorAll('.message__error');

    // objeto con los valores del input para logearse

    const loginData = {
        usuario: username.value,
        contrasena: password.value
    }

    const {usuario, contrasena} = loginData;

    // autenticado el inicio de sesion con la base de datos usando firestore
    // authUsers(loginData);

    // ingresar sesion con auth de firebase
    try {
        const credentials = await signInWithEmailAndPassword(auth, usuario, contrasena);
        alertAuth(`Bienvenido ${usuario}`);
        setTimeout(()=> {
            window.location.href = "../index.html";
        }, 2000);
    } catch (error) {
        if(error.code === 'auth/invalid-email') {
            alertAuth('Correo invalido', 'invalido');
        }else if(error.code === 'auth/wrong-password'){
            alertAuth('contraseña incorrecta', 'invalido');
        }else if(error.code === 'auth/user-not-found'){
            alertAuth('usuario no existe', 'invalido');
        }else {
            alertAuth('error', 'invalido')
        }
    }

})








