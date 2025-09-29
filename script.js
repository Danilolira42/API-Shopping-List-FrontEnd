
const form = document.querySelector("form");

const list = document.querySelector("ul");

const input = document.getElementById("input");

form.onsubmit = (event) => {

    event.preventDefault()

    if (input.value === "") {

        const footer = document.getElementById("invalid-item");
        const main = document.querySelector("main");

        footer.classList.add("failed");

        console.log(main)

        setTimeout(() => {

            footer.classList.remove("failed");

        }, 2000);


    } else {

        const newItem = document.createElement("li");
        const newLabel = document.createElement("label");
        const newInput = document.createElement("input");
        const newIcon = document.createElement("i");

        newInput.checked = false;

        newInput.type = "checkbox";
        newItem.appendChild(newInput);

        newLabel.textContent = input.value;
        newItem.appendChild(newLabel);

        newIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02", "::before");
        newItem.appendChild(newIcon);

        const trash = newIcon;
        const checkBox = newInput

        trash.onclick = () => {

            const itemError = document.getElementById("trash-item")
            console.log(itemError)

            if (checkBox.checked === true) {
                newItem.remove();

                const tookItem = document.getElementById("took-item");
                tookItem.classList.add("success");

                setTimeout(() => {

                    tookItem.classList.remove("success");

                }, 2000);

            } else {

                itemError.classList.add("failed");
                const footer = document.getElementById("invalid-item");

                setTimeout(() => {

                    itemError.classList.remove("failed");

                }, 2000);
            }
        }

        const footer = document.getElementById("success-item")

        footer.classList.add("success")

        setTimeout(() => {

            footer.classList.remove("success");

        }, 2000);

        list.appendChild(newItem);
        input.value = "";
    }

};




