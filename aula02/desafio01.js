const json = require('./json');
//JSON - importando (deve estar na mesma pasta do file.)


//DESAFIO

//função para verificar animais vacinados e os que precisam de vacina.
//lembrando que esta função irá receber um parâmetro, podendo ser um único pet da lista ou lista toda
//extra: criar lista de vacinados e não vacinados
//
//mensagem "o pet nome_do_pet já está vacinado."


let pets = [
    {
        nome: 'Snoop',
        tipo: 'cachorro',
        raca: 'Beagle',
        idade: 5,
        genero: 'Masculino',
        vacinado: false,
    },
    {
        nome: 'Batata',
        tipo: 'passaro',
        raca: 'Calopsita',
        idade: 2,
        genero: 'Feminino',
        vacinado: true,
    },
    {
        nome: 'Ghost',
        tipo: 'cachorro',
        raca: 'Dire Wolf',
        idade: 8,
        genero: 'Masculino',
        vacinado: true,
    },
    {
        nome: 'Drogo',
        tipo: 'dragão',
        raca: 'Dracarys',
        idade: 6,
        genero: 'Masculino',
        vacinado: false,
    }
];

let novoPet = {

    nome: 'desconhecido',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 0,
    genero: 'desconhecido',
    vacinado: true,
}

var petsVacinados = [];
var petsNaoVacinados = [];


function validaPet(novoPet){
    return (novoPet.nome && 
    novoPet.tipo && 
    novoPet.raca && 
    typeof novoPet.idade == "number" &&
    novoPet.genero && 
    typeof novoPet.vacinado == "boolean");
} 

function cadastrarPet(petsLista, novoPet) {
    if(typeof novoPet == "object"){
      if(validaPet(novoPet)){
        petsLista.push(novoPet)
        console.log(petsLista)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else{ 
      console.log("Insira um objeto válido")
    }
} 

function verificaAnimaisVacinados(petsLista){
    for(var i = 0; i < petsLista.length; i++){
        if(petsLista[i].vacinado){
            console.log(petsLista[i].nome + ' já está vacinado.');
            petsVacinados.push(petsLista[i]);
        } else {
            console.log(petsLista[i].nome + ' precisa ser vacinado.');
            petsNaoVacinados.push(petsLista[i])
        }
    } 
    return [petsVacinados, petsNaoVacinados];
}

function listarPets(texto, array) {
    for (let i = 0; i < array.length; i++) {
        texto += array[i].nome + (i < (array.length - 1) ? ', ' : '.');
    }
    return texto;
}

function encontrarPet(petsLista, nomePet){
    for(let i = 0; i < petsLista.length; i++){
        if(petsLista[i].nome == nomePet){
            if(petsLista[i].vacinado){
                return petsLista[i].nome + ' já está vacinado.';
            }
            return petsLista[i].nome + ' ainda não foi vacinado.'; 
        } 
    }
    return nomePet + ' não está cadastrado.';
}

//Desafio criar uma função callback chamada serviços
//como parametro vai receber o pet da lista e o servico
//os servicos são dar banho no pet ou tosar o pet


function banhoPet(petsLista, petsBanho, nomePet){
    
    for(let i = 0; i < petsLista.length; i++){
        if(petsLista[i].nome == nomePet){
          petsBanho.push(nomePet);
          return "O pet " + nomePet + " está tomando banho."; 
        } 
    }
    return nomePet + ' não está cadastrado.';
}


function tosaPet(petsLista, petsTosa, nomePet){
    for(let i = 0; i < petsLista.length; i++){
        if(petsLista[i].nome == nomePet){
            petsTosa.push(nomePet);
          return "O pet " + nomePet + " está sendo tosado."; 
        } 
    }
    return nomePet + ' não está cadastrado.';
}

function servicoPet(petsLista, petsServico, nomePet, servico){
    return servico(petsLista, petsServico, nomePet);
}


function cadastrarNovosPets(petsLista, novosPets){ 
    var novosPetsObj = JSON.parse(novosPets)   
    petsLista.push(...novosPetsObj); //spread operator
    return petsLista;
}


console.log(servicoPet(pets,'Drogo', banhoPet));
console.log(petsBanho);


console.log(json);

cadastrarPet(pets, novoPet); 

console.log(cadastrarNovosPets(pets, json));

console.log('\nLista completa: ');
let verificados = verificaAnimaisVacinados(pets);

console.log('\nExtra: ');
let v = listarPets('Vacinados: ', petsVacinados);
console.log(v);
let nv = listarPets('Não vacinados: ', petsNaoVacinados);
console.log(nv);

console.log('\nVerifica pet por nome: ');
let petVacinado = encontrarPet(pets, 'Drogo');
console.log(petVacinado);