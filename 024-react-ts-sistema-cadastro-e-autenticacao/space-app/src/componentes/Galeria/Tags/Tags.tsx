import tags from "./tags.json"
import Botao from "./Botao/Botao"
import styled from "styled-components"


const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5vh;
  gap: 24px;
  p{
    color: #D9D9D9;
    font-size: 24px;
  }
`

const Tags = () => {
  return (
    <DivEstilizada>
      <p>Busque por tags:</p>
      {tags.map((item) => (
        <Botao key={item.id} titulo={item.titulo}/>
      ))}
    </DivEstilizada>
  )
}

export default Tags