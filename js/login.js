const formulario = document.querySelector('.form__login');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    // usuario y contraseña
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const messageError = document.querySelectorAll('.message__error');

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
