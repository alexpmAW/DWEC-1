//Direccion hacia abajo
const menuList = document.querySelector(".menu");
const menuItems = menuList.children;
const firstHTMLCollectionItem = menuItems[0];
const secondHTMLCollectionItem = menuItems[1];
const thirdHTMLCollectionItem = menuItems[2];
console.log("HTML Collection nth-items");
console.log(firstHTMLCollectionItem);
console.log(secondHTMLCollectionItem);
console.log(thirdHTMLCollectionItem);
//nth-child from NodeList
const links = document.querySelectorAll(".link");
const firstNodeListItem = links[0];
const secondNodeListItem = links[1];
const thirdNodeListItem = links[2];
const fourthNodeListItem = links[3];
const fifthNodeListItem = links[4];
console.log("NodeList nth-items");
console.log(firstNodeListItem);
console.log(secondNodeListItem);
console.log(thirdNodeListItem);
console.log(fourthNodeListItem);
console.log(fifthNodeListItem);

//Recorrer DOM hacia arriba
const galleryTitle = document.querySelector(".gallery__description");
const parentEl = galleryTitle.parentElement;
console.log(parentEl); //<div class="gallery"> ... </div>

const aHref = document.querySelector("a");
const theClosest = aHref.closest(".menu1");
console.log(theClosest); // <ul class="menu1"> ... </ul>
