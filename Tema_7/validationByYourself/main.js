"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const email = document.getElementById("mail");
  const error = email.nextElementSibling;

  // As per the HTML Specification
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";

  // This defines what happens when the user types in the field
  email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
      email.className = "valid";
      error.textContent = "";
      error.className = "error";
    } else {
      email.className = "invalid";
    }
  });

  // This defines what happens when the user tries to submit the data
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = emailRegExp.test(email.value);
    if (!isValid) {
      email.className = "invalid";
      error.textContent = "No es correcto, tienes que meter un email valido";
      error.className = "error active";
    } else {
      email.className = "valid";
      error.textContent = "";
      error.className = "error";
    }
  });
});
