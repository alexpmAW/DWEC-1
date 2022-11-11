"use strict";

function calcularIndiceSumaIgual() {
    const number = document.getElementById("myInput").value;
    const digits = number.split(',').map(str => {
        return Number(str);
    });
    for (let i = 0; i < digits.length; i++) {
        const sumaDerecha = calcularSumaDerecha(digits, i)
        const sumaIzquierda = calcularSumaIzquierda(digits, i);
        if (sumaDerecha === sumaIzquierda) {
            alert(i);
            return;
        }
    }
    alert(-1);
}
function calcularSumaDerecha(digits, i) {
    if (i === digits.length - 1) {
        return 0;
    }
    return digits.slice(i + 1).reduce((partialSum, a) => partialSum + a, 0);
}

function calcularSumaIzquierda(digits, i) {
    if (i === 0) {
        return 0;
    }
    return digits.slice(0, i).reduce((partialSum, a) => partialSum + a, 0);
}