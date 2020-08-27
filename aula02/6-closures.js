//Closures

//Closures são funções aninhadas, ou seja, funções que vivem dentro de outras funções

//um closure vive dentro de uma função container e será usado apenas quando essa função for executada
//após a conclusão da execução, o closure deixará de existir, otimizando o desempenho geral
// disponibilizando seu espaço de memória para outras solicitações

function container(){
    function closure(){
        // código que será executado
    }
    // código que será executado
}

// um closure tem acesso a todos os parâmetros e variáveis que a função pai está recebendo ou declarando
//sem precisar passá-los como parâmetro

function saudacaoPersonalizada(nome){
    let saudacaoGenerica = 'Olá';
    function saudar(){
        return saudacaoGenerica + ' ' + nome;
    }
    return saudar();
}

