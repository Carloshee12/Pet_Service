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
