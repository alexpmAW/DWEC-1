"use strict";

function getPersistencia() {
    const number = document.getElementById("myInput").value;
    const result = calcularPersistencia(number, 0);
    alert(result);
}

function calcularPersistencia(number, contador) {
    if (number < 10) {
        return contador;
    }
    contador++;
    number = calcularSiguienteDigito(number);
    return calcularPersistencia(number.toString(), contador);
}

function calcularSiguienteDigito(number) {
    let resultado = 1;
    for (const c of number) {
        resultado = resultado * parseInt(c);
    }
    return resultado;
}

