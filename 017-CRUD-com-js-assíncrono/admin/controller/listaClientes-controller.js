import { clienteService } from "../service/cliente-service.js";

const criaTemplate = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `
        <td class="td" data-td="${id}">${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button" data-btn="${id}">Excluir</button></li>
                </ul>
            </td> 
        </td> 
    `
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.querySelector(`button[data-btn="${id}"]`).addEventListener('click', () => {
        excluir(id);
    });
    return linhaNovoCliente;
}


function excluir(id){
    clienteService.deletaCliente(id)
}

const tabela = document.querySelector("[data-tabela]");

clienteService.listaClientes()
.then((data) => {
    data.forEach((element) => {
        tabela.appendChild(criaTemplate(element.nome, element.email, element.id));
    });
})