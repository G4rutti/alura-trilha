import { clienteService } from "../service/cliente-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

const formulario = document.querySelector("[data-form]");
const inputNome = document.querySelector("[data-nome]");
const inputEmail = document.querySelector('[data-email]');

const cliente = clienteService.clientePorId(id)
.then( data => {
    inputNome.value = data.nome
    inputEmail.value = data.email
}
);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    clienteService.editaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})
