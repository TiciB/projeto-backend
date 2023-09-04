const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome:'Tici Bezerra',
        imagem:'foto',
        minibio:'Uma mulher que merece viver e amar como outra qualquer do planeta'
    })
}

function mostraPorta() {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen (porta, mostraPorta)