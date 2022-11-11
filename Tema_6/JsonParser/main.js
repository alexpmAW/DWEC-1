"use strict";

const arrayData = [];
function generarJson() {
    const json = document.getElementById("tArea").value;
    arrayData.push(JSON.parse(json));
}

function showData() {
    arrayData.forEach(element => {
        const newLine = document.createElement('p');
        newLine.appendChild(document.createTextNode(JSON.stringify(element)));
        const section = document.getElementById("jsonValues").value;
        document.body.appendChild(newLine, section);
    })
}
