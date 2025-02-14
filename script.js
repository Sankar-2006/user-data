const navStore = document.querySelector(".navStore");
const navLoad = document.querySelector(".navLoad");
const store = document.querySelector(".store");
const load = document.querySelector(".load");
const form = document.querySelector(".form");
const button = document.querySelector(".submit");

navStore.addEventListener("click", () => {
  load.style.display = "none";
  store.style.display = "block";
});

navLoad.addEventListener("click", () => {
  store.style.display = "none";
  load.style.display = "block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.querySelector(".userName").value,
    email: document.querySelector(".userEmail").value,
  };
  fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => alert("The data has been sent! :)"))
    .catch(err => {
      alert("Data has not sent :(")
      console.log(err);
    })
});
