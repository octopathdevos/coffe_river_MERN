import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

function EditarProducto(){

    const params = useParams()
    //hooks 
    const[nombre, setNombre]=useState('')
    const[stock, setStock]=useState('')
    const[precio, setPrecio]=useState('')

    //para probar nueva rama
    
    useEffect(()=>{
        axios.post('/api/producto/obtenerdataproductos',{idProducto:params.idproducto}).then(res =>{
            const dataproducto = res.data[0]
            setNombre(dataproducto.nombre)
            setStock(dataproducto.stock)
            setPrecio(dataproducto.precio)
        })
    },[])

    function editarProducto(){
        
    }

    return (
<div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <h2>Editar Producto</h2>                 
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
                                <label htmlFor='email'>Stock</label>
                                <input type='email' className='form-control' value={stock} onChange={(e)=>{setStock(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-sm-6 offset-3'>
                           <div className='mb-3'>
                                <label htmlFor='telefono'>Precio</label>
                                <input type='text' className='form-control' value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
                           </div>
                    </div>
            </div>
            <button onClick={editarProducto} className='btn btn-success'>Guardar Producto</button>
        </div>
    )
}
export default EditarProducto