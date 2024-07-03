import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosHttp } from "./seletores";

export const listaDeEventosState = atom<Array<IEvento>>({
    key: "listaDeEventosState",
    default: eventosHttp
    
})


export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: "filtroDeEventos",
    default: {}
})



