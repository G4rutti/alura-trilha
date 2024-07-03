import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../Atom"
import { obterId } from "../../utils";

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<Array<IEvento>>(listaDeEventosState);

    return (evento: IEvento) => {
        evento.id = obterId();
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error("Eventos nao podem ser cadastrados com data anterior á hoje.");
        }
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento