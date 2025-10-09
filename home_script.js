const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("invalid", function (event) {
    event.preventDefault()

    const alert = document.createElement("span")
    alert.textContent = "Por favor, insira um e-mail válido!"
    
    console.log(alert)
})

password.addEventListener("invalid", function (event) {
    event.preventDefault()
    
    const alert = document.createElement("span")
    alert.textContent = "Senha inválida!"
    
    console.log(alert)
})