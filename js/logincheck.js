const ingresar = document.querySelector('.ingresar');
const registrar = document.querySelector('.registrarse');
const cerrar__sesion = document.querySelector('.cerrar__sesion');
const logoUser = document.querySelector('.logo-user');


export const loginCheck = (user)=> {
    
    if(user) {
        logoUser.src = user.photoURL;
        ingresar.classList.add('isLogged')
        registrar.classList.add('isLogged')
        cerrar__sesion.classList.remove('isLogged')
    }else {
        logoUser.src = '../img/logo user.png';
        ingresar.classList.remove('isLogged')
        registrar.classList.remove('isLogged')
        cerrar__sesion.classList.add('isLogged')

    }
}