// -------------------------- FUNÇÕES GERAIS ------------------------- //
function togglePopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
// Função para estilizar input correto
function estilizarInputCorreto(input, inputHelper) {
  input.classList.remove("error");
  input.classList.add("correct");
  inputHelper.classList.remove("visible");
}

// Função para estilizar input incorreto
function estilizarInputIncorreto(input, inputHelper) {
  input.classList.remove("correct");
  input.classList.add("error");
  inputHelper.classList.add("visible");
}

// -------------------------- VALIDAÇÃO NOME ------------------------- //
let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel);

nomeInput.addEventListener("input", (e) => {
  let valor = e.target.value;

  if (valor.length < 3) {
    nomeHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(nomeInput, nomeHelper);
  } else {
    estilizarInputCorreto(nomeInput, nomeHelper);
    nomeHelper.innerText = ""; 
  }
});

// -------------------------- VALIDAÇÃO EMAIL ------------------------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

emailInput.addEventListener("input", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    estilizarInputCorreto(emailInput, emailHelper);
    emailHelper.innerText = ""; 
  } else {
    emailHelper.innerText = "Insira um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
});

// -------------------------- VALIDAÇÃO TELEFONE ------------------------- //
let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

togglePopup(telefoneInput, telefoneLabel);

telefoneInput.addEventListener("input", (e) => {
  let valor = e.target.value;

  let telefoneValido = /^\(\d{2}\) 9\d{4}-\d{4}$/.test(valor);

  if (telefoneValido) {
    estilizarInputCorreto(telefoneInput, telefoneHelper);
    telefoneHelper.innerText = ""; 
  } else {
    telefoneHelper.innerText = "Insira um telefone válido. Exemplo: (xx) 9xxxx-xxxx";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
  }
});


