import './Firebase/firebase.js';
import './mostrarContraseña.js';
import { nuevoUsuario, verifyUsers } from './Firebase/firebase.js';

const formRegister = document.querySelector('.form__register');
const telefonoInput = document.getElementById('telefono');

// validacion de telefono argentino
  telefonoInput.addEventListener('input', (e) => {
    const telefono = e.target.value;
    const regex = /^\+54?\s?([0-9]{2})?\s?([0-9]{4})-?([0-9]{4})$/;
    if (!regex.test(telefono)) {
      telefonoInput.setCustomValidity('Por favor, ingresa un número de teléfono argentino válido. ej: +54');
    } else {
      telefonoInput.setCustomValidity('');
    }
  });

formRegister.addEventListener('submit', async (e)=> {
    e.preventDefault();

    const inputNombre = formRegister['nombre'];
    const inputUsuario = formRegister['usuario'];
    const inputEmail = formRegister['email'];
    const inputPassword = formRegister['password'];
    const inputTelefono = formRegister['telefono'];
    const inputDireccion = formRegister['direccion'];

    // obejto con el valor de los input
    const infoData = {
        nombre: inputNombre.value,
        usuario: inputUsuario.value,
        email: inputEmail.value,
        password: inputPassword.value,
        telefono: inputTelefono.value,
        direccion: inputDireccion.value
    }

    // verifyUsers verifica que el usuario no exista en la base de datos
    const validityUsers = await verifyUsers(infoData);
    
    if(validityUsers) {
      const authNewUser = await nuevoUsuario(infoData.email, infoData.password);
      formRegister.reset();
      window.location.href = '../index.html';
    }

})
