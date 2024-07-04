import axios from "axios"
import { useEffect, useState } from "react"

interface Props {
    nome: string
}

export const useFetch = <T>({nome}: Props): T | null => {
    const [dados, setDados] = useState<T|null>(null)
    useEffect(() => {
        axios.get(`http://localhost:8080/${nome}`)
            .then(response => setDados(response.data))
            .catch(error => {throw new Error(error)})

    }, [nome])

    return dados;
}
