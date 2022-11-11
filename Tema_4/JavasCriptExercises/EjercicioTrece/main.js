"use strict";

const LETRAG = 'G';
const LETRAB = 'B';
const LETRAR = 'R';

function getMergedColor() {
    let linea = document.getElementById("myInput").value;
    for (let i = 0; linea.length > 1; i++) {
        linea = procesarLinea(linea);
        alert(linea);
    }
    return linea;
}

function procesarLinea(linea) {
    let letras = '';
    for (let i = 0; i < linea.length - 1; i++) {
        letras += getLetra(linea[i], linea[i + 1]);
    }
    return letras;
}

function getLetra(firstLetter, secondLetter) {
    if (firstLetter === secondLetter) {
        return firstLetter;
    }
    switch (firstLetter) {
        case LETRAG:
            return secondLetter === LETRAB ? LETRAR : LETRAB;
        case LETRAR:
            return secondLetter === LETRAG ? LETRAB : LETRAG;
        case LETRAB:
            return secondLetter === LETRAR ? LETRAG : LETRAR;
    }
    throw 'WRONG LETTER';
}
