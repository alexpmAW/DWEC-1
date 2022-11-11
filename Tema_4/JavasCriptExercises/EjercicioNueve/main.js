"use strict";

function devolverNumeroMaximo() {
    const number = document.getElementById("myInput").value;
    const exponent = number.length;
    const digits = number.split('').map(str => {
        return Number(str);
    });
    digits.sort((a, b) => b - a)
    const result = parseInt(digits.join(''));
    alert(result);
}
