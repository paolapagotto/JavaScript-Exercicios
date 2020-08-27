console.log('Hello World');
console.log('Paola');


//variáveis: 

let nome = 'Paola';
console.log(nome);

let sobrenome = 'Pagotto';
console.log(sobrenome);

let idade = 30;
console.log(idade);

let altura = 1.57;
console.log(altura);

//Booleans

var verdadeiro = true;
var verdadeiro2 = 1;

var falso1 = false;
var false2 = 0;

var falso3 = null 

let diaChuvoso = true;
console.log(diaChuvoso);

let vouAPraia = false;
console.log(vouAPraia);

//NaN = Not a Number
let naoNumerico = NaN;
console.log(naoNumerico);

// null (valor nulo)
let jogadores = null;
console.log(jogadores);

// undefined (valor indefinido)
let espectadores = undefined;
espectadores = 10; // definir valor da variável depois de declarada
console.log(espectadores);

/*Objeto Literal 
(conjunto de informações/dados/propriedades em uma única variável
separados por vírgulas) */
let objetoLiteral = {
    tipo: "tipo",
    modelo: "modelo",
    ano: "ano"
}
console.log(objetoLiteral);

let user = {
    name: 'name',
    age: 'age',
    gender: 'gender',
    status: 'status',
}
console.log(user);

//Array (índice começa sempre do ZERO)
let series = [ 'Friends', 'GoT', 'Lucifer', 'Vikings'];
console.log(series);
console.log(series.length); // .length retorna o tamanho do array
console.log(series.indexOf('Friends')); // array.indexOf() retorna o indice do elemento dentro do array
console.log(series.indexOf('Vikings'));


Math.round() // retorna o valor arredondado para inteiro mais proximo

parseInt(string, base); // 2 < base < 36 | base 10 sistema numerico decimal humano
intValue.toString(base); // para converter um número para seu literal string em uma base específica

Number(value); 