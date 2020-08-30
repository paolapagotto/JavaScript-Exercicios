var array = [1, "string", 1.57];
console.log(array);

let listaNome = ["Paola", "Maria", "Joana", "Catarina"];

//Métodos Array
listaNome.push("Ana"); //push acrescenta no fim no array
listaNome.pop(); // pop retira o último elemento do array e retorna o útimo
listaNome.unshift("Clara"); // unshift acrescenta elemento no indice 0 do array
listaNome.shift(); //shift retira o elemento do índice zero do array e retorna o primeiro elemento (listaNome[0])
listaNome.indexOf("Maria"); //indexOf retorna o índice de um elemento e se o elemento existe no array
listaNome.lastIndexOf("Joana"); //o mesmo do indexOf, mas começa a buscar pelo final do array
listaNome.includes("Maria"); // faz o mesmo que o indexOf, mas retorna valor booleano (true/false) 
listaNome.join();//join gera uma string com o conteúdo do array, separado por vírgula, quando não recebe parametro
listaNome.join(' - '); // gera uma string com o conteudo do array separado por traço, ou outro parametro inserido


//Fusão de dois Arrays 
//utiliza apply() para adicionar todos os elementos de um segundo array
var vegetables = ['carrot', 'potato'];
var moreVegetables = ['cauliflower', 'cucumber', 'tomato']

Array.prototype.push.apply(vegetables, moreVegetables);
console.log(vegetables);

//Utilizando um Object como um Array-like

var obj = {
    length: 0,

    addElem: function addElem(elem) {
        //obj.length é automaticamente incrementado
        //toda vez que um elemento for adicionado
        [].push.call(this, elem);
    }
};
//vamos adicionar alguns objetos vazios apenas para ilustrar.
obj.addElem({});
obj.addElem({});
//console.log(obj.length); //retorna 2


//Exercício: Push
// Novos estudantes se inscreveram! Desejamos adicioná-los ao final do array estudantes.
// Seu trabalho será acrescentar um aluno de cada vez ao array de estudantes. 
// Utilize um dos métodos de array.
//     Os valores de cada aluno são:

//     nome: João
//     media: 5
//     curso: iOS
//     ------------------
//     nome: Miguel
//     media: 2
//     curso: Android

let estudantes1 = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
]
  
let novoEstudante1 = {
    nome: 'João',
    media : 5,
    curso : 'iOS',
    
}
estudantes1.push(novoEstudante1);

let novoEstudante2 = {
    nome: 'Miguel',
    media : 2,
    curso : 'Android',
    
}
estudantes1.push(novoEstudante2);

console.log(estudantes1);

// Um aluno desistiu!
//     Temos que dar baixa no primeiro estudante do array estudantes. 
//     Para isso, pedimos que crie uma variável chamada alunoDesistente e que, 
//   utilizando um método de array, armazene nela esse primeiro estudante.

let estudantes2 = [
    {
       nome: 'Álvaro',
       media : 9,
       curso : 'Android',
    },
    {
        nome: 'Daniel',
        media : 6,
        curso : 'Full Stack',
    },
    {
        nome: 'Alexis',
        media : 3,
        curso : 'iOS',
    },
]
let alunoDesistente = estudantes2.shift();
console.log(alunoDesistente);

// Exercício: unshift
// Alguns alunos foram reintegrados!

//     Agora você tem a tarefa de reintegrar dois alunos ao início do array! 
//     Para isso, utilize um método do array!
//     Os dados dos alunos que devem ser acrescentados são os seguintes:

//     nome: "Mariana",
//     media: 9,
//     curso: "Full Stack"
//     -------------------------
//     nome: "Francisco",
//     media: 2,
//     curso: "Android"

let estudantes3 = [
    {
      nome: 'Alvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    },
    {
      nome: 'Alexis',
      media : 3,
      curso : 'iOS',
    }
]

let alunoReintegrado1 = {
    nome: 'Mariana',
    media : 9,
    curso : 'Full Stack',
}

let alunoReintegrado2 = {
    nome: 'Francisco',
    media : 2,
    curso : 'Android',
}

estudantes3.unshift(alunoReintegrado1, alunoReintegrado2);
console.log(estudantes3);