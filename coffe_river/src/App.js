import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AgregarUsuario from './Agregar-usuario'
import EditarUsuario from './Editar-usuario';
import ListaUsuarios from './Lista-usuarios'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Coffe River </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


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
