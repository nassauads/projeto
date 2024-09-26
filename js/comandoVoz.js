// Função que apenas ativa o comando de voz
function falarInstrucao(texto) {
    const sintese = window.speechSynthesis;
    const mensagem = new SpeechSynthesisUtterance(texto);
    mensagem.lang = 'pt-BR'; // Define o idioma para português do Brasil
    mensagem.rate = 1; // Ajusta a velocidade da fala
    mensagem.pitch = 1; // Ajusta o tom da voz
    mensagem.volume = 1; // Ajusta o volume

    sintese.speak(mensagem);
}

// Função para iniciar o comando de voz com um atraso
function iniciarComandoVoz(exercicioNome, instrucoes) {
    const texto = `${exercicioNome}. ${instrucoes}`;
    
    // Adiciona um atraso de 500ms para garantir que o flip ocorra primeiro
    setTimeout(() => {
        falarInstrucao(texto);
    }, 500); // O tempo pode ser ajustado conforme necessário
}

// Função para pegar as instruções e acionar o comando de voz após o flip
function adicionarComandoVozNoExercicio(button) {
    // Pegando o nome do exercício e as instruções
    const exercicioNome = button.closest('.flip-cards-front').querySelector('h3').textContent;
    const instrucoes = button.closest('.flip-cards-front').querySelector('p').textContent;

    // Chamando a função para iniciar o comando de voz com atraso
    iniciarComandoVoz(exercicioNome, instrucoes);
}
