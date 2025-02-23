const load = document.querySelector(".load");
const loadName = document.querySelector(".loadName");
const loadButton = document.querySelector(".loadDataBtn");
const result = document.querySelector(".result");
const responseName = document.querySelector(".responseName");
const responseEmail = document.querySelector(".responseEmail");

loadButton.addEventListener("click", async (e) => {
    e.preventDefault();
    if (loadName.value === "") {
        alert("Please fill in the name field");
        return;
    }
    const name = loadName.value;
    try {
        const response = await fetch(`http://localhost:8080/?name=${encodeURIComponent(name)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resultData = await response.json();
        responseName.textContent = resultData.name;
        responseEmail.textContent = resultData.email;
        result.style.display = "block";
        load.style.display = "none";
    } catch (error) {
        alert("Error getting data");
    }
});
