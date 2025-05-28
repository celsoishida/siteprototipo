// Função para mostrar saudação
function mostrarSaudacao() {
    // Obtém o valor do input
    const nome = document.getElementById('nome').value;
    
    // Verifica se o nome foi preenchido
    if (nome.trim() === '') {
        document.getElementById('resultado').textContent = 'Por favor, digite seu nome!';
        return;
    }
    
    // Cria a mensagem
    const saudacao = "Bem-vindo(a)";
    const mensagem = saudacao + " " + nome + "!";
    
    // Exibe a mensagem no parágrafo
    document.getElementById('resultado').textContent = mensagem;
}
