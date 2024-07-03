import { useRecoilValue, useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../Atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {

    const setListaDeEventos = useSetRecoilState<Array<IEvento>>(listaDeEventosState);
    const listaDeEventos = useRecoilValue<Array<IEvento>>(listaDeEventosState);

    return (evento: IEvento) => {
        const eventoAlterado = {
            ...evento,
            completo: !evento.completo
        }
    
        const novaListaDeEventos = listaDeEventos.map(evt =>
            evt.id === evento.id ? eventoAlterado : evt
        );
    
        return setListaDeEventos(novaListaDeEventos);
    }
    

}

export default useAtualizarEvento;