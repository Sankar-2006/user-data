const store = document.querySelector(".navStore");
const load = document.querySelector(".navLoad");
const button = document.querySelector(".form");

button.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.querySelector(".userName").value,
    email: document.querySelector(".userEmail").value,
  };
  console.log("Submitted");
});
