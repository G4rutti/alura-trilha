import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    protected template(negociacoes: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${negociacoes.lista()?.map((i) => {
                    return `
                        <tr>
                            <td>${this.formataData(i.data)}</td>
                            <td>${i.quantidade}</td>
                            <td>${i.valor}</td>
                        </tr>
                    `
                }).join("")}
            </tbody>
        </table>
        `;
    }

    private formataData(data: Date, ): string {
        return new Intl.DateTimeFormat().format(data);
    }
}