import User from "./03-User.js";
import Admin from "./04-Admin.js";
import Docente from "./05-Docente.js";


const novoUser = new User("Julia", "j@j.com", "2021-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021-01-01");
console.log(novoAdmin.criarCurso("JS", 20));
console.log(novoAdmin.nome);
novoAdmin.nome = "Davi";
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Mariana", "M@M.com", "2020-12-12");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Davi", "Trilha de estudos Develcode"));