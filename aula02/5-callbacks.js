// CALLBACKS

// CallBack é uma função que se passa como parâmetro para outra função
// A função que recebe é que se carrega de executá-lo quando seja necessário.

// Tipos de CALLBACK

//Anônimo
setTimeout( function(){
    console.log('Hola Mundo!');
}, 1000)

//Definido
let myCallback = () => console.log('Hello World!');
setTimeout( myCallback, 1000);

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}

function saudar (nome, sobrenome, callback){
    return 'Olá, ' + callback(nome, sobrenome) + '!';
}

console.log(saudar('João', 'Neves', nomeCompleto));

function iniciais(nome, sobrenome){
    return nome[0] + sobrenome[0];
}
console.log(saudar('João', 'Neves', iniciais));


//Exercício: Passando um CallBack


function dobro(number){
    return number * 2;
}

function triplo(number){
    return number * 3;
}

function aplicar(number, callback){
    return callback(number);
}

//console.log(aplicar(2, dobro));
//console.log(aplicar(4, triplo));

//Exercício: Calculadora

function somar(numberA, numberB){
    return numberA + numberB;
}

function subtrair(numberA, numberB){
    return numberA - numberB;
}

function multiplicar(numberA, numberB){
    return numberA * numberB;
}

function dividir(numberA, numberB){
    return numberA / numberB;
}

function calculadora(numberA, numberB, callback){
    return callback(numberA, numberB)
}

console.log(calculadora(10, 5, somar));
console.log(calculadora(10, 5, subtrair));
console.log(calculadora(10, 5, multiplicar));
console.log(calculadora(10, 5, dividir));

//Exercício: Passando um CallBack

function adicionarHttp(url){
    return 'http://' + url;
}

function processar(listaSitesWeb, callback){
    let resultado = [];
    for(let i = 0; i < listaSitesWeb.length; i++){
        resultado.push(callback(listaSitesWeb[i]));
    }
    return resultado;
}