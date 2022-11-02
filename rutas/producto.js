const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

const eschema = mongoose.Schema


const eschemaproducto = new eschema({
    nombre: String,
    precio: String,
    stock: String,
    idProducto: String
})


const ModeloProducto = mongoose.model('producto', eschemaproducto)
module.exports = router

//agregar usuario
router.post('/agregarproducto',(req,res)=>{
    const nuevousuario = new ModeloProducto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock,
        idProducto: req.body.idProducto
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('producto agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//obtener todos los usuarioos

router.get('/obtenerproductos',(req, res)=>{
    ModeloProducto.find({},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario

router.post('/obtenerdataproductos',(req, res)=>{
    ModeloProducto.find({idProducto:req.body.idProducto},function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
