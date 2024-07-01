import styled from "styled-components"

interface Props{
    $ativo: boolean
}

const ItemEstilizado = styled.li<Props>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    display: flex;
    align-items: center;
    gap: 22px;
    font-weight: ${props => props.$ativo ? "bold" : "regular"};
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }:
    {
        children: string, 
        iconeAtivo: string, 
        iconeInativo: string, 
        ativo?: boolean

    }) => {
    return (
        <ItemEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemEstilizado>
    )
}

export default ItemNavegacao