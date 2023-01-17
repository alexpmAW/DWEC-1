document.addEventListener("DOMContentLoaded", function () {
  const req = new XMLHttpRequest();
  var container = document.querySelector("#container");

  fetch('http://localhost:18000/accounts')
    .then((response) => response.json())
    .then((data) => {
      data.forEach(element => {
        const divSuperior = document.createElement("div");
        divSuperior.classList.add("card", "d-flex", "text-center",
          "w-50", "m-auto", "bg-light", "mt-3");

        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = "Coche"
        divCardBody.appendChild(cardTitle);

        for (let x in element) {
          if (x === "_id") {
            continue
          }
          const property = document.createElement("p");
          property.classList.add("card-text");
          x === "name" ? property.textContent = `${x} ${element[x].first} ${element[x].last} ` :
            property.textContent = `${x} ${element[x]}`
          divCardBody.appendChild(property);
        }
        divSuperior.appendChild(divCardBody);
        container.appendChild(divSuperior);
      });
    });
});
