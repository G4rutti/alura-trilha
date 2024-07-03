import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../Atom"

const useExcluirEvento = () => {

    const setListaDeEventos = useSetRecoilState<Array<IEvento>>(listaDeEventosState);

    return (evento: IEvento) => {
        setListaDeEventos(lista => lista.filter(evt => evt.id !== evento.id));
    }
}

export default useExcluirEvento;