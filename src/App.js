import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario label="Nome" placeholder="Digite seu Nome"/>
      <Formulario label="Cargo" placeholder="Digite seu Cargo"/>
      <Formulario label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
