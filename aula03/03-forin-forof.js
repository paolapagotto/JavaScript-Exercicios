// FOR IN
//          for(var property in object);
//aplicar para PROPRIEDADES ENUMERAVEIS
//usa-se com OBJETOS
//cuidado ao usar com arrays e strings

//Exemplo
    var person = {
        name: 'Guilherme',
        age: 27,
    };
    for(var data in person) {
        console.log(data, person[data]);
    };

// FOR OF
//          for(var variable of elementoIteravel);
//aplicar para ELEMENTOS ITERÁVEIS
//usa-se com ARRAYS, STRINGS
//não usar com objetos

//Exemplo
    var musicians = ['Vinícius', 'Tom', 'João'];
    for(var musician of musicians){
        console.log(musician);
    };

//Exercício: for in
// Considere os valores.
//Para este exercício considere a variável bart, 
//que armazena um objeto literal com diferentes propriedades e valores. 
//Queremos que, utilizando um for in, imprima no console os valores de 
//cada propriedade desse objeto.

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for(var data in bart) {
    console.log(data, bart[data]);
};


//Exercício: for of
// Da horizontal para a vertical.
// Temos uma frase declarada e queremos experimentar um pouco.
// Imprima no console cada letra para que a frase seja escrita na vertical.
// Já sabe qual sentença você vai usar desta vez

let frase = "Essa semana vou no colearning";
for(var letra of frase){
    console.log(letra);
};