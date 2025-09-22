
const form = document.querySelector("form");

const list = document.querySelector("ul");

const input = document.getElementById("input");

form.onsubmit = (event) => {

    event.preventDefault()

    const newItem = document.createElement("li");
    const newLabel = document.createElement("label");
    const newSpan = document.createElement("span");
    const newInput = document.createElement("input");
    const newIcon = document.createElement("i");

    newLabel.textContent = input.value;

    console.log(newLabel)

    input.value = "";
};
