"use strict";

function obtenerNumeroBitsUno() {
    const number = parseFloat(document.getElementById("myInput").value);
    const binario = (number >>> 0).toString(2);
    let contador = 0;
    for (const element of binario) {
        if (element === "1") {
            contador++;
        }
    }
    alert(contador);
    return contador;
}
