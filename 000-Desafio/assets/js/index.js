const modal = document.getElementById("modal");
const fecharModal = document.getElementById('fecharModal');
const fecharModalBtn = document.querySelector('.swapColor')

const botao = document.querySelectorAll(".cta__botao");

botao[0].addEventListener('click', () => {
    modal.showModal();
})

botao[1].addEventListener('click', () => {
    modal.showModal();
})

fecharModal.addEventListener('click', () => {
    modal.close()
})

fecharModalBtn.addEventListener('click', () => {
    modal.close()
})
