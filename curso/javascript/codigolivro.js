
console.log( 'Esta mensagem aparecerá no console do navegador');
// comentários aparecem depois de duas barras
console.log( 'Os comentários são ignorados pelo compilador de JavaScript');
/* quando precisar comentar mais de uma linha, 
use barra e asterisco no início e asterisco e barra no final */

{
let sobrenome = "Ishida"; // variável do tipo string
let idade = 20; // variável do tipo número
let mensagem = 'Navegando e sempre programando!'; 
let numeros = [10, 30, 40]; // variável do tipo array (vetor)
let conjunto = {nome: "Silva", idade: 30}; // variável do tipo objeto
}
{
let sobrenome, idade, mensagem;
sobrenome = "Ishida";
idade = 20;
mensagem = 'Navegando e sempre programando!'; 
let numeros, conjunto;
numeros = [10, 30, 40];
conjunto = {nome: "Silva", idade: 30};
}

{
let sobrenome = "Ishida", idade = 20, mensagem = 'Outra!', numeros = [10, 30, 40], conjunto = {nome: "Silva", idade: 30};
sobrenome = 1
sobrenome = "ontem"
sobrenome += 2
console.log(sobrenome)
}

{
let contador = 1
console.log( 'Valor de contador: ' + contador)
contador = contador + 1
console.log( 'Valor de contador: ' + contador)
contador++
console.log( 'Valor de contador: ' + contador)
contador += 1
console.log( 'Valor de contador: ' + contador)
}
{
// Usando let (variável que pode ser reatribuída)
let contador = 0;
contador = contador + 1;

// Usando const (variável constante, não pode ser reatribuída)
const gravidade = 9.8;
// gravidade = 10; // Isso geraria um erro

// Usando var (escopo de função, menos recomendado em código moderno)
var mensagemVar = "Usando var";
mensagemVar += ' para variáveis globais '
}
{
let num1 = 10;
let num2 = 5;

// Operadores Aritméticos
let soma = num1 + num2; // 15
let subtracao = num1 - num2; // 5
let multiplicacao = num1 * num2; // 50
let divisao = num1 / num2; // 2
let resto = num1 % num2; // 0

// Operadores de Atribuição
let valor = 10;
valor += 5; // valor agora é 15
valor -= 2; // valor agora é 13

// Operadores de Comparação (retornam booleanos)
let igual = (num1 == num2); // false (comparação de valor)
let igualEstrito = (num1 === "10"); // false (comparação de valor e tipo)
let maiorQue = (num1 > num2); // true

// Operadores Lógicos
let condicao1 = true;
let condicao2 = false;
let e = (condicao1 && condicao2); // false (AND)
let ou = (condicao1 || condicao2); // true (OR)
let nao = (!condicao1); // false (NOT)

}