port = 8080

const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

let sim = 0
let nao = 0

app.get('/contador',(req, res, next)=>{
    res.send({'sim': sim, 'nao': nao})
})

app.post('/contador',(req, res, next)=>{
    if(req.body.opcao == 'sim'){
        sim++
    }else if(req.body.opcao == 'nao'){
        nao++
    }else{
        res.sendStatus(400).send("Erro, operação inválida.")
    }
    res.send({'sim' : sim, 'nao' : nao})
})