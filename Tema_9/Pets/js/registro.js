import Tags from "./tags.js";
Tags.init();

document.addEventListener("DOMContentLoaded",  function () {
  load();
});

async function load()
{
  const form = document.querySelector('#form');
  form.addEventListener('submit', async event => {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  } else {
    const categoria = document.querySelector("#validationCustom01").value;
    const dogName = document.querySelector("#validationCustom02").value;
    const tags = "noTags jaja"

    const pet = {
      category: {
        name: categoria
      },
      name: dogName,
      tags: [
        {
          name: tags
        }
      ],
      status: "available"
    };
    const data = await postData('https://petstore.swagger.io/v2/pet', pet)
    console.log(data);
  }
    form.classList.add('was-validated')
  })
}

// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

