import { signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "./Firebase/firebase.js";
const cerrarSesion = document.querySelector('.cerrar__sesion');

cerrarSesion.addEventListener('click', async (e)=> {
    e.preventDefault();
    await signOut(auth)
})