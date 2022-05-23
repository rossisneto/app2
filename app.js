const express = require('express')
const app = express()

const port=3000

app.get('/',(req,res)=>{
    res.end("Webserver ATIVO")
})

app.listen(port,console.log("Servidor ativo na porta 3000"))