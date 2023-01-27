
// Function to create a cookie
export function createCookie(name, value, days) {
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
export function readCookie(name) {
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
export function updateCookie(name, value, days) {
    createCookie(name, value, days);
}

// Function to delete a cookie
export function deleteCookie(name) {
    createCookie(name, "", -1);
}
