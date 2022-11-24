"use strict";
import { storeData } from "./main.js";
import {
  checkIfElementValueIsEmpty, checkPassword,
  checkIsOlderThanEighteen, checkIfIsCorrectIban
} from "./validator.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('idForm').addEventListener("submit", function (event) {
    checkAndSaveData(event);
  })
});

function checkAndSaveData(event) {
  let message = "";
  const nombre = document.getElementById('iNombre').value;
  const apellido = document.getElementById('iApellido').value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const nacimiento = document.getElementById('iNacimiento').value;
  const pass = document.getElementById('iPass').value;
  const iban = document.getElementById('ccc1').value
    + document.getElementById('ccc2').value
    + document.getElementById('ccc3').value
    + document.getElementById('ccc4').value;

  message = checkPersonalInformation(nombre, apellido, genero, nacimiento, message);

  message = checkPrivateInformation(iban, pass, message);

  setErrorMessage(event, message);

  if (message === "") {
    storeData(nombre, apellido, nacimiento, genero, iban, pass);
  }

}
function setErrorMessage(event, message) {
  const error = document.getElementById("error");
  if (message !== "") {
    event.preventDefault();
    error.className = "error active";
    error.innerHTML = message;
    return;
  }

  error.className = "error";
  error.textContent = "";

}
function checkPrivateInformation(iban, pass, message) {
  message += checkIfIsCorrectIban(iban);
  message += checkPassword(pass);
  return message;
}

function checkPersonalInformation(nombre, apellido, nacimiento, genero, message) {

  message += checkIfElementValueIsEmpty(nombre, 'Nombre');
  message += checkIfElementValueIsEmpty(apellido, 'Apellido');
  message += checkIfElementValueIsEmpty(nacimiento, 'Nacimiento');
  message += checkIsOlderThanEighteen(nacimiento);
  message += checkIfElementValueIsEmpty(genero, 'Genero');
  return message;
}


