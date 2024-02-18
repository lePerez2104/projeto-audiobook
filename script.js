// | AULA 01 - AUDIOBOOK |
// Inteligência da página

// localizando elementos pelo seu "Id"
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

// constante armazenando quantidade total de capítulos
const numeroCapitulos = 10;
// variável para a faixa iniciar pausada
let taTocando = 0;
// variável para indicar o capítulo atual
let capituloAtual = 1;

// função para tocar faixa
function tocarFaixa() {
    // áudio começa a tocar
    audioCapitulo.play();
    // botão de play é substituído pelo botão de pause
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

// função para pausar as faixas 
function pausarFaixa() {
    // áudio para de tocar
    audioCapitulo.pause();
    // botão de pause é substituído pelo botão de play
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

// estrutura condicional
function tocarOuPausar() {
    // se não estiver tocando, vai tocar
    

    if(taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    // caso contrário, vai pausar
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

// função para alterar o número do nome do capítulo de acordo com a faixa atual
function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

// função para avançar para a próxima faixa
function proximaFaixa() {
    if(capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        // incrementa um a mais, ou seja, avança mais uma faixa
        capituloAtual = capituloAtual + 1
    }
    
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa()
}

// função para voltar para a faixa anterior
function voltarFaixa() {
    if(capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        // decrementa um a menos, ou seja, volta uma faixa
        capituloAtual = capituloAtual - 1
    }
    
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa() 
}

// evento = interação do usuário com a página que resulta em uma reação
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);