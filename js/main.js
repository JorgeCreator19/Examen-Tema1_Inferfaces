const formulario = document.getElementById('formulario');
const button = document.getElementById('boton');
const result = document.getElementById('datos-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const secciones = [
    document.getElementById('seccion1'),
    document.getElementById('seccion2'),
    document.getElementById('seccion3'),
    document.getElementById('seccion4'),
];

let step = 0;

nameInput.focus();

formulario.addEventListener('submit', async function (event) {
    event.preventDefault();

    secciones[step].classList.add('ocultar');
    step++;
    secciones[step].classList.remove('ocultar');

    switch (step) {
        case 1:
            emailInput.focus();
            break;

        case 2:
            passwordInput.focus();
            break;

        case 3:
            result.innerHTML = `
                <p>Nombre: ${nameInput.value}</p>
                <p>E-Mail: ${emailInput.value}</p>
                <p>Contraseña: ${passwordInput.value}</p>
            `;
            button.classList.add('ocultar');
            break;
    }
});