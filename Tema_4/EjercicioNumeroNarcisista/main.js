"use strict";

function isNumberNarcisist() {
    const number = document.getElementById("myInput").value;
    const exponent = number.length;
    const digits = number.split('').map(str => {
        return Number(str);
    });
    var cantidad = 0;
    digits.forEach(element => cantidad += element ** exponent);

    alert(cantidad === parseInt(number));
}
