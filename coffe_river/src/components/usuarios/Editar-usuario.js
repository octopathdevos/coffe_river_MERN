import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

function EditarUsuario(){

    const params = useParams()
    //hooks 
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')

    //para probar nueva rama
    
    useEffect(()=>{
        axios.post('/api/usuario/obtenerdatausuario',{idUsuario: params.idusuario}).then(res =>{
            const datausuario = res.data[0]
            console.log(res)
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    },[])

    function editarUsuario(){
        
    }

    return (
<div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <h2>Editar Usuario</h2>                 
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
            <button onClick={editarUsuario} className='btn btn-success'>Guardar Usuario</button>
        </div>
    )
}
export default EditarUsuario