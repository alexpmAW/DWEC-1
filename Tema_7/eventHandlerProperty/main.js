const btn = document.querySelector("button"); //This function will modify the text of the h4 tag
const changeContent = () => {
  const h4 = document.querySelector(".heading4");
  h4.textContent = "Wow we did it! The content is changed";
};

btn.onclick = changeContent;
