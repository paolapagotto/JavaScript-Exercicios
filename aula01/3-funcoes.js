//Funções - Estrutura Básica

function somar(a,b){
    return a + b;
}

//funções declaradas
function fazerSorvete(quantidade){
    return '🍦'.repeat(quantidade);
}

//funções expressadas
let fazerSushi = function(quantidade){
    return '🍣'.repeat(quantidade);
}

//Executando uma Função:
nomeFunction();
/*se quiser ver ou salvar os dados que retornam, 
é necessário armazená-los em uma variável
ou fazer um console.log() da execução. */
let resultado = nomeFunction();
console.log(nomeFunction());

//Exemplo:
function greetings(name, surname){
    return 'Hello ' + name + ' ' + surname;
}
greetings('Paola', 'Pagotto');
greetings(); // return undefined

function greetings(name = 'visitante', surname = 'anônimo'){
    return 'Hello ' + name + ' ' + surname;
} 
greetings(); // parâmetros com valores predefinidos



// Escopo, ou alcance da Função

//Escopo Local
function minhaFuncao(){
    /*todo código que escrevemos dentro 
    da nossa função tem escopo local. */
}

function ola(){
    let saudacao = 'Olá, tudo bem?'
    return saudacao;
}
console.log(saudacao); // return Uncaught ReferenceError: saudacao is not defined

//Escopo Global
    /* todo código escrito fora 
    das funções é global. */
var minhaVariavel;
function minhaFuncao(){
    //temos acesso às variáveis globais.
}

let saudacao = 'Olá, tudo bem?';
function ola(){
    return saudacao;
}

//Exercícios:

//Função é par
function ePar(value){
    return value % 2 == 0;
}


/*  Escreva as três funções a seguir:

    anterior: recebe um número como parâmetro e retorna esse número menos um.

    triplo: recibe um número como parâmetro e devolve o triplo desse número.

    anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, 
    você terá que retornar o número. recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).
*/

let numberValue;
function anterior(numberValue){
    return numberValue - 1;
}
function triplo(numberValue){
    return numberValue * 3;
}
function anteriorDoTriplo(numberValue){
    return anterior(triplo(numberValue));
}
