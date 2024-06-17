function User(nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = () => {
        return `${this.nome}, ${this.email}`
    }
}

const newUser = new User("Juliana", "j@j.com")
console.log(newUser.exibirInfos())

function Admin(role) {
    User.call(this, "Juliana", "j@j.com");
    this.role = role || "estudante";
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin("admin");
console.log(novoUser.exibirInfos());
console.log(novoUser.role);



