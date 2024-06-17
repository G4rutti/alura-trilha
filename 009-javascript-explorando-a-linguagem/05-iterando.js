const listaDeDestinos = new Array (
    "Salvador",
    "Rio de Janeiro",
    "São Paulo"
);


const idadeComprador = 15;
const estaAcompanhado = true;
const destino = "Curitiba";
let temPassagemComprada = false;

let contador = 0;
let destinoExiste = false;

while ( contador < 3) {
    if(listaDeDestinos[contador] == destino){ 
        console.log("Destino disponivel");
        destinoExiste = true;
        break;
    }else{
        console.log("Destino não disponivel");
        destinoExiste = false;
    }
    contador += 1;
}

for(let i ; i < listaDeDestinos.length ; i++){
    if(listaDeDestinos[contador] == destino){ 
        console.log("Destino disponivel");
        destinoExiste = true;
        break;
    }
}

if(idadeComprador >= 18 || estaAcompanhado){ 
    console.log("Pode passar!");
    temPassagemComprada = true;
}else{
    console.log("Mete o pé!");
}