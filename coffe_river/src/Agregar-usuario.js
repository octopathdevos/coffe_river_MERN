import React from 'react'

function AgregarUsuario(){
    function agregarUsuario(){
        
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <h2>Crear un Nuevo Usuario</h2>                 
                </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='nombre'>nombre</label>
                                <input type='text' className='form-control' value=''></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='email'>e-mail</label>
                                <input type='email' className='form-control' value=''></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='telefono'>telefono</label>
                                <input type='text' className='form-control' value=''></input>
                           </div>
                    </div>
            </div>
            <button onClick={agregarUsuario} className='btn btn-success'>Guardar Usuario</button>
        </div>

    )
}
export default AgregarUsuario