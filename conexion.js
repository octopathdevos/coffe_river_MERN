const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('conexion correcta a mongodb')})
objetobd.on('error', ()=>{console.log('error en la conexion a mongodb')})

module.exports = mongoose