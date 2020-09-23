/*criar um servidor hhtp simples com a porta 3000,
com um console.log exibindo qual porta "o servidor está rodando na porta 3000"
e um retorno na tela "servidor rodando" para o usuário, caso ele tente acessar 
nosso servidor (localhost:3000/)*/

const http = require('http');
const express = require('express');
const app = express()
const port = 3000;

//SERVIDOR COM HTTP

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('servidor rodando');
// }).listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
// });

//SERVIDOR COM EXPRESS

app.get('/', (req, res) => {
    res.send('servidor na porta 3000.') 
});

app.get('/home', (req, res) => {
    res.send('você está na rota Home.');
}) 

app.get('/users', (req, res) => {
    res.send('você está na rota Users.');
}) 

app.listen(port, () => {
    console.log('Servidor rodando: http://localhost:' + port)
})

/* Node -> Possibilitar trabalhar com JavaScript do lado do Servidor,
mais conhecido como backend.

Express -> É um módulo que implementa diversas bibliotecas/pacotes
para funcionar e auxiliar na execução do código. 
*/