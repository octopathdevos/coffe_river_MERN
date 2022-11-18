import { Link } from "react-router-dom";
import React from "react";

function Producto({ producto }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{producto.idProducto}</li>
            <li className="list-group-item">{producto.nombre}</li>
            <li className="list-group-item">{producto.stock}</li>
            <li className="list-group-item">{producto.precio}</li>
          </ul>
          <Link to={`/editarproducto/${producto.idProducto}`}><li className="btn btn-success">editar</li></Link>
          <button className="btn btn-danger">borrar</button>
        </div>
      </div>
    </div>
  );
}
export default Producto;
