"use strict";

function numeroMasRepetidoSmall() {
    const texto = document.getElementById("myInput").value;
    const array = texto.split(',');
    const dict = [];
    array.forEach(function (element) {
        if (!dict[element]) dict[element] = 0;
        dict[element]++;
    });
    let minElement = { numero: Number.MAX_VALUE, repeticiones: Number.MAX_VALUE };
    dict.forEach(function (repeticiones, numero) {
        if (minElement.repeticiones > repeticiones) {
            minElement = { numero: numero, repeticiones: repeticiones };
        }

        if (minElement.repeticiones === repeticiones && minElement.numero > numero) {
            minElement = { numero: numero, repeticiones: repeticiones };
        }

    });
    alert(minElement.numero);
}
