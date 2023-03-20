import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import {  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

// Initialize Firebase
// const db = getFirestore();
export const app = initializeApp(firebase);

console.log('corriendo firebase.js')