"use strict";

document.addEventListener("DOMContentLoaded", function () {
  modificarTextoButton();
  
});

function modificarTextoButton() {
  const btn = document.querySelector("button");
  const changeContent = () => {
    const h4 = document.querySelector(".heading4");
    h4.textContent = "Wow we did it! The content is changed";
  };
  btn.addEventListener("click", changeContent);
}