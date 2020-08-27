//Método é uma função que pertence a um objeto (String, nesse caso)

//length
'string'.length;
console.log('I like pizza'.length);
    //12    
    
let minhaSerie = 'Game of Thrones'
console.log(minhaSerie.length);
    //15

let personagensSerie = ['Arya', 'Jon', 'Sansa'];
console.log(personagensSerie.length);
    //3

//indexOf
'Hello World'.indexOf('World');
'Hello World'.indexOf('Pizza'); //retorna -1 = não encontrado
console.log('I like pizza'.indexOf('pizza'));
    //7
console.log('I like pizza'.indexOf('I'));
    //0

//slice
console.log('I like pizza'.slice(0,6));
    //I like

//trim (remover espaços em branco do inicio e do fim da string, não do meio)
console.log('   I like pizza    '.trim()); //não recebe parâmetros
    //I like pizza

//split
console.log('I like pizza'.split()); //se não receber parâmetro, retorna a string dentro de um array 
    //[ 'I like pizza' ]
console.log('I like pizza'.split(' ')); //recebe como parâmetro onde/qnd fará o split
    // [ 'I', 'like', 'pizza' ]
console.log(minhaSerie.split(' '));
    //[ 'Game', 'of', 'Thrones' ]

//replace
console.log('I like pizza'.replace('pizza', 'hamburguer'));
    //I like hamburguer
console.log(minhaSerie.replace('Game', 'War'));
    //War of Thrones

//Exercício: Completar a URL
function dominio (string){
    return "http://" + string;
}
console.log(dominio('br.digitalhouse.com'));

//Exercício: Conta os caracteres
let texto = 'texto';
console.log(texto.length);

//Exercício: Substituição rápida
let a = '';
let b = '';
let c = '';

function substituicaoRapida(a, b, c){   
       return a.replace(b, c);
}

let textoNovo = substituicaoRapida('Boa tarde','tarde','noite');
console.log(textoNovo);

//Exercício: Está falando de mim?
let textao = '';
let palavra = '';

function menciona(textao, palavra){
    return textao.indexOf(palavra) !== -1;
}
console.log(menciona('Existem muitas linguagens de programação e javascript é uma delas','programação'));

//Exercício: Apenas o nome
let stringDeclarada = "Olá, sou Carlos!";
let nomeUsuario = stringDeclarada.slice(9,15);
console.log(nomeUsuario);