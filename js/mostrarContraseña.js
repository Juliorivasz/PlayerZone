const inputPassword = document.querySelector("#password");
const eye = document.querySelectorAll(".eye");
// mostrar u ocultar contraseña 
eye.forEach((e) => {
    e.addEventListener('click', ()=> {
        if(eye[0].classList.value === "eye"){
            eye[1].classList.remove('hidden');
            eye[0].classList.add('hidden');
            inputPassword.type = 'text';
        }else if(eye[1].classList.value === "eye"){
            eye[0].classList.remove('hidden');
            e.classList.add('hidden');
            inputPassword.type = 'password';
        }
})
})