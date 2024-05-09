// Solicita ao usuário para inserir uma variável usando um prompt
var userInput = prompt("Digite algo:");

// Seleciona o elemento div
var centeredText = document.getElementById("centered-text");

// Define o conteúdo do elemento div com a variável digitada pelo usuário
centeredText.textContent = userInput;

var nome = window.prompt("Qual é seu nome?")
const termoBuscaMaiuscula = nome.toLocaleLowerCase();
window.alert("É um prazer te conhecer, " + termoBuscaMaiuscula + "!")

var d = window.document.getElementById("name")
d.innerText = nome

document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value;
    alert('Você pesquisou por: ' + searchTerm);
    // Aqui você pode adicionar a lógica para enviar a busca para um servidor, etc.
});
document.getElementById('buy-button').addEventListener('click', function() {
    alert('O produto foi adicionado ao carrinho.');
    // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho de compras, etc.
});
