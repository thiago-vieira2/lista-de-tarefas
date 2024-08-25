
import { Link } from 'react-router-dom';
import './App.scss';
import Header from './component/header/header';

function App() {
  return (
    <div className="App">
      <div className="cabecalho">
      <Header text = 'lista de tarefas'/>
      </div>

      <div className="maetexto">
      <div className="texto">
        <h1 className='tituloini'>O que fazemos</h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit est assumenda sint? Possimus, quis corporis. Quia, eaque beatae. Ea eaque delectus velit praesentium recusandae corrupti similique sint. Quis, nesciunt!</p>

        <Link to='/lista'>Começe agora</Link>
      </div>
      </div>




    </div>
  );
}

export default App;
