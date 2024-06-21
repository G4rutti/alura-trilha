export default function maiorIdade (campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade (dataNascimento){
    const dataAtual = new Date();
    const dataMaisDezoito = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

    return dataAtual >= dataMaisDezoito
}