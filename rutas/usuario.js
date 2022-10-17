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

//ruta de prueba

// router.get('/ejemplo',(req,res)=>{
//     res.end('saludo carga desde ruta ejemplo')
// })

router.post('/agregarusuario',(req,res)=>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono:req.body.telefono,
        idUsuario: req.body.idUsuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})
