// Validação Nome
let nomeInput = document.getElementById("name");
let nomeLabel = document.querySelector('label[for="name"]');
let nomeHelper = document.getElementById("name-helper");

nomeInput.addEventListener("focus", () => {
    nomeLabel.classList.add("required-popup")
})

nomeInput.addEventListener("blur", () => {
    nomeLabel.classList.remove("required-popup")
})


nomeInput.addEventListener("change", (e) => { 
    if(e.target.value.length <= 10 || e.target.value.length == 0){
        nomeInput.classList.add("error")
        nomeInput.classList.remove("correct")
        nomeHelper.classList.add("visible")

    }else{
        nomeInput.classList.add("correct")
        nomeInput.classList.remove("error")
        nomeHelper.classList.remove("visible")

    }
})
//----------------------------------------------------

//-------------------------------------------------------------------------------

// // Validação email
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup")
})

emailInput.addEventListener("blur", () => {
    emailLabel.classList.remove("required-popup")
})


emailInput.addEventListener("change", (e) => { 
    if(e.target.value.includes("@") && e.target.value.includes(".com")){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")

    }else{
        emailInput.classList.add("error")
        emailInput.classList.remove("correct")
        emailHelper.classList.add("visible")

    }
})

//-------------------------------------------------------------------------------

// // Validação nascimento
let nascInput = document.getElementById("birthdate")
let nascLabel = document.querySelector('label[for="birthdate"]')
let nascHelper = document.getElementById("birthdate-helper")

nascInput.addEventListener("focus", () => {
    nascLabel.classList.add("required-popup")
})

nascInput.addEventListener("blur", () => {
    nascLabel.classList.remove("required-popup")
})


nascInput.addEventListener("change", (e) => { 
    if((new Date().getFullYear() - new Date(nascInput.value).getFullYear()) >= 20){
        nascInput.classList.add("error")
        nascInput.classList.remove("correct")
        nascHelper.classList.add("visible")

    }else{
        nascInput.classList.remove("error")
        nascInput.classList.add("correct")
        nascHelper.classList.remove("visible")

    }
})
