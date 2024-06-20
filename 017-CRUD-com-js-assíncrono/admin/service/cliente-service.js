const listaClientes = () => {
    return  fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return  resposta.json();
        }
        throw new Error("Não foi possível listar os clientes")
    })
}

const cadastraCliente = (nome, email) => {
    return  fetch(`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.body;
    })
}

const deletaCliente = (id) => {
    return  fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
}


const clientePorId = (id) => {
    return  fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return  resposta.json();
    })
}

const editaCliente = (id, nome, email) => {
    return  fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.json();
    })
}

export const clienteService = {
    listaClientes,
    cadastraCliente,
    deletaCliente,
    clientePorId,
    editaCliente
}     