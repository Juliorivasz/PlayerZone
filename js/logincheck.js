const ingresar = document.querySelector('.ingresar');
const registrar = document.querySelector('.registrarse');
const cerrar__sesion = document.querySelector('.cerrar__sesion');

export const loginCheck = (user)=> {
    
    if(user) {
        ingresar.classList.add('isLogged')
        registrar.classList.add('isLogged')
        cerrar__sesion.classList.remove('isLogged')
    }else {
        ingresar.classList.remove('isLogged')
        registrar.classList.remove('isLogged')
        cerrar__sesion.classList.add('isLogged')
    }
}