import Titulo from "../Titulo/Titulo"
import Tags from "./Tags/Tags"
import Populares from "./Populares/Populares"
import styled from "styled-components"

import IFotos from "../../interface/IFoto"
import Imagem from "./Imagem/Imagem"
// import imgJson from "../../../public/fotos.json"



const GaleriaContainer = styled.div`
    display: flex;
    `

const SecaoFluida = styled.section`
    flex-grow: 1;
    div{
        gap: 24px;
        display: flex;
        flex-wrap: wrap;
    }
    `
interface GaleriaProps {
    fotos: Array<IFotos>;
    aoFotoSelecionada: (foto: IFotos) => void | null ; 
}
const Galeria = ({ fotos = [], aoFotoSelecionada }: GaleriaProps) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <div>
                        {fotos.map((foto) => (
                            <Imagem
                                aoZoomSolicitado={aoFotoSelecionada}
                                foto={foto}
                                titulo={foto}
                                fonte={foto}
                            />
                        ))}
                    </div>

                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria