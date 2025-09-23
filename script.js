
const form = document.querySelector("form");

const list = document.querySelector("ul");

const input = document.getElementById("input");

form.onsubmit = (event) => {
    
    event.preventDefault()

    if(input.value === ""){
    
        const footer = document.querySelector("footer");
        const main = document.querySelector("main");

        footer.style.display = "flex";
        console.log(main)

    } else {


    const newItem = document.createElement("li");
    const newLabel = document.createElement("label");
    const newInput = document.createElement("input");
    const newIcon = document.createElement("i");

    
    newInput.type = "checkbox";
    newItem.appendChild(newInput);
    
    newLabel.textContent = input.value;
    newItem.appendChild(newLabel);

    newIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02");
    newItem.appendChild(newIcon);

    list.appendChild(newItem);

    input.value = "";
}};
