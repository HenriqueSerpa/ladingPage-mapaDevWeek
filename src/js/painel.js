const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

const totalDeImagens = imagensPainel.length - 1;
let imagemAtual = 0;

function trocarImagem(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {
    imagemAtual++;

    if (imagemAtual > totalDeImagens) {
        imagemAtual=0;
    }

    trocarImagem();   
});

setaVoltar.addEventListener('click', function() {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual=2;
    }
    
    trocarImagem();
});