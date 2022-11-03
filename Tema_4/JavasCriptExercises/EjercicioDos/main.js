"use strict";

function comprobarPin() {
    const number = document.getElementById("myInput").value;
    if (number.length === 4 || number.length === 6) {
        alert(true);
        return;
    }
    alert(false);
}
