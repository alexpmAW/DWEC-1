"use strict";

function getArrayDif() {
    const arrayOriginal = document.getElementById("myInputOriginal").value;
    const arrayDif = document.getElementById("myInputDif").value;
    const arrayResult = [];
    for (const element of arrayOriginal) {
        if (!arrayDif.includes(element) && !arrayResult.includes(element)) {
            arrayResult.push(element);
        }
    }
    alert(arrayResult);
    return arrayResult;
}
