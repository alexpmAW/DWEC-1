"use strict";

function devolverListaSinRepetidos() {
    const texto = document.getElementById("myInput").value;
    const array = texto.split(',');
    const dict = [];
    array.forEach(function (ele, i) {
        if (!dict.some(x => x.element == ele)) dict.push({ element: ele, index: i });
    });

    alert(dict.sort((a, b) => a.index - b.index).map(x => x.element));

}
