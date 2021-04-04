const express = require('express')
const app = expres()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8080,()=>{
    console.log('Servidor Iniciado!')
})

app.post('/images',(req,res)=>{
    res.send({
        msg: `Usuário ${req.body.name} criado na base.`
    })
})