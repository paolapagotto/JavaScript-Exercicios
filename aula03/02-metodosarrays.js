//Métodos Arrays - Parte II

var array = ['a', 'b'];

// array.map() //recebe uma função como paramentro (callback)
//percorre o array e retorna um array modificado
//as modificações serão aquelas programadas em nossa função de retorno do callback
    array.map(function(elemento){
        //nós definimos as modificações que nós queremos
        //para aplicar em cada elemento do array
    });
//Exemplo:

    var numbers = [2, 4 , 6];
    var doubleNumbers = numbers.map(function(num){
        //multiplicamos por 2 cada numero
        return num * 2;
    });
console.log(doubleNumbers);

// array.find() // recebe uma função como parametro
//retorna o valor do primeiro elemento do array buscado,
//caso não encontre nada, retorna undefined.

    array.find(function(elemento){
        //nós definimos a condição que nós queremos usar
        //como uma busca para encontrar o elemento na matriz
    });
//Exemplo:
    var fruits = ['grape', 'apple', 'cherry', 'strawberry', 'pineapple'];
    var liveInTheSea = fruits.find(function(fruit){
        return fruit == 'pineapple';
    });
console.log(liveInTheSea);

// array.filter() // recebe uma função como parametro
//desloca o array e filtra os elementos de acordo com a condição que existe no callback
//retorna um novo array que contém apenas os elementos que atenderam a condição

    array.filter(function(elemento){
        //nós definimos a condição que nós queremos usar
        //como um filtro para cada elemento da matriz
    });
//Exemplo:
    var ages = [22, 8, 17, 14, 18, 30, 31, 27, 33];
    var adults = ages.filter(function(age){
        return age >= 18;
    });
console.log(adults);

// array.reduce() // percorre o array e retorna um único valor
//recebe uma chamada de retorno que se executará em cada elemento do array
//este recebe dois parametros: um acumulador e o elemento de corrente, pelo qual está passando.

    array.reduce(function(acumulador, elemento){
        //nós definimos o comportamento que queremos
        //para implementar no acumulador e no elemento
    });
//Exemplo:
    var numbersStack = [ 5, 7, 16];
    var sum = numbersStack.reduce(function(stack, number){
        return stack + number;
    })
console.log(sum);

// array.forEach() // itera sobre um array
//recebe um retorno de chamada como parametro e,
//ao contrário dos métodos anteriores, não retorna nada.

    array.forEach(function(elemento){
        //nós definimos o comportamento que queremos
        //para implementar em cada elemento
    });
//Exemplo:
    var countries = ['Argentina', 'Brasil', 'Chile', 'Colombia'];
    countries.forEach(function(country){
        console.log(country);
    });

// //Exercício: Filtro com números
// Vamos começar com um mais simples.
//     Temos um array com numeros definidos e queremos filtrar aqueles que são maiores de 18.
//     Seu trabalho será definir a variável maiores e armazenar nela os números que cumpram com essa condição, 
//     utilizando o método filter.

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(idade){
    return idade > 18;
});
console.log(maiores);