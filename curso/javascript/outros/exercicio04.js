// Solicita a idade do usuário
const idadeTexto = prompt("Digite sua idade:");

// Converte a entrada (string) para número inteiro
const idade = parseInt(idadeTexto);

// Verifica se a conversão deu certo
if (isNaN(idade)) {
  alert("Por favor, digite um número válido.");
} else {
  // Estrutura condicional para verificar maioridade
  if (idade >= 18) {
    alert("Você é maior de idade.");
  } else {
    alert("Você é menor de idade.");
  }
}
