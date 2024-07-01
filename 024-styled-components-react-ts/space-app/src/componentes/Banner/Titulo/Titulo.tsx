import styled from 'styled-components'

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Titulo = () => {
  return (
    <TituloEstilizado>
        A galeria mais completa de fotos do espaço!
    </TituloEstilizado>
  )
}

export default Titulo