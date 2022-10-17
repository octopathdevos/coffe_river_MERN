const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

const eschemausuario = mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

router.get('/ejemplo',(req,res)=>{
    res.end('saludo carga desde ruta ejemplo')
})
