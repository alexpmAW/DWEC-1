document.addEventListener("DOMContentLoaded", function () {
  mostrarContenido();
});

function mostrarContenido() {
  const btn = document.querySelector("button");
  changeContent = () => {
    const h4 = document.querySelector(".heading4");
    h4.textContent = "Wow we did it! The content is changed";
  };
  btn.addEventListener("click", changeContent);
}
