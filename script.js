const storeName = document.querySelector(".userName");
const storeEmail = document.querySelector(".userEmail");
const storeButton = document.querySelector(".submitDataBtn");
const load = document.querySelector(".load");
const loadName = document.querySelector(".loadName");
const loadButton = document.querySelector(".loadDataBtn");
const result = document.querySelector(".result");
const responseName = document.querySelector(".responseName");
const responseEmail = document.querySelector(".responseEmail");

storeButton.addEventListener("click", async () => {

  const data = {
    name: storeName.value,
    email: storeEmail.value,
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
  const name = loadName.value;

  const response = await fetch(`http://localhost:8080/?name=${encodeURIComponent(name)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resultData = await response.json();
  responseName.innerText = resultData.name;
  responseEmail.innerText = resultData.email;
  load.style.display = "none";
  result.style.display = "block";
});