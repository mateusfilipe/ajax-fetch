port = 8080

const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor iniciado! Porta: ${port}`)
})

const imagens = [
    "../server/img/garfield1.jpg",
    "../server/img/garfield2.png",
    "../server/img/garfield3.gif",
    "../server/img/garfield4.jpg",
    "../server/img/garfield8.png",
    "../server/img/garfield20.jpg"
]
let currentImg = 0
app.get('/imagens',(req, res, next)=>{
    res.send({images: imagens[currentImg]})
    currentImg++
    if(currentImg > imagens.length){
        currentImg = 0
    }
})