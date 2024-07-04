import IProfissional from "../interfaces/IProfissional"
import { useFetch } from "./useFetch"

export const useDadosProfissionais = () => {
    return useFetch<Array<IProfissional>>({nome: "profissionais"})
}