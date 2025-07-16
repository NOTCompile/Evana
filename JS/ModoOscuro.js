const boton = document.getElementById('btn-modo-oscuro');
    boton.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
    });