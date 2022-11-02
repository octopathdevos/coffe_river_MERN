const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

const eschema = mongoose.Schema


const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
})


const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

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
    ModeloUsuario.find({idUsuario:req.body.idUsuario},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
