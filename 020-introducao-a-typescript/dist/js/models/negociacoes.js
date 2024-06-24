export class Negociacoes {
    constructor() {
        this.listaDeNegociacoes = [];
    }
    adiciona(negociacao) {
        this.listaDeNegociacoes.push(negociacao);
    }
    lista() {
        return this.listaDeNegociacoes;
    }
}
