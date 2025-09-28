const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.getElementById("input");
const newText = document.createElement("p");

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

        /* Reges para deixar a primeira linha maiúscula!*/

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

        list.appendChild(newItem);

        const footer = document.querySelector("footer");

        newText.textContent = "Item adicionado com sucesso!";
        newText.style.margin = 0;

        footer.appendChild(newText);
        footer.style.display = "flex";

        footer.classList.add("transitionSuccess");

        setTimeout(() => {
            footer.classList.remove("transitionSuccess");
        }, 2000);

        input.value = "";

        let listObjects = [];

        listObjects.push(newItem);

        for (let i = 0; i < listObjects.length; i++) {

            console.log(listObjects[i])
        }

        console.log(listObjects)

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

                footer.style.display = "flex";

                newItem.remove()
            }
        }
    }
};
