"use strict";

function cifrar() {
    const textValue = document.getElementById("textAreaCifrar").value;
    let desplazamiento = document.getElementById("numeroCesar").value;
    if (desplazamiento === undefined || desplazamiento === '') {
        alert("Introduce un número de César")
        return;
    }
    desplazamiento = parseFloat(desplazamiento);
    const ABECEDARIO = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z');
    let resultado = '';
    for (let i = 0; i < textValue.length; i++) {

        let indexNumber = ABECEDARIO.indexOf(textValue.charAt(i).toLowerCase());
        if (indexNumber === -1) {
            resultado = resultado + textValue.charAt(i);
            continue;
        }
        resultado = resultado + ABECEDARIO[(indexNumber + desplazamiento) % 26];
    }
    document.getElementById("textAreaCifrado").value = resultado;
}

function onlyNumber(event) {
    if (event.keyCode === 8) {
        return true;
    }

    if (isNaN(parseFloat(event.key))) {
        return false;
    }
    return true;
}