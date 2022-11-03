"use strict";

function getNumerosImpares() {
    const texto = document.getElementById("myInput").value;
    const array = texto.split(',');
    const dict = [];
    array.forEach(function (element) {
        if (!dict[element]) dict[element] = 0;
        dict[element]++;
    });

    const result = [];
    dict.forEach(function (repeticiones, numero) {
        if (repeticiones % 2 !== 0) {
            result.push(numero);
        }
    });
    alert(result);

}
