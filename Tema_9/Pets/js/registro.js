import Tags from "./tags.js";
Tags.init();

document.addEventListener("DOMContentLoaded", async function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const form = document.querySelector('#form')

  form.addEventListener('submit', async (event) => {

    form.classList.add('was-validated')
    event.preventDefault()
    event.stopPropagation()

    if (!form.checkValidity()) {
      return;
    }
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
    const data = await postData('https://petstore.swagger.io/v2/pet', pet);
    console.log(data);
    form.submit();
  }, false);
});

// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(error => {
    {
      new bootstrap.Modal(document.getElementById('exampleModal')).show();
      console.log(error)
    }
  })
    .then(response => response.json());
}

