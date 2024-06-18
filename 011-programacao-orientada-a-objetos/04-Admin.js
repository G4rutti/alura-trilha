import User from "./03-User.js";

export default class Admin extends User {
    constructor (nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);   
    }

    exibirInfos () {
        return `${this.nome}, ${this.email}`;
    }

    criarCurso(nomeDoCurso, qtdVagas) {
        return `Curso de ${nomeDoCurso}, criado com ${qtdVagas} vagas`
    }
}