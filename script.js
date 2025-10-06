const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.getElementById("input");
const newText = document.createElement("p");
let currencyValue = "";
let listObjects = [];

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

        /* Regex para deixar a primeira letra maiúscula*/

        const regex = /\D+/g;
        const replace = input.value.match(regex);
        const changes = replace.toString().toLowerCase();
        const firstCharacter = changes.charAt(0);
        const upperCharacter = firstCharacter.toString().toUpperCase();
        const newString = changes.replace(changes.charAt(0), upperCharacter);

        newInput.type = "checkbox";
        newInput.style.cursor = "pointer";

        newLabel.appendChild(newInput)

        newLabel.appendChild(document.createTextNode(newString));
        newLabel.style.display = "flex";
        newLabel.style.gap = "10px";
        newLabel.style.alignItems = "center";
        newLabel.style.cursor = "pointer";

        newItem.appendChild(newLabel);

        newIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02");
        newItem.appendChild(newIcon);

        currencyValue = newString;

        const validate = Objects(listObjects);

        if (validate) {
            console.log(currencyValue)
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

            const ul = document.querySelector("ul");

            ul.classList.remove("empty");
            ul.classList.add("contains");

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

                    const index = listObjects.indexOf(newItem);

                    if (index > -1) {
                        listObjects.splice(index, 1);
                    }

                    if (listObjects.length == 0) {
                        ul.classList.add("empty");
                    }

                    let listHeight = listObjects.length - 1;

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
