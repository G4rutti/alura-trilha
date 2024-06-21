const btnInciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");
const tirarFotoCanvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

btnInciarCamera.addEventListener('click', async(e) => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    });

    btnInciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

tirarFoto.addEventListener('click', () => {
    tirarFotoCanvas.getContext('2d').drawImage(video, 0,0,tirarFotoCanvas.width, tirarFotoCanvas.height);
    let imagemURL = tirarFotoCanvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFoto.addEventListener('click', () => {
    let imagemURL = "";
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = '../pages/abrir-conta-form-3.html';
})