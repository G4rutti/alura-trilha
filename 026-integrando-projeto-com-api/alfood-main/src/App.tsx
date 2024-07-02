import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from './paginas/Adm/AdministracaoRestaurantes/AdministracaoRestaurantes';
import FormularioRestaurante from './paginas/Adm/AdministracaoRestaurantes/FormularioRestaurante';
import AdmBasePage from './paginas/Adm/AdmBasePage';
import AdministracaoPratos from './paginas/Adm/AdministracaoPratos/AdministracaoPratos';
import FormularioPrato from './paginas/Adm/AdministracaoPratos/FormularioPrato';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin' element={<AdmBasePage/>}>
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />


        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="pratos/novo" element={<FormularioPrato />} />
      </Route>
    </Routes>
  );
}

export default App;
