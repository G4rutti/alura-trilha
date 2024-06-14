const listaDeDestinos = new Array (
    "Salvador",
    "Rio de Janeiro",
    "São Paulo"
)


const idadeComprador = 15;
const estaAcompanhado = true
const destino = "Curitiba"
let temPassagemComprada = false

if(idadeComprador >= 18 || estaAcompanhado){ 
    console.log("Pode passar!");
    temPassagemComprada = true
}else{

    console.log("Mete o pé!");
}