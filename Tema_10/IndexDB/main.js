import { createDB, getAllCustomers } from "./indexedDB.js";
document.addEventListener("DOMContentLoaded", async function () {
  createDB();
  const data = await getAllCustomers();
  data.forEach((element, index) => {
    const divSuperior = document.createElement("div");
    divSuperior.classList.add("card", "d-flex", "text-center",
      "w-50", "m-auto", "bg-light", "mt-3");

    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `Customer ${index}`
    divCardBody.appendChild(cardTitle);

    for (let x in element) {
      if (x === "id") {
        continue
      }
      const property = document.createElement("p");
      property.classList.add("card-text");
      property.textContent = `${x} ${element[x]} `;
      divCardBody.appendChild(property);
    }
    divSuperior.appendChild(divCardBody);
    container.appendChild(divSuperior);
  });
});
