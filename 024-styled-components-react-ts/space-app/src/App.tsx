import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"

import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import BarraLateral from "./componentes/BarraLateral/BarraLateral"
import Banner from "./componentes/Banner/Banner"
import Galeria from "./componentes/Galeria/Galeria"
import Modal from "./componentes/ModalDeZoom/Modal"

import fotos from "./fotos.json"
import { useState } from "react"

const FundoGradiente = styled.div`
  /* Gradiente fundo */
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  max-width: 100%;
  width: 1440px;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 42px;
`

const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`


function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ContentContainer>
            <Banner />
            <Galeria 
              aoFotoSelecionada = {foto => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
            />
          </ContentContainer>
        </MainContainer>
      </AppContainer>
      <Modal 
        foto={fotoSelecionada}
       aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  )
}

export default App