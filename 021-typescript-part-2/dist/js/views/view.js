export class View {
    constructor(seletor, scape) {
        this.scape = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        if (scape) {
            this.scape = scape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template
                .replace(/<scprit>[\s\S] * ? <\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
