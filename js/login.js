import './Firebase/firebase.js';
import './mostrarContraseña.js';

const formulario = document.querySelector('.form__login');


formulario.addEventListener('submit', (event)=>{
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

    // validacion de usuario y contraseña
    if(username.toLowerCase() === "admin" && password === "Admin123") {
        window.location.href = "../index.html";
    }else if(password !== "Admin123" && username === "admin"){
        let valorCampo = username;
        event.target.reset();
        messageError[0].classList.add('hidden');
        messageError[1].classList.remove('hidden');
        console.log(messageError);
        document.querySelector('#username').value = valorCampo;
    }else if(username !== "admin" && password === "Admin123"){
        event.target.reset();
        messageError[1].classList.add('hidden');
        messageError[0].classList.remove('hidden');
    }else {
        event.target.reset();
        messageError.forEach(e => e.classList = "message__error");
    }
})








