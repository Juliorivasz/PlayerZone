import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { auth } from "./Firebase/firebase.js";
import { alertAuth } from "./alertAuth.js";

const btnFacebook = document.querySelector('#facebook');

btnFacebook.addEventListener('click', async ()=> {
        const facebookProvider = new FacebookAuthProvider();
    
        try {
            const credentialsFacebook = await signInWithPopup(auth, facebookProvider);
            alertAuth('Bienvenido ' + credentialsFacebook.user.displayName);
            setTimeout(()=> {
                window.location.href = "../index.html";
            }, 2000)
        } catch (error) {
            alertAuth('no pudo conectar con Facebook', 'denegado');
        }
})