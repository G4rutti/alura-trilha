import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"

import './ListaLivros.css'
import { AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state"
import { useReactiveVar } from "@apollo/client"


interface ListaLivrosProps {
    categoria: ICategoria
}



const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const [input, setInput] = useState<string>("")



    useEffect(() => {
        filtroLivrosVar({
            ...filtroLivrosVar(),
            titulo: input.length >= 3 ? input : ""
        })
    }, [input, categoria])

    filtroLivrosVar({
        ...filtroLivrosVar(),
        categoria: categoria,
    })
    useLivros();
    const livros = useReactiveVar(livrosVar)


    return <section>
        <form style={{ maxWidth: "80%", margin: "5vh auto", textAlign: "center" }}>
            <AbCampoTexto value={input} onChange={setInput} placeholder="Digite um título" />
        </form>
        <div className="livros">
            {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </div>
    </section>
}

export default ListaLivros