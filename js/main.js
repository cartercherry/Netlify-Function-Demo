// const URL = "api/ron/quotes";
const URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#ron").addEventListener("click", getRon);
});

function getRon(ev) {
  ev.preventDefault();
  console.log("Getting Ron quote...");

  fetch(URL)
    .then((res) => {
      res.json();
      console.log(res.json());
    })
    .then((content) => {
      console.log(`Content: ${content}`);
      let main = document.querySelector("main");
      alert("Where is content");
      // main.innerHTML = `<h2>${content[0]}</h2>`;
      main.innerHTML = "DEBUG!";
    })
    .catch((err) => console.error);
}
