import IConsulta from "../interfaces/IConsulta";
import { IDados } from "../interfaces/IDados";
import IProfissional from "../interfaces/IProfissional";


interface Props {
    profissionais: Array<IProfissional> | null;
    consultas: Array<IConsulta> | null;
}

export const useDadosGraficos = ({ profissionais, consultas }: Props) => {
    let dados: Array<IDados> = [];
    if (profissionais && consultas) {
        dados = profissionais.map(profissional => ({
            nome: profissional.nome,
            consultas: consultas.filter(consultas => consultas.profissional.some(prof => prof.nome === profissional.nome)).length
        }));
    }
    return dados;
}