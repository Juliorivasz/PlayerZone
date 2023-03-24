import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "./Firebase/firebase.js";
import { alertAuth } from "./alertAuth.js";

const btnGoogle = document.querySelector('#google');

btnGoogle.addEventListener('click', async ()=> {
    const googleProvider = new GoogleAuthProvider();

    try {
        const credentialsGoogle = await signInWithPopup(auth, googleProvider);
        alertAuth('Bienvenido ' + credentialsGoogle.user.displayName);
        setTimeout(()=> {
            window.location.href = "../index.html";
        }, 2000)
    } catch (error) {
        alertAuth('no pudo conectar con google', 'denegado');
    }
})