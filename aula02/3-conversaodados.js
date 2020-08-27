/*
Os dados podem ser:


Numérico (number)

Sequências de caracteres (string)

Lógico ou Booleano (boolean)

Objeto (object)

Array (objeto!)

Também existem dados especiais que permitem ao JavaScript determinar estados especiais que os dados podem ter.


Estes são:


NaN (Não é um número)

NULL (valor nulo)

undefined (valor indefinido)
*/

var nomeDaVariavel;

typeof // operador que se escreve antes da variável
nomeDaVariavel // variável que deseja consultar o tipo de dados

console.log(typeof nomeDaVariavel); // retorna undefined


//Métodos de Conversão

Number(); // É uma função nativa do JavaScript que converte uma String em um Número (int ou float)

Number('31'); // retorna 31
Number('1.57'); // retorna 1.57
Number('-3.24'); // retorna -3.24
Number('100 anos'); //retorna NaN
Number('   5   '); // retorna 5
Number(true); // retorna 1

parseInt(); // É uma função nativa do JavaScript que recebe uma String e que transforma e retorna um número INTEIRO

parseInt('12'); // retorna 12
parseInt('   3   '); // retorna 3
parseInt('18.9'); // retorna 18
parseInt('-3'); // retorna -3
parseInt('n405'); // retorna NaN

parseInt('34-F-45'); // retorna 34
parseInt('1o. Jogo'); // retorna 1

parseInt('lista21'); // retorna NaN
parseInt('*42.3'); // retorna NaN

parseFloat(); // É uma função nativa do JavaScript que recebe uma String e que transforma e retorna um número COM DECIMAIS

parseFloat('12,6') // retorna 12
parseFloat('   6.7   ') // retorna 6.7
parseFloat('11.9e') // retorna 11.9
parseFloat('-4.32') // retorna -4.32
parseFloat('9,57') // retorna 9

parseFloat('56.7-f-25.8') // retorna 56.7
parseFloat('78.74%') // retorna 78.74

parseFloat('resultado: 79.3%') // retorna NaN
parseFloat('*42.3') // retorna NaN

String(); // É uma função nativa do JavaScript que converte o valor passado em uma String

String(3005); // retorna '3005'
String(true); // retorna 'true'
String(['João', 'Maria']); // retorna 'João, Maria'

String({nome: 'Rosa'}); // retorna "[object Object]"

var chove = true;
String(chove); // retorna 'true'

var numberA = 5;
var numberB = 12;
numberA + numberB; // soma os números e devolve 17
String(numberA) + String(numberB); // converte os números em String, concatena e devolve '512'









