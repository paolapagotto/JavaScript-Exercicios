const express = require('express');
const routes = express.Router();


//importando controllers
const ProdutoController = require('./controller/produtocontroller');
const QueryController = require('./controller/querycontroller')


routes.get('/:nome/:preco/:quantidade/:codigo', ProdutoController.getProduto);
routes.get('query/params/:name', QueryController.getQueryParams);



//Sem os controllers:
routes.get('/:nome/:preco/:quantidade/:codigo', (req, res) =>{

    let { nome, preco, quantidade, codigo } = req.params
    
        let produto = {
            nome,
            preco,
            quantidade,
            codigo,
        }
        res.send(produto)

});

routes.get('/query/params', (req, res) => {
    
    //desestruturação:
    let {
        nome,
        email,
        idade,
        profissao,
    } = req.query;

    let frase =  'Olá, ' + nome + ' recebemos o seu cadastro com o e-mail ' 
                + email + ' e notamos que você é ' + profissao + ' e tem ' + idade + ' anos.';
    console.log(req.query);
    console.log(frase);
    
    //no browser digitar na URL:
    //http://localhost:3000/query/params?nome=Paola&email=paola@email.com&idade=31&profissao=arquiteta
    //rodar o server
});

/* re.query vs. req.params
Criar um [parâmetro] para nome e uma [query string] para sobrenome
e exibir os dois concatenados na tela com a mensagem de saudação
'Olá, nome sobrenome'
*/
routes.get('query/params/:name', (req, res) => {
    let { name } = req.params;
    let { surname } = req.query;

    let saudacao = 'Olá, ' + name + ' ' + surname;

    console.log(saudacao);
})

module.exports = routes 