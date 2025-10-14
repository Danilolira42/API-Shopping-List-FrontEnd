const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.getElementById("input");
const newText = document.createElement("p");
let currencyValue = "";
let listObjects = [];
const selectAllInput = document.getElementById("selectAllInput");
const allElements = document.getElementById("allElements");
let isOpenEvent = false;

//Validação para ver se este item já existe na lista de compras.
function Validate(listObjects) {

    const object = listObjects.map(item => item.textContent);
    const validate = object.includes(currencyValue);

    return validate;
}

//Validação se input está com evento aberto. 
function isOpen(isOpenEvent) {
    return isOpenEvent;
}


//Envio do formulário
form.onsubmit = (event) => {
    event.preventDefault();

    if (isOpen(isOpenEvent) == true) {

        const footer = document.querySelector("footer");

        newText.textContent = "Salve antes de adicionar outro item!";
        newText.style.margin = 0;

        footer.appendChild(newText);

        footer.classList.add("transitionError");

        setTimeout(() => {

            footer.classList.remove("transitionError");

        }, 2000);

        footer.style.display = "flex";
        return;
    }

    //Validação de entrada de dados!
    if (input.value === "") {

        const footer = document.querySelector("footer");

        newText.textContent = "Digite um produto válido!";
        newText.style.margin = 0;

        footer.appendChild(newText);

        footer.classList.add("transitionError");

        setTimeout(() => {

            footer.classList.remove("transitionError");

        }, 2000);

        footer.style.display = "flex";

    } else if (input.value.length > 15) {

        const footer = document.querySelector("footer");

        newText.textContent = "Digite apenas um produto!";
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
        const iconsDiv = document.createElement("div");
        const newIconTrash = document.createElement("i");
        const newIconPencil = document.createElement("i");

        /* Regex para deixar a primeira letra maiúscula*/

        const regex = /\D+/g;
        const regexNumber = /\d+/g;
        const replace = String(input.value.match(regex)).trim();
        const changes = replace.toString().toLowerCase();
        const firstCharacter = changes.charAt(0);
        const upperCharacter = firstCharacter.toString().toUpperCase();

        //Validação para ver se o usuário digita a quantidade.

        if (input.value.match(regexNumber) == null) {
            const footer = document.querySelector("footer");

            newText.textContent = "Digite uma quantidade em número!";
            newText.style.margin = 0;

            footer.appendChild(newText);

            footer.classList.add("transitionError");

            setTimeout(() => {

                footer.classList.remove("transitionError");

            }, 2000);

            footer.style.display = "flex";
            return;
        }
        
        let newString = String(input.value.match(regexNumber) + " " + changes.replace(changes.charAt(0), upperCharacter));

        newInput.type = "checkbox";
        newInput.style.cursor = "pointer";

        newLabel.appendChild(newInput)

        let textNode = document.createTextNode(newString);

        newLabel.appendChild(textNode);
        newLabel.classList.add("newLabel");

        newItem.appendChild(newLabel);

        newIconPencil.classList.add("bi", "bi-pencil");

        //Adiciona input para editar o que foi digitado anteriormente.
        newIconPencil.onclick = (event) => {

            isOpenEvent = event.isTrusted;

            isOpen(isOpenEvent);

            let newInputPencil = document.createElement("input");
            newInputPencil.classList.add("newInputPencil");

            newInputPencil.value = textNode.textContent;

            newLabel.removeChild(textNode);
            console.log(newLabel);

            const save = document.createElement("button");
            save.setAttribute("alt", "Botão Salvar");
            save.textContent = "Salvar";
            save.classList.add("save");

            newLabel.append(newInputPencil, save);

            save.onclick = (event) => {
                event.preventDefault();

                isOpenEvent = false;

                isOpen(isOpenEvent);

                if (newInputPencil.value == "") {

                    const footer = document.querySelector("footer");

                    newText.textContent = "Digite um valor antes de salvar!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 2000);

                    footer.style.display = "flex";

                    return;
                }

                const regex = /\D+/g;
                const regexNumber = /\d+/g;
                const replace = String(newInputPencil.value.match(regex)).trim();
                const changes = replace.toString().toLowerCase();
                const firstCharacter = changes.charAt(0);
                const upperCharacter = firstCharacter.toString().toUpperCase();

                //Validação para ver se o usuário digita a quantidade.

                if (newInputPencil.value.match(regexNumber) == null) {
                    const footer = document.querySelector("footer");

                    newText.textContent = "Digite uma quantidade em número!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 2000);

                    footer.style.display = "flex";
                    return;
                }

                let newString = newInputPencil.value.match(regexNumber) + " " + changes.replace(changes.charAt(0), upperCharacter);

                newLabel.removeChild(newInputPencil);
                newLabel.removeChild(save);

                textNode = document.createTextNode(newString);

                newLabel.appendChild(textNode);

                newLabel.appendChild(textNode);

                const footer = document.querySelector("footer");

                newText.textContent = "Item(s) salvo(s) com sucesso!";
                newText.style.margin = 0;

                footer.appendChild(newText);

                footer.classList.add("transitionSuccess");

                setTimeout(() => {
                    footer.classList.remove("transitionSuccess");
                }, 1000);
            }
        }

        newIconTrash.classList.add("hgi", "hgi-stroke", "hgi-delete-02");

        iconsDiv.classList.add("divIcons");
        iconsDiv.append(newIconPencil, newIconTrash);

        newItem.append(iconsDiv);

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

            //POST
            async function Post(url, body) {
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    })
                    if (!response.ok) throw new Error("Erro na requisição");

                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error("Erro na requisição", error)
                }
            }

            const newProduct = {
                productID: 0,
                productName: newItem.textContent
            }

            const created = Post("https://localhost:7172/ShoppingProducts/AddProduct", newProduct)

            list.appendChild(newItem); //Adiciona o novo elemento à lista.

            //Adiciona o footer de item adicionado.
            const footer = document.querySelector("footer");

            newText.textContent = "Item adicionado com sucesso!";
            newText.style.margin = 0;

            setTimeout(() => {

                //GET
                async function Get(url) {
                    try {

                        const response = await fetch(url);

                        if (!response.ok) throw new Error("Erro ao buscar os dados!");

                        const data = await response.json();

                        return data;
                    } catch (error) {

                        console.error("Erro ao solicitar os dados: ", error);
                    }
                }

                Get("https://localhost:7172/ShoppingProducts").then(response => {
                    const products = response.map(element => {
                        return {
                            productID: element.productID,
                            productName: element.productName
                        }
                    });
                })
            }, 3000)

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

                    newText.textContent = "Clique em Selecionar todos!";
                    newText.style.margin = 0;

                    footer.appendChild(newText);

                    footer.classList.add("transitionError");

                    setTimeout(() => {

                        footer.classList.remove("transitionError");

                    }, 1000)

                } else {

                    listObjects.forEach(element => {

                        element.remove()

                        const footer = document.querySelector("footer");

                        newText.textContent = "Item(s) removido(s) com sucesso!";
                        newText.style.margin = 0;

                        footer.appendChild(newText);

                        newItem.classList.add("transparent");

                        footer.classList.add("transitionSuccess");

                        setTimeout(() => {
                            footer.classList.remove("transitionSuccess");
                            ul.classList.add("empty");
                        }, 800);

                        //Reseta os itens da lista.
                        const index = listObjects.indexOf(element);
                        isOpenEvent = false;

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

            //Function para remover itens da lista.
            newIconTrash.onclick = () => {

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