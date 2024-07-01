import styled from 'styled-components'
import  MarcaRegistrada  from "../../assets/marca_registrada.svg"

const FooterEstilizado = styled.footer`
    background-color: var(--azul-escuro);
    color: var(--branco);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
`

const Footer = () => {
  return (
    <FooterEstilizado>
        <img src={MarcaRegistrada} alt="" />
        Desenvolvido por aluno da Alura
    </FooterEstilizado>
  )
}

export default Footer