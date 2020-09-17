//https://expressjs.com/pt-br/guide/routing.html

const express = require('express');
const app = express();

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});
  
//Existe um método de roteamento especial, app.all(), que não é derivado de nenhum método HTTP. 
//Este método é usado para carregar funções de middleware em um caminho para todos os métodos de solicitação.
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});


//É possível criar manipuladores de rota encadeáveis para um caminho de rota usando o app.route(). 
//Como o caminho é especificado em uma localização única, criar rotas modulares é útil, 
//já que reduz redundâncias e erros tipográficos.
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
});


//Use a classe express.Router para criar manipuladores de rota modulares e montáveis. 
//Uma instância de Router é um middleware e sistema de roteamento completo; por essa razão, 
//ela é frequentemente referida como um “mini-aplicativo”
//O seguinte exemplo cria um roteador como um módulo, carrega uma função de middleware nele, 
//define algumas rotas, e monta o módulo router em um caminho no aplicativo principal.

//Crie um arquivo de roteador com um arquivo chamado birds.js no diretório do aplicativo, 
//com o seguinte conteúdo:
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;

//Em seguida, carregue o módulo roteador no aplicativo:

var birds = require('./birds');
app.use('/birds', birds);

//O aplicativo será agora capaz de manipular solicitações aos caminhos /birds e /birds/about, 
//assim como chamar a função de middleware timeLog que é específica para a rota.