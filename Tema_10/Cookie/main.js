
import { createCookie, readCookie, updateCookie, deleteCookie } from "./cookie.js"

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
