"use strict";

function obtenerTodosLosBinarios() {
    let result = [];
    const number = parseInt(document.getElementById("myInput").value);
    const maxNumber = 2 ** number;
    for (let i = 0; i < maxNumber; i++) {
        result.push(i.toString(2).padStart(number, '0'));
    }
    alert(result)
    return result;
}

function obtenerTodosLosPosiblesArrays() {
    let result = [];
    const inputValue = document.getElementById("myInput").value;
    const array = inputValue.split(',');
    const arrayResults=bucleRecursivo(array,[],0,[]);
    alert(arrayResults)
    return arrayResults;
}
function bucleRecursivo(arrayAllValues, arrayOtherIndex, numBucle,arrayResults) {
    for (let i = 0; i < arrayAllValues.length; i++) {
        if (numBucle === (arrayAllValues.length -1) ) {
            const newElement= [];
            arrayOtherIndex.forEach(element => {
                newElement.push(arrayAllValues[element]);
            });
            newElement.push(arrayAllValues[i]);
            arrayResults.push(newElement);
            continue;
        }
        arrayResults=bucleRecursivo(arrayAllValues, [...arrayOtherIndex,i], numBucle + 1,arrayResults);
    }
    return arrayResults;
}
