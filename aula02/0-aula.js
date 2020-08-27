let organizacao = 'Petshop Node';
var petsArray = ['Yoshi', 'Snoop', 'Ghost'];
console.log(organizacao);

//função para listar os pets do array
function listPets(petsArray){
    for(let i = 0; i < petsArray.length; i++){
        console.log(petsArray[i]);
    }
}
listPets(petsArray);

let petsObject = [
    {
        nome: 'Snoop',
        tipo: 'cachorro',
        raca: 'Beagle',
        idade: 5,
        genero: 'Masculino',
    },
    {
        nome: 'Batata',
        tipo: 'passaro',
        raca: 'Calopsita',
        idade: 2,
        genero: 'Feminino',
    }
];

for(let i=0; i<petsObject.length; i++){
    console.log("Nome: " + petsObject[i].nome);
    console.log("Tipo: " + petsObject[i].tipo);
}

function listPetsObject1(petsObject){
    for(let i=0; i < petsObject.length; i++){
        console.log(Object.values(petsObject[i]));
    }
}
listPetsObject1(petsObject);

function listPetsObject2(petsObject){
    for(let i=0; i < petsObject.length; i++){
        console.log('Nome: '+ petsObject[i].nome + ' ; ' + 'Tipo: '+ petsObject[i].tipo);
    }
}
listPetsObject2(petsObject);


let novoPet = {
    nome: 'desconhecido',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 0,
    genero: 'desconhecido',
}

function validaNovoPet(){
    return(novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero);
}
validaNovoPet(novoPet);

/*function cadastrarNovoPet(){
    if(validaNovoPet == novoPet){
        petsObject.push(novoPet);
        console.log(petsObject);
    } else {
        console.log('O Objeto não tem todas as propriedades necessárias');
}*/

function cadastrarNovoPet(){
    if(typeof novoPet == "object"){
        petsObject.push(novoPet);
        console.log(petsObject);
    } else {
        console.log('O Objeto não tem todas as propriedades necessárias');
    }
}
cadastrarNovoPet(novoPet); 


/*
function accPet(nome,tipo,raca,idade,genero){
    pets.push({"nome":nome,"tipo":tipo,"raca":raca,"idade":idade,"genero":genero});
}
*/

/* 
function adicionarPet(nome, tipo, raca, idade, genero){
    let novoPet = {
        nome: nome,
        tipo: tipo,
        raca: raca,
        idade: idade,
        genero: genero
    }
    petsObject.push(novoPet);
    console.log(petsObject);
}
*/



// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
function validaDados(novoPet){
    return (novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado)
}
  ​
// criando função de cadastrar um novo pet dentro da nossa lista de pets que nada mais é que a variável pets
// que é o nosso array de objetos, ou seja, essa função tem propósito de adicionar um objeto contendo todas
// as propriedades válidas (nome, tipo, raca, idade e genero) para que tenhamos um novo elemento/pet dentro 
// da nossa lista de pets
function cadastrarPet(objetoPet) {
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        pets.push(objetoPet)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    }
}
  

//DESAFIO

//função para verificar animais vacinados e os que precisam de vacina.
//lembrando que esta função irá receber um parâmetro, podendo ser um único pet da lista ou lista toda
//extra: criar lista de vacinados e não vacinados
//
//mensagem "o pet nome_do_pet já está vacinado."


let novoPetVacinado = [
    {
        nome: "nome",
        tipo: "tipo",
        raca: "raca",
        idade: 0,
        genero: "genero",
        vacinado: true,
    }
]

function animaisVacinados ()