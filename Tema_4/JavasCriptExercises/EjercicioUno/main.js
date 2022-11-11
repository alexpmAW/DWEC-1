"use strict";

function contarNumeroVocales() {
    const number = document.getElementById("myInput").value;
    alert(number.match(/[aeiou]/gi).length);
}
