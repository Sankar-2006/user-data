const storeName = document.querySelector(".userName").value;
const StoreEmail = document.querySelector(".userEmail").value;
const storeButton = document.querySelector(".submitDataBtn");
const load = document.querySelector(".load");
const loadName = document.querySelector(".loadName");
const loadEmail = document.querySelector(".loadEmail");
const loadButton = document.querySelector(".loadDataBtn");
const result = document.querySelector(".result");
const responseName = document.querySelector(".responseName");
const responseEmail = document.querySelector(".responseEmail");

storeButton.addEventListener("click", async () => {

  const data = {
    name: storeName,
    email: StoreEmail,
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

loadButton.addEventListener("click", async () => {
  const data = {
    name: loadName.value,
    email: loadEmail.value,
  };

  const response = await fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resultData = await response.json();
  responseName.innerText = resultData.name;
  responseEmail.innerText = resultData.email;
  load.style.display = "none";
  result.style.display = "block";
});