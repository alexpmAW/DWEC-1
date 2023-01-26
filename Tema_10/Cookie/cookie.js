
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#create").addEventListener("click", function () {
        createCookie("defaultCookie", document.querySelector("#createInput").value);
    })
    document.querySelector("#view").addEventListener("click", function () {
        document.querySelector("#viewInput").value = readCookie("defaultCookie");
    })
    document.querySelector("#modify").addEventListener("click", function () {
        updateCookie("defaultCookie", document.querySelector("#modifyInput").value);
    })
    document.querySelector("#delete").addEventListener("click", function () {
        deleteCookie("defaultCookie");
    })
});

// Function to create a cookie
function createCookie(name, value, days) {
    var expires;
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to read a cookie
function readCookie(name) {
    let nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to update a cookie
function updateCookie(name, value, days) {
    createCookie(name, value, days);
}

// Function to delete a cookie
function deleteCookie(name) {
    createCookie(name, "", -1);
}
