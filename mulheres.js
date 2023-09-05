const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const app = express()
const porta = 3333

//Array mulheres
const mulheres = [
    {
        id:'1',
        nome:'Tici Bezerra',
        imagem:'foto',
        minibio:'Uma mulher que merece viver e amar como outra qualquer do planeta'
    },
    
    {
        id:'2',
        nome:'Tati Bezerra1',
        imagem:'foto1',
        minibio:'UJSVBKHEFVOUIEBpvbefibnnióe'
    },

    {
        id:'3',
        nome:'Maria Bezerra2',
        imagem:'foto2',
        minibio:'lvkausyvfowbvuiBVUIWVBP'
    }
]

//GET
function mostraMulheres(request, response){
   response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.name,
        imagem: request.body.imagem,
        miinibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//Função ,ostra porta
function mostraPorta() {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //rota GET
app.use(router.post('/mulheres', criaMulher)) //rota POST
app.listen (porta, mostraPorta)