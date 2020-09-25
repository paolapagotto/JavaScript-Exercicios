const QueryController = {
    getQueryParams: (req, res) =>{ 
    let { name } = req.params;
    let { surname } = req.query;

    let saudacao = 'Olá, ' + name + ' ' + surname;

    console.log(saudacao);
    }
}

module.exports = QueryController