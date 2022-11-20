console.log("Hello!")

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let backgroundName = document.querySelector(".backgroundName");
let PepinieraZnaczenie = document.querySelector(".PepinieraZnaczenie")

button.addEventListener("click", () => {
    body.classList.toggle("bodyDark")
    backgroundName.innerText = body.classList.contains("bodyDark") ? "Jaśniejsze" : "Ciemniejsze";
});