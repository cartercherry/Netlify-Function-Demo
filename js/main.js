// const URL = "api/ron/quotes";
const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#ron").addEventListener("click", getRon);
});

function getRon(ev) {
  ev.preventDefault();
  console.log("Getting Ron quote...");
  fetch(URL)
    .then((res) => resp.json())
    .then((content) => {
      let main = document.querySelector("main");
      main.innerHTML = `<h2>${content[0]}</h2>`;
    })
    .catch((err) => console.error);
}
