// alerta de haberse registrado correctamente o no
export function alertAuth(mensaje, tipo = 'validado') {
        Toastify({
        text: mensaje,
        duration: 4000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: tipo === 'validado' ? 'green' : 'red',
        },
        onClick: function(){} // Callback after click
    }).showToast();

}