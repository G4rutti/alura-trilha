const listaDeDestinos = new Array (
    "Salvador",
    "Rio de Janeiro",
    "São Paulo"
);
const idadeComprador = 15;
const estaAcompanhado = true

if(idadeComprador >= 18 || estaAcompanhado){ 
    console.log("Pode passar!");
}else{
    if(estaAcompanhado){
        console.log('Comprador está acompanhado')
    }
    console.log("Mete o pé!");
}