import Avaliacao from "./components/Avaliacao/Avaliacao";
import { Botao } from "./components/Botao/Botao";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Container from "./components/Container/Container";
import Grafico from "./components/Grafico/Grafico";
import Rodape from "./components/Rodape/Rodape";
import { Subtitulo } from "./components/Subtitulo/Subtitulo";
import Tabela from "./components/Tabela/Tabela";
import Titulo from "./components/Titulo/Titulo";

function App() {
  return (
    <>
      <Cabecalho/>
      <Container>
          <Titulo>Área administrativa</Titulo>
          <Botao>Cadastrar especialista</Botao>
          <Titulo>Consultas do dia</Titulo>
          <Tabela />
          <Botao>Ver mais</Botao>
          <Titulo>Consultas mensais por especialista</Titulo>
          <Subtitulo>Julho/24</Subtitulo>
          <Grafico/> 
          <Titulo>Avaliações de especialistas</Titulo>
          <Subtitulo>Julho/24</Subtitulo>
          <Avaliacao />  
          <Botao>Ver mais</Botao>
      </Container>
      <Rodape/>
    </>
  );
}

export default App;
