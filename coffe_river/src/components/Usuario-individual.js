import {Link} from 'react-router-dom'
import React from 'react'

function UsuarioIndividual({usuario}){
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario._id}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario._id}`}><li className='btn btn-success'>editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger'>borrar</button>
                </div>
            </div>
        </div>
    )
}
export default UsuarioIndividual