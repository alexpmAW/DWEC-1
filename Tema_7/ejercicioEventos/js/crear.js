"use strict";
import { getArrayData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('idForm').addEventListener("submit", function (event) {
    saveData();
  })
});

function saveData() {

  const nombre = document.getElementById('iNombre').value;
  const apellido = document.getElementById('iApellido').value;
  const nacimiento = document.getElementById('iNacimiento').value;
  const genero = document.querySelector('input[name="genero"]:checked').checked;
  const iban = document.getElementById('ccc1').value
    + document.getElementById('ccc2').value
    + document.getElementById('ccc3').value
    + document.getElementById('ccc4').value;
  const pass = document.getElementById('iPass').value;
  let arrayData = getArrayData();
  arrayData.push({
    nombre: nombre,
    apellido: apellido,
    nacimiento: nacimiento,
    genero: genero,
    iban: iban,
    pass: pass

  })
  localStorage.setItem(JSON.stringify(arrayData))
}
