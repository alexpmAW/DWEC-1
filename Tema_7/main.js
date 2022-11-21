"use strict";

function saveData() {

    const nombre = document.getElementById('iNombre');
    const apellido = document.getElementById('iApellido');
    const nacimiento = document.getElementById('iNacimiento');
    const genero = document.querySelector('genero').checked;
    const iban = document.getElementById('ccc1')
        + document.getElementById('ccc2')
        + document.getElementById('ccc3')
        + document.getElementById('ccc4');
    const pass = document.getElementById('iPass');
    const arrayData = localStorage.getItem("arrayData");
    arrayData.push({
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        genero: genero,
        iban: iban,
        pass: pass

    })
    localStorage.setItem()

}


function crearRowsTabla() {
    const arrayData = localStorage.getItem("arrayData");
    const tbody = document.getElementById('iBody');
    arrayData.forEach(element => {
        const row = document.createElement('tr');
        addDataColumn(element.nombre, row);
        addDataColumn(element.apellido, row);
        addDataColumn(element.nacimiento, row);
        addDataColumn(element.genero, row);
        addDataColumn(element.iban, row);
        addDataColumn(cifrar(element.pass), row);
        tbody.appendChild(row);
    });
}

const ABECEDARIO = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z');


function addDataColumn(text, row) {
    const name = document.createElement('td');
    const texto = document.createTextNode(text);
    name.appendChild(texto);
    row.appendChild(name);
}

function cifrar(textValue) {

    desplazamiento = 5

    let resultado = '';
    for (let i = 0; i < textValue.length; i++) {

        let indexNumber = ABECEDARIO.indexOf(textValue.charAt(i).toLowerCase());
        if (indexNumber === -1) {
            resultado = resultado + textValue.charAt(i);
            continue;
        }
        resultado = resultado + ABECEDARIO[(indexNumber + desplazamiento) % 26];
    }
    return resultado;
}
