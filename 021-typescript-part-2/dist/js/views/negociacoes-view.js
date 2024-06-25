import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacoes) {
        var _a;
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
                ${(_a = negociacoes.lista()) === null || _a === void 0 ? void 0 : _a.map((i) => {
            return `
                        <tr>
                            <td>${this.formataData(i.data)}</td>
                            <td>${i.quantidade}</td>
                            <td>${i.valor}</td>
                        </tr>
                    `;
        }).join("")}
            </tbody>
        </table>
        `;
    }
    formataData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
