// Declaração das variáveis numéricas
const numero1 = 10;
const numero2 = 5;

// Cálculos
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

// Exibição dos resultados no console
console.log(`Números: ${numero1} e ${numero2}`);
console.log(`A soma é: ${soma}`);
console.log(`A subtração é: ${subtracao}`);
console.log(`A multiplicação é: ${multiplicacao}`);
console.log(`A divisão é: ${divisao}`);

// Função para exibir os resultados na página HTML
function exibirResultados() {
    const resultadoDiv = document.getElementById('resultados');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = `
            <h3>Resultados para os números ${numero1} e ${numero2}:</h3>
            <p>A soma é: ${soma}</p>
            <p>A subtração é: ${subtracao}</p>
            <p>A multiplicação é: ${multiplicacao}</p>
            <p>A divisão é: ${divisao}</p>
        `;
    }
}

// Executa a função quando a página carregar
if (typeof document !== 'undefined') {
    window.onload = exibirResultados;
}
