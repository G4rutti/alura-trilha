const html = document.querySelector("html");
const btn_foco = document.querySelector(".app__card-button--foco");
const btn_curto = document.querySelector(".app__card-button--curto");
const btn_longo = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button")
const img = document.querySelector('.app__image');

const musicaFocoInput = document.getElementById("alternar-musica");
const musica = new Audio('sons/luna-rise-part-one.mp3');
const somStart = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const somBeep = new Audio('sons/beep.mp3');
musica.loop = true;

const startPause = document.getElementById("start-pause");
const startPauseSpan = document.querySelector("#start-pause span");
const imgStartPause = document.querySelector('.app__card-primary-butto-icon')

const timer = document.getElementById("timer")

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

const textoNormal = document.querySelector('.app__title');

btn_foco.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    contextSwap("foco");
    btn_foco.classList.add("active");

})

btn_curto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 5 * 60;
    contextSwap("descanso-curto");
    btn_curto.classList.add("active");

})

btn_longo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 15 * 60;
    contextSwap("descanso-longo");
    btn_longo.classList.add("active");


})


musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})


function contextSwap(variavel) {
    mostrarTempo()
    botoes.forEach((variavel) => {
        variavel.classList.remove("active")
    })
    html.setAttribute('data-contexto', variavel);
    img.setAttribute('src', `imagens/${variavel}.png`);
    switch(variavel){
        case 'foco':
            textoNormal.innerHTML = `
                    Otimize sua produtividade,<br>
                    <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            textoNormal.innerHTML = `
                    Que tal dar uma respirada?<br>
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `

            break;
        case 'descanso-longo':
            textoNormal.innerHTML = `
                    Hora de voltar à superficie.<br>
                    <strong class="app__title-strong">Faça uma pausa longa</strong>
            `
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        // somBeep.play();
        zerar();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

function zerar() {
    clearInterval(intervaloId); 
    startPauseSpan.textContent = "Começar";
    imgStartPause.setAttribute('src', "imagens/play_arrow.png");

    intervaloId = null;
}

function iniciarOuPausar() {
    
    if(intervaloId){
        somPause.play()
        zerar();
        return
    }
    somStart.play();
    startPauseSpan.textContent = "Pausar"
    imgStartPause.setAttribute('src', "imagens/pause.png");
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `
    ${tempoFormatado}
    `
}


mostrarTempo()
startPause.addEventListener('click', iniciarOuPausar);