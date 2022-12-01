const getUl = document.querySelector("ul");
console.log(getUl.childNodes);
console.log(getUl.children);

//podemos acceder como su fuera un array
getUl.children[0].style.backgroundColor = "lightblue";

//podemos hacer un for
for (let i = 0; i < getUl.children.length; i++) {
  console.log(getUl.children[i]);
}

const headinElement = document.querySelector("h2");
console.log(headinElement.previousSibling);
console.log(headinElement.previousSibling.previousSibling);
