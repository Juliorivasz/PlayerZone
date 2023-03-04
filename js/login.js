const formulario = document.querySelector('.form__login');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value;

    if(username === "admin" && password === "Admin123") {
        window.location.href = "../index.html";
    }else {
        alert('usuario o contraseña incorrecta');
        event.target.reset();
    }

})