import { useEffect, useState } from "react";

import Producto from "./Producto-Individual";
import axios from "axios";

function ListaProductos(){

    const [dataproductos, setdataproductos] = useState([])
    useEffect(()=>{
        axios.get('api/producto/obtenerproductos').then(res =>{
            setdataproductos(res.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    const listadeproductos = dataproductos.map(producto =>{
        return(
            <div>
                <Producto producto={producto}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de Productos</h2>
            {listadeproductos}
            
        </div>
    );
}
export default ListaProductos;