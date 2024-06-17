const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento : "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email); 
    }
}


const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento : "2020/02/02",
    role: "estudante",
    ativo: true,
    criarCruso: () => {
        console.log("Curso criado"); 
    }
}
Object.setPrototypeOf(admin, user); // Herda parametros de objetos
admin.criarCruso();
admin.exibirInfos();






// Herança de protótipo
// user.exibirInfos();
// const exibir = function(){
//     console.log(this.nome, this.email); 
// }
// const exibirDados = exibir.bind(user);
// exibirDados();

