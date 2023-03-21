import './mostrarContraseña.js';
import { auth, authUsers } from './Firebase/firebase.js';

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

    // autenticado el inicio de sesion con la base de datos
    authUsers(loginData);


})








