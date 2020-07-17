// const URL = "api/ron/quotes";
const URL = "/api/ron/quotes";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#ron").addEventListener("click", getRon);
});

function getRon(ev) {
  ev.preventDefault();
  console.log("Gettin Ron quote...");

  fetch(URL)
    .then((res) => res.json())
    .then((content) => {
      console.log(`Content: ${content}`);
      let main = document.querySelector("main");
      main.innerHTML = `<h2>${content[0]}</h2>`;
    })
    .catch((err) => console.error);
}
