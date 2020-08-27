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

var petsVacinados = [];
var petsNaoVacinados = [];

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

function encontrarPet(lista, nomePet){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].nome == nomePet){
            if(lista[i].vacinado){
                return lista[i].nome + ' já está vacinado.';
            }
            return lista[i].nome + ' ainda não foi vacinado.'; 
        } 
    }
    return nomePet + ' não está cadastrado.';
}

console.log('\nLista completa: ');
let verificados = verificaAnimaisVacinados(pets);
console.log('\nExtra: ');
let listaVacinados = verificados[0];
let listaNaoVacinados = verificados[1];

let v = listarPets('Vacinados: ', listaVacinados);
console.log(v);
let nv = listarPets('Não vacinados: ', listaNaoVacinados);
console.log(nv);

console.log('\nVerifica pet por nome: ');
let petVacinado = encontrarPet(pets, 'Drogo');
console.log(petVacinado);

