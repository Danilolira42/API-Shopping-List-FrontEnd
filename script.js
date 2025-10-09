const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.getElementById("input");
const newText = document.createElement("p");
let currencyValue = "";
let listObjects = [];
const selectAllInput = document.getElementById("selectAllInput");
const allElements = document.getElementById("allElements");

//Validação para ver se este item já existe na lista de compras.
function Validate(listObjects) {

    const object = listObjects.map(item => item.textContent);
    const validate = object.includes(currencyValue);

    return validate;
}

form.onsubmit = (event) => {
    event.preventDefault();

    //Validação de entrada de dados!

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

        const validate = Validate(listObjects);

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

            const ul = document.querySelector("ul");

            ul.classList.remove("empty");
            ul.classList.add("contains");

            listObjects.push(newItem); //Adiciona o novo elemento na Lista de Arrays.
            let listHeight = listObjects.length - 1;

            list.appendChild(newItem); //Adiciona o novo elemento à lista.

            //Adiciona o footer de item adicionado.
            const footer = document.querySelector("footer");

            newText.textContent = "Item adicionado com sucesso!";
            newText.style.margin = 0;

            const exportButton = document.getElementById("export");

            exportButton.style.visibility = "visible";

            //Adiciona visibilidade ao selecionar Todos e a Lixeira
            const selectAll = document.getElementById("selectAll");
            const allTrash = document.getElementById("allTrash");

            allTrash.style.visibility = "visible";
            selectAll.style.visibility = "visible";

            //Remove todos os itens da minha lista.
            allTrash.onclick = (event) => {

                console.log(event.target)

                if (selectAllInput.checked == false) {

                    const footer = document.querySelector("footer");

                    newText.textContent = "Selecione a opção de Todos!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 1000)
                } else {
                    console.log(listObjects.length)
                    listObjects.forEach(element => {

                        element.remove()

                        const footer = document.querySelector("footer");

                        newText.textContent = "Item removido com sucesso!";
                        newText.style.margin = 0;

                        footer.appendChild(newText);

                        newItem.classList.add("transparent");

                        footer.classList.add("transitionSuccess");

                        setTimeout(() => {
                            footer.classList.remove("transitionSuccess");
                            ul.classList.add("empty");
                        }, 500);

                        //Reseta os itens da lista.
                        const index = listObjects.indexOf(element);

                        console.log(index)

                        if (index > -1) {
                            listObjects = []
                        }

                        ul.classList.add("empty");
                        exportButton.style.visibility = "hidden";
                        selectAll.style.visibility = "hidden";
                        allElements.style.opacity = 0;
                        selectAllInput.checked = false;
                        noContent.style.visibility = "visible";
                    });
                }
            };

            allElements.style.opacity = 1;

            //Remove o backcard "Sem itens adicionados".
            const noContent = document.getElementById("nocontent");

            noContent.style.visibility = "hidden";

            //Adiciona checked = true em todos os checkBoxes.
            selectAllInput.onclick = () => {
                const allObjects = document.querySelectorAll('input[type="checkbox"]')

                allObjects.forEach(element => {
                    element.checked = selectAllInput.checked
                })
            }

            footer.appendChild(newText);
            footer.style.display = "flex";

            //Adiciona o footer de Item adicionado com sucesso.
            footer.classList.add("transitionSuccess");

            //Aplica uma transparência quando o elemento na lista passar de 5
            if (listHeight >= 5) {
                let transition = listObjects[listHeight];
                transition.classList.add("transparent");

                setTimeout(() => {
                    footer.classList.remove("transitionSuccess");
                    transition.classList.remove("transparent");
                }, 1000);
            }
            setTimeout(() => {
                footer.classList.remove("transitionSuccess");
            }, 1000);

            input.value = "";

            //Function para adicionar os itens na lista.
            newIcon.onclick = () => {

                if (newInput.checked == false) {

                    const footer = document.querySelector("footer");

                    newText.textContent = "Selecione ao menos um item!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 1000);

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
                    }, 1000);

                    //Reseta os itens da lista.
                    const index = listObjects.indexOf(newItem);

                    if (index > -1) {
                        listObjects.splice(index, 1);
                    }

                    //Validação para quando não há elementos na lista.
                    if (listObjects.length == 0) {

                        ul.classList.add("empty");
                        exportButton.style.visibility = "hidden";
                        selectAll.style.visibility = "hidden";
                        allElements.style.opacity = 0;
                        selectAllInput.checked = false;
                        noContent.style.visibility = "visible";
                    }

                    //Aplica uma transparência quando o elemento na lista passar de 5
                    let listHeight = listObjects.length - 1;

                    if (listHeight >= 5) {
                        let transition = listObjects[listHeight];
                        transition.classList.add("transparent");

                        setTimeout(() => {
                            footer.classList.remove("transitionSuccess");
                            transition.classList.remove("transparent");
                        }, 500);
                    }

                    footer.style.display = "flex";
                    newItem.remove()
                }
            }
        }
    }
};