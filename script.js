const store = document.querySelector(".store");
const load = document.querySelector(".load");
const form = document.querySelector(".form");
const button = document.querySelector(".submit");

button.addEventListener("click", async () => {

  const data = {
    name: document.querySelector(".userName").value,
    email: document.querySelector(".userEmail").value,
  };

  const response = await fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.text();
  alert(result);

});