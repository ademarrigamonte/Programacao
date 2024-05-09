var nome = window.prompt("Qual é seu nome?")
window.alert("É um prazer te conhecer, " + nome + "!")

var d = window.document.getElementById("name")
d.innerText = nome

document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value;
    alert('Você pesquisou por: ' + searchTerm);
    // Aqui você pode adicionar a lógica para enviar a busca para um servidor, etc.
});
// Seleciona todos os elementos com a classe 'buy-button'
var buttons = document.getElementsByClassName('buy-button');

// Adiciona um ouvinte de eventos de clique a cada botão
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert('O produto foi adicionado ao carrinho.');
    });
}
// Seleciona o botão de compra
var buyButton = document.querySelector('.buy-button');

// Seleciona o overlay
var overlay = document.getElementById('overlay');

// Adiciona um ouvinte de eventos de clique ao botão de compra
buyButton.addEventListener('click', function() {
    // Exibe o overlay
    overlay.style.display = 'block';
});
// Seleciona todas as imagens com a classe 'imagem'
var imagens = document.querySelectorAll('.imagem');

// Adiciona um ouvinte de eventos de mouseover e mouseout a cada imagem
imagens.forEach(function(imagem) {
    // Salva o src original da imagem
    var srcOriginal = imagem.src;
    
    // Obtém o src da imagem hover do atributo data-hover
    var srcHover = imagem.getAttribute('data-hover');
    
    // Adiciona um ouvinte de eventos de mouseover
    imagem.addEventListener('mouseover', function() {
        imagem.src = srcHover;
    });
    
    // Adiciona um ouvinte de eventos de mouseout
    imagem.addEventListener('mouseout', function() {
        imagem.src = srcOriginal;
    });
});