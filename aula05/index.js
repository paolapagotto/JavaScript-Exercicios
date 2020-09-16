//Aula NodeJS

//npm
// require('./') / module.exports = obj 

const json = require('./json')
const { listarPets,
        validaDados,
        cadastrarPet,
cadastrarPetsDoJsonSpreadOperator} = require('./petshop')

const {
    calcular,
    somar,
    subtrair,
    dividir,
    multiplicar,
} = require('./calculadora')


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
    nome: 'nome',
    tipo: 'tipo',
    raca: 'raca',
    idade: 0,
    genero: 'genero',
    vacinado: false,
}

let objetoPet = {
    nome: 'Novo Pet 2',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 3,
    genero: 'desconhecido',
    vacinado: false,
};

listarPets(pets);
console.log(validaDados(novoPet));
cadastrarPet(pets, objetoPet);
console.log(cadastrarPetsDoJsonSpreadOperator(pets, json));

calcular(2, 3, somar);
