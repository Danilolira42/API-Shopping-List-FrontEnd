
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
    
    const regex = /\D+/g
    
    const replace = input.value.match(regex);

    const changes = replace.toString().toLowerCase();

    const firstCharacter = changes.charAt(0);

    const upperCharacter = firstCharacter.toString().toUpperCase();
    
    const newString = changes.replace(changes.charAt(0), upperCharacter);
    
    newInput.type = "checkbox";
    newItem.appendChild(newInput);
    
    newLabel.textContent = newString;
    newItem.appendChild(newLabel);

    newIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02");
    newItem.appendChild(newIcon);
    

    console.log(newItem)

    list.appendChild(newItem);
    
    input.value = "";
}};
