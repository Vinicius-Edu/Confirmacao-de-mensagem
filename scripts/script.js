// Função simples para interação na página inicial
function mostrarMensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão! 🎉";
}

// Validação do formulário
function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  const regexNome = /^[A-Za-zÀ-ÿ ]+$/;
  if (!regexNome.test(nome)) {
    alert("O nome deve conter apenas letras.");
    return false;
  }

  if (idade < 10 || idade > 100) {
    alert("A idade deve estar entre 10 e 100 anos.");
    return false;
  }

  if (mensagem.length < 10) {
    alert("A mensagem deve ter pelo menos 10 caracteres.");
    return false;
  }

  return true; // Envia o formulário se estiver tudo certo
}

// Captura dados enviados via GET e exibe na página formAction.html
window.onload = function () {
  if (window.location.pathname.endsWith("formAction.html")) {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const email = params.get("email");
    const idade = params.get("idade");
    const mensagem = params.get("mensagem");

    const div = document.getElementById("dados");
    div.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Idade:</strong> ${idade}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
  }
};
