import styled from "styled-components"
import IFotos from "../../interface/IFoto"
import Imagem from "../Galeria/Imagem/Imagem"
import BotaoIcone from "../BotaoIcone/BotaoIcone"

import icone from "../../../public/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            background-color: transparent;
            border: 0;
            color: white;
            font-weight: bold;
            position: relative;
            top: 20px;
            right: 60px;
            cursor: pointer;
        }
    }
`

interface ModalProps {
    foto: IFotos | null;
    aoFechar: () => void;
}

const Modal = ({ foto, aoFechar }: ModalProps) => {
    return (
        <>
            {foto && (
                <>
                    <Overlay onClick={aoFechar} />
                    <DialogEstilizado onClose={aoFechar} open={!!foto?.path}>
                        <Imagem
                            foto={foto}
                            fonte={foto}
                            titulo={foto}
                            expandida={true}
                        />
                        <form method="dialog">
                            <BotaoIcone type="button" onClick={aoFechar}>
                                <img src={icone} alt="Icone de fechar" />
                            </BotaoIcone>
                        </form>
                    </DialogEstilizado>
                </>
            )}
        </>
    )
}




export default Modal