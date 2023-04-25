import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "./Firebase/firebase.js";
import { alertAuth } from "./alertAuth.js";
import { pantallaDeCarga } from "./cart/products-added.js";

const btnGoogle = document.querySelector('#google');

btnGoogle.addEventListener('click', async ()=> {
    const googleProvider = new GoogleAuthProvider();

    try {
        const credentialsGoogle = await signInWithPopup(auth, googleProvider);
        alertAuth('Bienvenido ' + credentialsGoogle.user.displayName);
        pantallaDeCarga();
        setTimeout(()=> {
            window.location.href = "../index.html";
        }, 2000)
    } catch (error) {
        console.error(error);
        alertAuth('no pudo conectar con google', 'denegado');
    }
})