let person = {
    name:'Paola',
    age:31,
    height: 1.57
}

let json = JSON.stringify(person);
console.log(json);
//será visto no console os dados em uma string do tipo JSON

let objectAgain = JSON.parse(json);
console.log(objectAgain);
//será visto no console um objeto literal-JS


let listGroceries = ['bread', 'ham', 'cheese'];

json = JSON.stringify(listGroceries);
console.log(json);
//será visto no console os dados em uma string do tipo JSON

let arrayAgain = JSON.parse(json);
console.log(arrayAgain);
//será visto no console um objeto literal-JS

/*
MacBook-Pro-de-Paola:aula02 paolapagotto$ node 1-json.js
{"name":"Paola","age":31,"height":1.57}
{ name: 'Paola', age: 31, height: 1.57 }
["bread","ham","cheese"]
[ 'bread', 'ham', 'cheese' ] 
*/

/*
OBJETO LITERAL:
 - admite aspas simples e aspas duplas;
 - as chaves do objeto ficam sem aspas;
 - podemos escrever métodos;
 - recomenda-se colocar uma vírgula na última propriedade.

    {
        texto: 'Meu texto',
        numero: 16,
        array: ['um', 'dois'],
        booleano: true,
        metodo(): {return 'Olá!'},
    }

JSON:
 - só podem ser utilizadas as aspas duplas;
 - as chaves vão entre aspas;
 - não suporta métodos, apenas propriedades e valores;
 - não podemos colocar uma vírgula no último elemento.

    {
        "texto": "Meu texto",
        "numero": 16,
        "array": ["um", "dois"],
        "booleano": true 
    }
*/

