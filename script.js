// Função para fechar todos os cards abertos
function fecharTodosOsCards() {
    document.querySelectorAll('.flip-card').forEach(card => {
        card.classList.remove('flip');
    });
}

// Adiciona evento de flip ao clicar no botão "Clique-me" e ao clicar no card
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function (event) {
        event.stopPropagation(); // Previne a propagação do clique
        if (!this.classList.contains('flip')) { // Verifica se o card já está aberto
            fecharTodosOsCards(); // Fecha todos os cards abertos
            this.classList.add('flip'); // Abre o card atual
        }
    });
});

// Adiciona evento para fechar o flip ao clicar no botão "X"
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        this.closest('.flip-card').classList.remove('flip');
    });
});

// Função para redirecionar o usuário para uma nova URL
function redirecionar(url) {
    window.location.href = url;
}
