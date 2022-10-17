const express = require('express')
const app = express()

//importar conexion mongodb

const archivoBD = require('./conexion')


//importacion del archivo de rutas y modelo de usuario

const rutausuario = require('./rutas/usuario')

app.use('/api/usuario',rutausuario)


app.get('/',(req,res)=>{
    res.end('bienvenidos al servidor backend de node')
})

//configurar server basico
app.listen( 5000, function(){
    console.log('el servidor esta corriendo correctamente en su segunda version')
} )