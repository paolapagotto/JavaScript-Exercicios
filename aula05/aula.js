const express = require('express');
const app = express()
const port = 3000;

//importando rotas da aplicação
const routes = require('./routes');

app.use(routes);



// rotas
app.get('/', (req, res) => {

    let array = ['item 1', 'item 2', 'item 3']
    let objeto = {"nome": "Paola"}
    let arrayObjetos = [
        {
            "nome": "Paola",
        },
        {
            "nome": "Filipe",
        }
    ]
    res.send(arrayObjetos) 
});


//rotas parametrizadas
app.get('/:id', (req, res) => {
    let id = req.params.id
    res.send(id)
})
//http://localhost:3000/id retorna o id no servidor


app.listen(port, () => {
    console.log('Servidor rodando: http://localhost:' + port)
})

/*
Desafio Criar uma rota /produto/adicionar que terá 4 parâmetros
onde iremos receber esses parâmetros e retornar um produto.
Exemplo: /:nome/:preco/:quantidade/:codigo

    {
    nome: teste,
    preco: 10,
    quantidade: 5
    codigo: 00001,
    }

*/


// app.get('/:nome/:preco/:quantidade/:codigo', (req, res) => {
    
//     let nome = req.params.nome
//     let preco = req.params.preco
//     let quantidade = req.params.quantidade
//     let codigo = req.params.codigo
    
//     let produto = {
//         nome: nome,
//         preco: preco,
//         quantidade: quantidade,
//         codigo: codigo,
//     }

//     res.send(produto)
// })



// app.get('/:nome/:preco/:quantidade/:codigo', (req, res) => {

//     let { nome, preco, quantidade, codigo } = req.params

//     let produto = {
//         nome: nome,
//         preco: preco,
//         quantidade: quantidade,
//         codigo: codigo,
//     }
//     res.send(produto)
// })


// app.get('/:nome/:preco/:quantidade/:codigo', (req, res) => {

//     let { nome, preco, quantidade, codigo } = req.params

//     let produto = {
//         nome,
//         preco,
//         quantidade,
//         codigo,
//     }
//     res.send(produto)
// })
