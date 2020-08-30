//Desafio02

/*
irá receber uma frase e terá que alterar uma palavra determinada (VBA) por outra (JavaScript),
fazer com arrow function, terá que ser resolvido em uma linha
e com um return implícito, ou seja, sem utilizar a palavra return dentro da função

frase: 'Gosto muito de programar em VBA.
*/

let frase = 'Gosto muito de programar em VBA.';
let palavra = 'VBA';
let palavraNova = 'JavaScript';

let substituirPalavra = (p1, p2, p3) => p1.replace(p2, p3);
let fraseNova = substituirPalavra(frase, palavra, palavraNova);
console.log(fraseNova);


