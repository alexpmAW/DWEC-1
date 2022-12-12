"use strict";

document.addEventListener("DOMContentLoaded", function () {
  modificarTextoButton();
  hoverPonerColorAmarillo();

});

function modificarTextoButton() {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    const h4 = document.querySelector(".heading4");
    h4.textContent = "Wow we did it! The content is changed";
  });
}

function hoverPonerColorAmarillo() {
  const btn = document.querySelector("button");
  btn.addEventListener("mouseover", function () {
    const h4 = document.querySelector(".heading4");
    h4.style.backgroundColor = 'Black';
  });
}