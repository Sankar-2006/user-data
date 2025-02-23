const storeName = document.querySelector(".userName");
const storeEmail = document.querySelector(".userEmail");
const storeButton = document.querySelector(".submitDataBtn");

storeButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (storeName.value === "" || storeEmail.value === "") {
    alert("Please fill in all fields");
    return;
  }
  const data = {
    name: storeName.value,
    email: storeEmail.value,
  };
  try {
    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    alert(result);
  } catch (error) {
    alert("Error saving data");
  }
});
