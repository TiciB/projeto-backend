const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Tici Bezerra',
        imagem:'foto',
        minibio:'Uma mulher que merece viver e amar como outra qualquer do planeta'
    },
    
    {
        nome:'Tati Bezerra1',
        imagem:'foto1',
        minibio:'UJSVBKHEFVOUIEBpvbefibnnióe'
    },

    {
        nome:'Maria Bezerra2',
        imagem:'foto2',
        minibio:'lvkausyvfowbvuiBVUIWVBP'
    }
]

function mostraMulheres(request, response){
   response.json(mulheres)
}

function mostraPorta() {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen (porta, mostraPorta)