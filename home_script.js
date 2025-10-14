const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("invalid", function (event) {
    event.preventDefault()

    const alert = document.createElement("span");
    const footer = document.getElementById("footer");

    alert.textContent = "Por favor, insira um e-mail válido!";

    footer.classList.add("Email");
    footer.classList.add("invalidEmail");

    footer.appendChild(alert);

    setTimeout(() => {

        footer.removeChild(alert);
        footer.classList.remove("Email");
        footer.classList.add("invalidEmail");

        alert.textContent = "";
    }, 1000);

    console.log(alert)

})

password.addEventListener("invalid", function (event) {
    event.preventDefault()

    const alert = document.createElement("span")
    alert.textContent = "Senha inválida!"

    console.log(alert)
})