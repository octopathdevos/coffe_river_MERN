const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.end('bienvenidos al servidor backend de node')
})

//configurar server basico
app.listen( 5000, function(){
    console.log('el servidor esta corriendo correctamente en su segunda version')
} )