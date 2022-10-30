import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AgregarProdcuto from './components/productos/Agregar-Producto';
import AgregarProducto from './components/productos/Agregar-Producto';
import AgregarUsuario from './components/usuarios/Agregar-usuario';
import Contactenos from './components/contactenos';
import EditarUsuario from './components/usuarios/Editar-usuario';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import ListaUsuarios from '../src/components/usuarios/Lista-usuarios';
import Login from './components/Login';
import NuestrosProductos from '../src/components/Nuestros-Productos';
import QuienesSomos from '../src/components/Quienes-somos';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-ligth">
        <div className="container-fluid menutext border-bottom ">
          <a className="col-md-2 offset-md-2 ">
            <img className='imgLogo pt-3 pb-3' src="./Assets/Logo/LogoMenu.png" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Mi Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="quienesSomos">Quienes Somos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nuestros Productos
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/agregarProducto">Agregar Producto</a></li>
                  <li><a class="dropdown-item" href="/listaUsuarios">Lista Productos</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/editarUsuario/:idusuario">Editar Producto</a></li>
                </ul>
              </li> 
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Usuarios
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/agregarUsuario">Agregar Usuario</a></li>
                  <li><a class="dropdown-item" href="/listaUsuarios">Lista Usuarios</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/editarUsuario/:idusuario">Editar Usuario</a></li>
                </ul>
              </li> 
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/contactanos">Contactenos</a>
              </li>
            </ul>

          </div>
          <div className='col-md-2'>
          <a className="nav-link " aria-current="page" href="/login">Login</a>
          </div>
        </div>
      </nav>


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio/> } exact ></Route>
            <Route path='/contactanos' element={<Contactenos/>} exact ></Route>
            <Route path='/login' element={<Login/>} exact ></Route>
            <Route path='/quienesSomos' element={<QuienesSomos/> } exact ></Route>
            <Route path='/nuestrosProductos' element={<NuestrosProductos/>} exact></Route>
            <Route path='/listaUsuarios' element={<ListaUsuarios/>} exact></Route>
            <Route path='/agregarUsuario' element={<AgregarUsuario/>} exact></Route>
            <Route path='/agregarProducto' element={<AgregarProducto/>} exact></Route>
            <Route path='/editarUsuario/:idusuario' element={<EditarUsuario/>} exact></Route>
          </Routes>
        </BrowserRouter>
        
      <Footer/>  
        
    </div>
  );
}

export default App;
