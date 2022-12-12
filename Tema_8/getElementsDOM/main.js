//Access me by id using the getElementById()
const first = document.getElementById("divID");
first.style.backgroundColor = "lightblue";

//Access me by class name firstClass (1)
//Access me by class name firstClass (2)
let second = document.getElementsByClassName("firstClass");
for (item of second) {
  item.style.border = "3px solid yellow";
  item.style.color = "black";
}

//Access me by the tag name-span (1)
//Access me by the tag name-span (1)
let third = document.getElementsByTagName("p");
for (item of third) {
  //console.log(item);
  item.style.backgroundColor = "blue";
  item.style.border = "3px solid teal";
  item.style.color = "white";
  item.style.fontSize = "20px";
}

//Access me by single query selector
let fourth = document.querySelector("#singleID");
fourth.style.border = "none";
fourth.style.color = "white";
fourth.style.backgroundColor = "#4d0000";
//Accedemos por id pero también se puede por clase
let fifth = document.querySelector(".slateBg");
fifth.style.border = "3px solid black";
fifth.style.color = "white";
fifth.style.backgroundColor = "slateblue";

//Access me by query all class name (1)
let sixth = document.querySelectorAll(".queryAll");
//console.log(sixth);
sixth.forEach((item) => {
  item.style.color = "white";
  item.style.padding = "10px";
  item.style.backgroundColor = "#D35400";
  item.style.fontSize = "23px";
});
//Access me by query all class name (2)
let seventh = document.querySelector(".queryAll, .tealBg");
seventh.forEach((item) => {
  item.style.color = "black";
  item.style.padding = "10px";
  item.style.backgroundColor = "#D35400";
  item.style.fontSize = "23px";
});
