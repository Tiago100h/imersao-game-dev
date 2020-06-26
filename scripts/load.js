function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    fonteTelaInicial = loadFont('assets/fonteTelaInicial.otf');
    fita = loadJSON('fita/fita.json');
}