import "./App.css";
import  Cabecalho_menu from './Cabecalho_menu';
import Rodape from './Rodape';
import Conteudo from"./Conteudo";
import Recomendacoes from'./Recomendacoes';


function App() {
  return (
<div className="App">
  <Cabecalho_menu />
  <Conteudo />
  <Recomendacoes />
  <Rodape />
</div>

  );
}
 
   
      
export default App;