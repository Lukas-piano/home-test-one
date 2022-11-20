console.log("Hello!")

let button = document.querySelector(".buttonSpace__button");
let body = document.querySelector(".body");
let buttonBackgroundName = document.querySelector(".js-buttonSpace__backgroundName");
let pepinieraMeaning = document.querySelector(".pepinieraMeaning")

button.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    pepinieraMeaning.classList.toggle("pepinieraMeaningDifferend");
    buttonBackgroundName.innerText = body.classList.contains("bodyDark") ? "Jaśniejsze" : "Ciemniejsze";
});