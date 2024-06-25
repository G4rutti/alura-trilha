export abstract class View<T> {

    protected elemento: HTMLElement;
    private scape: boolean = false;

    constructor(seletor: string, scape?: boolean){
        const elemento = document.querySelector(seletor) as HTMLElement;
        if(elemento){
            this.elemento = elemento;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }

        if(scape){
            this.scape = scape;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this.scape){
            template = template
                .replace(/<scprit>[\s\S] * ? <\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
} 