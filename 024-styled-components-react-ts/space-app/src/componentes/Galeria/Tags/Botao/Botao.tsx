import styled from 'styled-components'



const BotaoEstilizado = styled.button`
  color: white;
  background: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  transition: .5s ease-in;
  &:hover{
    border-color: #C98CF1;
  }
  font-size: 24px;
  cursor: pointer;
  /* Tag2 */

  /* Auto layout */
  padding: 10px 8px;

  width: auto;
  height: 49px;

  border-radius: 10px;

  /* Inside auto layout */


`

const Botao = ({titulo, key, }: {titulo: string, key:number, }) => {
  return (
    <BotaoEstilizado  key={key}>{titulo}</BotaoEstilizado>
  )
}

export default Botao