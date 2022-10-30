import React, {useState} from 'react';

import axios from 'axios'
import uniqid from 'uniqid'

function AgregarProducto(){
    
    //hooks 
    const[nombre, setNombre]=useState('')
    const[precio, setPrecio]=useState('')
    const[stock, setStock]=useState('')
 

    function agregarProducto(){
        var Usuario ={
            nombre: nombre,
            Precio: precio,
            Stock: stock,
            idUsuario: uniqid()
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
                    <h2>Crear un Nuevo Producto</h2>                 
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
                                <label htmlFor='Precio'>Precio</label>
                                <input type='Precio' className='form-control' value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='telefono'>Stock</label>
                                <input type='text' className='form-control' value={stock} onChange={(e)=>{setStock(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <button onClick={agregarProducto} className='btn btn-success'>Guardar Producto Nuevo</button>
        </div>

    )
}
export default AgregarProducto