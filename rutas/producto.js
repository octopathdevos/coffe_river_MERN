const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

const eschemaproducto = mongoose.Schema({
    nombre: String,
    Precio: String,
    Stock: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model('productos', eschemausuario)
module.exports = router

//ruta de prueba

router.get('/ejemplo',(req,res)=>{
    res.end('saludo carga desde ruta ejemplo')
})

//agregar usuario
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

//obtener todos los usuarioos

router.get('/obtenerusuarios',(req, res)=>{
    ModeloUsuario.find({},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario

router.post('/obtenerdatausuario',(req, res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
