import styled from 'styled-components'
import IProfissional from '../../../interfaces/IProfissional'
import { Rating } from '@mui/material'

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: white;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`
const ImagemEstilizada = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`

const PadraoLista = styled.li`
  list-style-type: none;
`

const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ListaNova = styled(Lista)`
  gap: 24px;
  justify-content: start;
`

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`

const ParagrafoEstilizado = styled.p`
    margin: .5em 0;
    font-size: 14px
`

const Card = ({ profissional }: { profissional: IProfissional }) => {
  return (
    <ContainerEstilizado>
      <Lista>
        <ListaNova>
          <PadraoLista>
            <ImagemEstilizada src={profissional.imagem} alt={`Foto do(a) profissional: ${profissional.nome}`} />
          </PadraoLista>
          <PadraoLista>
            <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
            <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
          </PadraoLista>
        </ListaNova>

        <PadraoLista>
          <Rating
            name='simple-controlled'
            value={profissional.nota}
            readOnly={true}
          />
        </PadraoLista>
      </Lista>
    </ContainerEstilizado>
  )
}

export default Card