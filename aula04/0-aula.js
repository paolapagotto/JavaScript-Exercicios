const json = require('./json')


let pets = [
    {
        nome: 'Snoop',
        tipo: 'cachorro',
        raca: 'Beagle',
        idade: 5,
        genero: 'Masculino',
        vacinado: false,
        id: 1,
    },
    {
        nome: 'Batata',
        tipo: 'passaro',
        raca: 'Calopsita',
        idade: 2,
        genero: 'Feminino',
        vacinado: true,
        id: 2,
    },
    {
        nome: 'Ghost',
        tipo: 'cachorro',
        raca: 'Dire Wolf',
        idade: 8,
        genero: 'Masculino',
        vacinado: true,
        id: 3,
    },
    {
        nome: 'Drogo',
        tipo: 'dragão',
        raca: 'Dracarys',
        idade: 6,
        genero: 'Masculino',
        vacinado: false,
        id: 4,
    }
];

let novoPet = {

    nome: 'desconhecido',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 0,
    genero: 'desconhecido',
    vacinado: true,
    id: 0,
}


// Desafio - filtrar todos pets com um determinado nome, ou, se não encontrar nenhum pet para retornar
// exibir uma mensagem de que não encontrou nenhum pet com aquele nome informado
// const filtraPetPorNome = (nome) => {
//     let petsFiltrados = pets.filter((pet) => {
//       return pet.nome == nome
//     })
//   ​
//     if(petsFiltrados.length == 0){
//       return "Nenhum pet foi encontrado com o nome " + nome
//     } else {
//       return petsFiltrados
//     }
// }
// console.log(filtraPetPorNome('Yoshi'))
  

// DESAFIO 1 pesquisar/analisar uma forma melhor de solucionar o problema da propriedade de ID
function uniqueid(){  
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        var idcode=Math.floor((Math.random()*42)+48);
        if (idcode<58 || idcode>64){
            idstr+=String.fromCharCode(idcode);    
        }                
    } while (idstr.length<16);
    return (idstr);
}
  var pets2 = pets.map(function(e) {
      if(e.Id == undefined || e.Id == 0 ) {
        var obj = Object.assign({},e);
        obj.Id = uniqueid()
      } else {
        var obj = Object.assign({},e);
    }
      return obj;
  })
    console.log(pets2);


//Desafio2
//remover um pet especifico

const removerPet = (id) => {
    let pet = pets.filter((pet) =>{
        return pet.id == id;
    })

    if(pet.length !=0) {
        pets.splice(id - 1, 1)
        console.log(pets)
    } else {
        console.log("Nenhum pet foi econtrado com o id " + id)
    }
}

/* 
aprimorar a função para passar o ID como primeira propriedade
pode resolver utilizando o spread operator para criar um objeto e depois de
adicionar o ID, aí sim unir com o restante do objeto que estamos recebendo
com todas as outras propriedades, podemos avaliar o resultado na função cadastrarPet
*/

const removerPet = (id) => {
    let pet = pets.filter(pet) => {
        return pet.id 
    }
    pets.splice()
}



//Desafio3
//alterar um pet específico

const atualizaPet = (id, objeto) => {
    let pet = pets.find(pet => pet.id == id)
    for( var propriedade in objeto){
        if(propriedade == "nome"){
            pet.nome = objeto[propriedade]
        }
        if(propriedade == "tipo"){
            pet.tipo = objeto[propriedade]
        }
        if(propriedade == "raca"){
            pet.raca = objeto[propriedade]
        }
        if(propriedade == "idade"){
            pet.idade = objeto[propriedade]
        }
        if(propriedade == "genero"){
            pet.genero = objeto[propriedade]
        }
        if(propriedade == "vacinado"){
            pet.vacinado = objeto[propriedade]
        }
        if(propriedade == "id"){
            pet.id = objeto[propriedade]
        }
    }
    console.log(pet);
}

let objPetAtualizado = {
    nome: "atualizado",
    tipo: "atualizado",
    raca: "siames",
    idade: 3,
    genero: "feminino",
    vacinado: false,
    id: 7,
}

atualizaPet(2, objPetAtualizado);


