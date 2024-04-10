const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');

let numeroDoCapitulo = document.getElementById('capitulo');



const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


function tocarFaixa(){
   audioCapitulo.play();
   botaoPlayPause.classList.remove('bi-play-circle');
   botaoPlayPause.classList.add('bi-pause-circle');
}
function pausarFaixa() {
    audioCapitulo.pause(); 
    botaoPlayPause.classList.add('bi-play-circle');
    botaoPlayPause.classList.remove('bi-pause-circle');
}

function trocarNomeFaixa(){
    numeroDoCapitulo.innerHTML= "Capítulo " + capituloAtual;
}

botaoPlayPause.addEventListener('click', () => {
    if ( taTocando === 0 ) {
        tocarFaixa();
        taTocando = 1;
        //botaoPlayPause.innerHTML='<i class="bi bi-pause-circle"></i>'
    }
    else {
        pausarFaixa();
        //botaoPlayPause.innerHTML='<i bi bi-play-circle"></i>'
        taTocando = 0;
    }
});

botaoAvancar.addEventListener('click', () => {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else{
        capituloAtual +=1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
});

botaoAnterior.addEventListener('click', () => {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else{
        capituloAtual -= 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}
);

