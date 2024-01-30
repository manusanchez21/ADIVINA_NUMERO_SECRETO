const readlineSync = require('readline-sync');
const {numeroAleatorio, verificarIntento} = require('./adivinanza');

const numeroDeUsuario = () => {
    return readlineSync.questionInt("Ingrese un numero: ");
}

const juegoAdivinanza = () => {
    const numero = numeroAleatorio();
    let intento = 0;

    console.log("Adivina el numero secreto del 1 al 100");

    while (intento !== numero) {
        intento = numeroDeUsuario()
        verificarIntento(numero, intento);

    }
}

juegoAdivinanza()