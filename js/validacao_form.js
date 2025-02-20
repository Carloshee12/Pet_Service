// Validação Nome
let nomeInput = document.getElementById("name")
let nomeLabel = document.querySelector('label[for="name"]')
let nomeHelper = document.getElementById("name-helper")

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


//-------------------------------------------------------------------------------

// // Validação telefone
let phoneInput = document.getElementById("phone")
let phoneLabel = document.querySelector('label[for="phone"]')
let phoneHelper = document.getElementById("phone-helper")

phoneInput.addEventListener("focus", () => {
    phoneLabel.classList.add("required-popup")
})

phoneInput.addEventListener("blur", () => {
    phoneLabel.classList.remove("required-popup")
})

phoneInput.addEventListener("input", function (e) {
    let num = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    num = num.substring(0, 13); // Limita a 13 dígitos
    
    if (num.length > 2) num = `+${num.substring(0, 2)} (${num.substring(2)}`;
    if (num.length > 5) num = `${num.substring(0, 6)}) ${num.substring(6)}`;
    if (num.length > 10) num = `${num.substring(0, 12)}-${num.substring(12)}`;

    e.target.value = num;
});


phoneInput.addEventListener("change", (e) => { 
    if(e.target.value.length < 13){
        phoneInput.classList.add("error")
        phoneInput.classList.remove("correct")
        phoneHelper.classList.add("visible")

    }else{
        phoneInput.classList.remove("error")
        phoneInput.classList.add("correct")
        phoneHelper.classList.remove("visible")

    }
})