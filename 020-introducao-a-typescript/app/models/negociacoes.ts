import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private listaDeNegociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.listaDeNegociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.listaDeNegociacoes;
    }

}