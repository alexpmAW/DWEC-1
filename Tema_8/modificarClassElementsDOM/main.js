let div1 = document.querySelector("div");
console.log(div1.className); // Output:styled
div1.className = "selected";

//select the last div3
let div3 = document.querySelector(".selected");
//add class hidden - it will hide the current div-
div3.classList.add("hidden");

//remove the hidden classs
div3.classList.remove("hidden");

//toggle the hidden class
div3.classList.toggle("hidden");

div3.classList.replace("selected", "styled");
