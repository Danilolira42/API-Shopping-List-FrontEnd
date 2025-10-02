const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.getElementById("input");
const newText = document.createElement("p");
let currencyValue = "";
let listObjects = [];
let newListItem = [];

function Objects(listObjects) {

    const object = listObjects.map(item => item.textContent);
    const validate = object.includes(currencyValue);

    Validate(object);
    return validate;
}

function Validate(object) {

    if (object.includes(currencyValue)) {
        return object.includes(currencyValue);
    }
}

form.onsubmit = (event) => {
    event.preventDefault();

    /*Validação de entrada de dados!*/

    if (input.value === "") {

        const footer = document.querySelector("footer");

        newText.textContent = "Digite ao menos um item!";
        newText.style.margin = 0;

        footer.appendChild(newText);

        footer.classList.add("transitionError");

        setTimeout(() => {

            footer.classList.remove("transitionError");

        }, 2000);

        footer.style.display = "flex";
    }

    else {

        const newItem = document.createElement("li");
        const newLabel = document.createElement("label");
        const newInput = document.createElement("input");
        const newIcon = document.createElement("i");

        /* Regex para deixar a primeira linha maiúscula!*/

        const regex = /\D+/g;
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

        currencyValue = newString;
        console.log(currencyValue);

        const validate = Objects(listObjects);

        if (validate) {
            
            const footer = document.querySelector("footer");

            newText.textContent = "Este item já existe na lista!";
            newText.style.margin = 0;

            footer.appendChild(newText);

            footer.classList.add("transitionError");

            setTimeout(() => {

                footer.classList.remove("transitionError");

            }, 2000);

            footer.style.display = "flex";

            return;

        } else {

            listObjects.push(newItem); //Adiciona o novo elemento na Lista de Arrays.
            let listHeight = listObjects.length - 1;

            list.appendChild(newItem); //Adiciona o novo elemento a lista.

            const footer = document.querySelector("footer");

            newText.textContent = "Item adicionado com sucesso!";
            newText.style.margin = 0;

            footer.appendChild(newText);
            footer.style.display = "flex";

            footer.classList.add("transitionSuccess");

            if (listHeight >= 2) {
                let transition = listObjects[listHeight];
                transition.classList.add("transparent");

                setTimeout(() => {
                    footer.classList.remove("transitionSuccess");
                    transition.classList.remove("transparent");
                }, 1000);
            }
            setTimeout(() => {
                footer.classList.remove("transitionSuccess");
            }, 2000);

            input.value = "";

            newIcon.onclick = () => {

                if (newInput.checked == false) {

                    const footer = document.querySelector("footer");

                    newText.textContent = "Selecione ao menos um item!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 2000);

                    footer.style.display = "flex";

                } else {

                    const footer = document.querySelector("footer");

                    newText.textContent = "Item removido com sucesso!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    newItem.classList.add("transparent");

                    footer.classList.add("transitionSuccess");

                    setTimeout(() => {
                        footer.classList.remove("transitionSuccess");
                        newItem.classList.remove("transparent");
                    }, 2000);

                    if (listHeight >= 2) {
                        let transition = listObjects[listHeight];
                        transition.classList.add("transparent");

                        setTimeout(() => {
                            footer.classList.remove("transitionSuccess");
                            transition.classList.remove("transparent");
                        }, 1000);
                    }

                    footer.style.display = "flex";
                    newItem.remove()
                }
            }
        }
    }
};
