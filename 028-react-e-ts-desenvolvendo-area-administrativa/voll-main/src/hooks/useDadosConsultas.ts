import IConsulta from "../interfaces/IConsulta"
import { useFetch } from "./useFetch"

export const useDadosConsulta = () => {
    return useFetch<Array<IConsulta>>({nome: "consultas"});
}


