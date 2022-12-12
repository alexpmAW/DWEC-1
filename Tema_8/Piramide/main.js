document.addEventListener("DOMContentLoaded", function () {
  const randomNumber = Math.ceil(Math.random() * 20);
  generatePyramid(randomNumber);
});

async function generatePyramid(num) {
  const painElement = document.querySelector("#pain");
  for (let i = num; i >= 0; i--) {
    const row = document.createElement("div");
    const node = document.createAttribute("class");
    node.value = "row";
    row.attributes.setNamedItem(node);
    for (let j = 0; j < i; j++) {
      row.appendChild(createButton(row, num, i));
    }
    painElement.prepend(row);
    await sleep(300);
  }
}

function createButton(appendElement, num, i) {
  const square = document.createElement("div");
  const node = document.createAttribute("class");
  node.value = "square";
  square.attributes.setNamedItem(node);
  square.style.width = `${((100 - num / 2) / num).toFixed(2)}vw`;
  square.style.height = `${((100 - num / 2) / num).toFixed(2)}vh`;
  square.addEventListener("click", function (event) {
    const deepClone = event.target.cloneNode(true);
    deepClone.style.visibility = "hidden";
    event.target.classList.add("square_hide");
    appendElement.insertBefore(deepClone, event.target);
  });
  appendElement.appendChild(square);
  return square;
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
