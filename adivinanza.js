const numeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarIntento = (numero, intento) => {
    if (numero === intento) {
        console.log("¡Adivinaste!");
    } else if (numero > intento) {
        console.log("El número es mayor");
    } else {
        console.log("El número es menor");
    }
}

module.exports = {
    numeroAleatorio, verificarIntento
}