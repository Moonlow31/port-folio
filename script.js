const lights = document.querySelector("#switchButton");
const body = document.querySelector("body")

lights.addEventListener("click", () => {
    body.classList.toggle("switchLights");
});