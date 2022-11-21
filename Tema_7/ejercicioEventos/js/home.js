"use strict";
import { getArrayData, cifrar } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  crearRowsTabla();
});

function crearRowsTabla() {
  const arrayData = getArrayData()
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


function addDataColumn(text, row) {
  const name = document.createElement('td');
  const texto = document.createTextNode(text);
  name.appendChild(texto);
  row.appendChild(name);
}