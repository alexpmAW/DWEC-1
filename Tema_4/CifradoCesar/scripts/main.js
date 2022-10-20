"use strict";
const ABECEDARIO = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z');

const ARRAYORDERLETTER = ['E',
    'A',
    'O',
    'S',
    'N',
    'R',
    'I',
    'L',
    'D',
    'T',
    'U',
    'C',
    'M',
    'P',
    'B',
    'H',
    'Q',
    'Y',
    'V',
    'G',
    'Ó',
    'Í',
    'F',
    'J',
    'Z',
    'Á',
    'É',
    'Ñ',
    'X',
    'Ú',
    'K',
    'W',
    'Ü'];

function cifrar() {
    const textValue = document.getElementById("textAreaCifrar").value;
    let desplazamiento = document.getElementById("numeroCesar").value;
    if (desplazamiento === undefined || desplazamiento === '') {
        alert("Introduce un número de César");
        return;
    }
    desplazamiento = parseFloat(desplazamiento);

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


function descifrar() {
    const textValue = document.getElementById("textAreaCifrar").value;
    const constPorcentaje = [];
    let resultado = '';
    for (let i = 0; i < textValue.length; i++) {
        if (!ABECEDARIO.includes(textValue[i])) {
            continue;
        }
        const element = constPorcentaje.find(x => x.value === textValue[i]);
        if (element !== undefined) {
            element.cont += 1;
            continue;
        }
        constPorcentaje.push({ value: textValue[i], cont: 1 });
    }

    constPorcentaje.sort((x,y) =>  y.cont - x.cont);

    for (const letter of textValue)
    {
        resultado+=decipherLetter(letter, constPorcentaje);
    }

    document.getElementById("textAreaDescifrado").value = resultado.toLowerCase();
}

function decipherLetter(letter, constPorcentaje)
{
    const index= constPorcentaje.findIndex(x=> x.value===letter);
    return index === -1 ? letter : ARRAYORDERLETTER[index];
}