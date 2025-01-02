// Seleciona os elementos do formulário
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const loginButton = form.querySelector(".btn-login");

// Função para validar os campos do formulário
function validateForm(event) {
  event.preventDefault(); // Previne o envio do formulário

  let isValid = true;

  inputs.forEach((input) => {
    // Remove mensagens de erro anteriores
    input.classList.remove("error");

    // Verifica se o campo está vazio
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    }
  });

  if (isValid) {
    // Simula o login
    alert("Login realizado com sucesso!");
    form.reset(); // Reseta o formulário
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Adiciona evento de clique no botão de login
loginButton.addEventListener("click", validateForm);

// Estilização de campos inválidos
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim()) {
      input.classList.remove("error");
    }
  });
});
