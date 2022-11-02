const express = require('express')
const app = express()

//importar conexion mongodb

const archivoBD = require('./conexion')


//importacion del archivo de rutas y modelo de usuario

const rutausuario = require('./rutas/usuario')
const rutaproducto = require('./rutas/producto')

//importacion body parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))



app.use('/api/usuario',rutausuario)
app.use('/api/producto',rutaproducto)


app.get('/',(req,res)=>{
    res.end('bienvenidos al servidor backend de node')
})

//configurar server basico
app.listen( 5000, function(){
    console.log('el servidor esta corriendo correctamente en su segunda version')
} )