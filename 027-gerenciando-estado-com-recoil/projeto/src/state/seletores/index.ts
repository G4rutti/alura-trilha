import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../Atom";
import axios from "axios";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
    key: "eventosFiltradosState",
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const todosOsEventos = get(listaDeEventosState);
        const eventos = todosOsEventos.filter(evento => {
            if (!filtro.data) {
                return true;
            }
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            return ehOMesmoDia;
        });
        return eventos;
    }
});

export const eventosHttp = selector({
    key: "eventosHttp",
    get: () => axios.get("http://localhost:8080/eventos")
        .then(response => {
            const eventosJson: Array<IEvento> = response.data;
            return eventosJson.map(evento => ({
                ...evento,
                inicio: new Date(evento.inicio),
                fim: new Date(evento.fim)
            }));
        })
        .catch(error => {throw new Error(error)})
});