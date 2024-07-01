import styled from "styled-components"
import favorito from "../../../../public/icones/favorito-ativo.png"
import expandir from "../../../../public/icones/expandir.png"
import IFotos from "../../../interface/IFoto"
// import IFotos from "../../../interface/IFoto"

interface Props{
    $expandida?: boolean
}

const CardImage = styled.figure<Props>`
    /* Card foto 1 */
    margin: 0;
    width: ${(props) => props.$expandida ? "90%" : "442px"};
    height: auto;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    border-radius: 20px;
    background-color: #001634;
    
    img{
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        width: 100%;
        background-size: cover;
        height: 256px;
    }

    figcaption{
        padding: 5px 30px;
    }
    figcaption h3{
        /* Nome da foto Fonte/fotógrafo/satélite */
        font-family: 'Gandhi Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;

        color: #FFFFFF;
    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    div{
        display: flex;
        gap: 24px;
    }

`

const ButtonFavorito = styled.button`
    background-image: url(${favorito});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0;
    /* favorite */

    width: 24px;
    height: 24px;
`

const ButtonExpandir = styled.button`
    background-image: url(${expandir});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0;
    /* favorite */

    width: 24px;
    height: 24px;
`

const Imagem = ({ foto, titulo, fonte, expandida = false, aoZoomSolicitado = () => ""}: 
    {   foto: IFotos, 
        titulo: IFotos, 
        fonte: IFotos, 
        expandida?: boolean, 
        aoZoomSolicitado?: (foto: IFotos) => void 
    }) => {
    return (
        <CardImage $expandida={expandida}>
            <img src={`../../../../public${foto.path}`} alt="" />
            <figcaption>
                <h3>{titulo.titulo}</h3>
                <footer>
                    <p>{fonte.fonte}</p>
                    <div>
                        <ButtonFavorito></ButtonFavorito>
                        {!expandida && (
                            <ButtonExpandir onClick={() => aoZoomSolicitado(foto)}></ButtonExpandir>
                        ) }
                    </div>
                </footer>
            </figcaption>
        </CardImage>
    )
}

export default Imagem