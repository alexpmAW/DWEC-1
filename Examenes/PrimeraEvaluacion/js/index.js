"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('#idForm').addEventListener("submit", function (event) {
    checkAndSaveData(event);
  })

  document.querySelectorAll('input[type="button"]').forEach(element=> element.addEventListener('click', function(event)
  {
    clickStat(event);
  }))

  generateRandomStats();
  
});

function generateRandomStats()
{
  const valorVida=Math.floor(Math.random()* 8);
  const valorFuerza=Math.floor(Math.random()* (10-valorVida));
  const valorSuerte=Math.floor(Math.random()* (10 - valorVida -valorFuerza ));
  document.querySelector("#vida").value=valorVida;
  document.querySelector("#fuerza").value= valorFuerza;
  document.querySelector("#suerte").value= valorSuerte;
  document.querySelector("#totalPunto").textContent=10 - (valorVida+valorFuerza+valorSuerte);
}

function clickStat(event)
{ 
  const valorPunto=document.querySelector("#totalPunto").textContent;
  if (valorPunto==="10" && event.target.value==="-")
  {
    return;
  }
  if (valorPunto==="0" && event.target.value==="+")
  {
    return;
  }

  if (event.target.id==='menosFuerza' && document.querySelector("#fuerza").value>0)
  {
    document.querySelector("#fuerza").value=parseInt(document.querySelector("#fuerza").value) -1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) +1;
  }
  if (event.target.id==='masFuerza' && document.querySelector("#fuerza").value<=10)
  {
    document.querySelector("#fuerza").value=parseInt(document.querySelector("#fuerza").value) +1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) -1;
  }
  if (event.target.id==='menosVida' && document.querySelector("#vida").value>0)
  {
    document.querySelector("#vida").value=parseInt(document.querySelector("#vida").value) -1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) +1;
  }
  if (event.target.id==='masVida' && document.querySelector("#vida").value<=10)
  {
    document.querySelector("#vida").value=parseInt(document.querySelector("#vida").value) +1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) -1;
  }
  if (event.target.id==='menosSuerte' && document.querySelector("#suerte").value>0)
  {
    document.querySelector("#suerte").value=parseInt(document.querySelector("#suerte").value) -1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) +1;
  }
  if (event.target.id==='masSuerte'&& document.querySelector("#suerte").value<=10)
  {
    document.querySelector("#suerte").value=parseInt(document.querySelector("#suerte").value) +1;
    document.querySelector("#totalPunto").textContent=parseInt(document.querySelector("#totalPunto").textContent) -1;
  }
}

function checkAndSaveData(event) {
  let message = "";
  const raza = document.querySelector('#raza').value;
  const alineamiento = document.querySelector('input[name="alineamiento"]:checked').value;

  message += checkRaza(raza, alineamiento);

  message+= checkTotalStats();

  setErrorMessage(event, message);

  setData(document.querySelector("#suerte").value,document.querySelector("#fuerza").value,document.querySelector("#vida").value);
}

function setData(suerte, fuerza,vida)
{
  localStorage.setItem("personaje", JSON.stringify({suerte:suerte, fuerza:fuerza, vida:parseInt(vida)*2+30}))
}
function checkTotalStats()
{
  if (parseInt(document.querySelector("#totalPunto").textContent)!==0)
  {
    return "Tienes que gastar todos los puntos <br>"
  }

  return "";
}
function checkRaza(raza,alineamiento)
{
  if (raza==="Orco" && alineamiento==="Good")
  {
    return "No puedes ser orco y good <br>";
  }
  if (raza==="Elfo" && alineamiento==="Evil")
  {
    return "No puedes ser Elfo y Evil <br>";
  }
  if (raza==="Humano" && alineamiento==="Neutral")
  {
    return "No puedes ser humano y neutral <br>";
  }
  return "";
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


