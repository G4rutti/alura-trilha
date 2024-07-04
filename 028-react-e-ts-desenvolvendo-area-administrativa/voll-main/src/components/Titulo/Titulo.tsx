import avaliacao from "./assets/avaliacao.png"
import grafico from "./assets/grafico.png"
import consulta from "./assets/consulta.png"
import styled from "styled-components";

interface Props {
    children?: React.ReactNode;
    imagem?: string;
}

interface IImagens {
    avaliacao: string;
    grafico: string;
    consulta: string;
}

const SpanEstilizado = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : "none"};
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`

const ContainerEstlizado = styled.div`
    display: flex;
    align-items: center;
`

const Titulo = ({ children, imagem }: Props) => {

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    } 


    return (
        <ContainerEstlizado>
            {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]}/>}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstlizado>
    )
}

export default Titulo