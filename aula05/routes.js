const express = require('express');
const routes = express.Router();


routes.get('/:nome/:preco/:quantidade/:codigo', (req, res) => {

    let { nome, preco, quantidade, codigo } = req.params

    let produto = {
        nome,
        preco,
        quantidade,
        codigo,
    }
    res.send(produto)
});

module.exports = routes 