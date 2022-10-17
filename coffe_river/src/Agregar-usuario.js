import React, {useState} from 'react'

import axios from 'axios'
import uniqid from 'uniqid'

function AgregarUsuario(){
    
    //hooks 
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')
 

    function agregarUsuario(){
        var Usuario ={
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }

        console.log(Usuario)
        axios.post('/api/usuario/agregarusuario',Usuario)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{
            console.log(err)
        })
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
                                <input type='text' className='form-control' value={nombre} onChange={(e)=>{setNombre(e.target.value)}} ></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='email'>e-mail</label>
                                <input type='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='telefono'>telefono</label>
                                <input type='text' className='form-control' value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <button onClick={agregarUsuario} className='btn btn-success'>Guardar Usuario</button>
        </div>

    )
}
export default AgregarUsuario