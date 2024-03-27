// Função Nomeada
function greet(name) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>" + greet.name + ": Bom Dia, " + name + "!</p>";
}
greet("Pietro"); // Chamando a função com um argumento

// Função com argumento e retorno
function square(number) {
    return number * number;
}
const resultSquare = square(12);
const outputDiv = document.getElementById('output');
outputDiv.innerHTML += "<p>" + square.name + ": O quadrado de 12 é: " + resultSquare + "</p>";

// Função com Construtor
const multiply = new Function('x', 'y', 'return x * y');
const product = multiply(6, 9);
outputDiv.innerHTML += "<p>" + multiply.name + ":Multiplicar 6 por 9 é: " + product + "</p>";

// Função Literal (variável)
const greetLiteral = function (name) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>Função Literal: Eae," + name + "!</p>";
};
greetLiteral("Professor"); // Chamando a função literal com um argumento

// Função de Flecha (Arrow functions)
const greetArrow = (name) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>Função de Flecha: Olá," + name + "!</p>";
};
greetArrow("Mundo"); // Chamando a função de flecha com um argumento