"use strict";

function calcularCuadradoLagrange() {
    const number = parseInt(document.getElementById("myInput").value);
    for (let i = 0; i * i <= number; i++) {
        for (let j = i; j * j <= number; j++) {
            for (let k = j; k * k <= number; k++) {
                for (let l = k; l * l <= number; l++) {
                    if (i * i + j * j + k * k + l * l == number) {
                        alert(number + " = " + i + "*" +
                            i + " + " + j + "*" + j
                            + " + " + l + "*" + l
                            + " + " + k + "*" + k);
                        return;
                    }
                }
            }
        }
    }
}
