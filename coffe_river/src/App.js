import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AgregarUsuario from './Agregar-usuario'
import EditarUsuario from './Editar-usuario';
import ListaUsuarios from './Lista-usuarios'

function App() {
  return (
    <div className="App">
        <h1>
          Coffe River  
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaUsuarios/>} exact></Route>
            <Route path='/agregarUsuario' element={<AgregarUsuario/>} exact></Route>
            <Route path='/editarUsuario' element={<EditarUsuario/>} exact></Route>
          </Routes>
        </BrowserRouter>
        
        
        
    </div>
  );
}

export default App;
