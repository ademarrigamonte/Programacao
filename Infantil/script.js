// Seleciona o elemento de fundo
var background = document.querySelector('.background');

// Adiciona um ouvinte de eventos de rolagem à janela
window.addEventListener('scroll', function() {
    // Obtém o deslocamento vertical da página
    var scrollPosition = window.pageYOffset;
    
    // Define a posição vertical do fundo com base no deslocamento
    background.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px'; // Ajuste o valor 0.5 para controlar a velocidade do movimento
});
// Seleciona o botão de compra e a superfície de confirmação
var buyButton = document.getElementById('buy-button');
var overlay = document.getElementById('overlay');
var confirmButton = document.getElementById('confirm-button');
var cancelButton = document.getElementById('cancel-button');

// Adiciona um ouvinte de eventos de clique ao botão de compra
buyButton.addEventListener('click', function() {
    // Exibe a superfície de confirmação
    overlay.style.display = 'flex';
});

// Adiciona um ouvinte de eventos de clique ao botão de confirmação
confirmButton.addEventListener('click', function() {
    // Simula a ação de compra
    alert('Compra confirmada!');

    // Esconde a superfície de confirmação
    overlay.style.display = 'none';
});

// Adiciona um ouvinte de eventos de clique ao botão de cancelamento
cancelButton.addEventListener('click', function() {
    // Esconde a superfície de confirmação
    overlay.style.display = 'none';
});