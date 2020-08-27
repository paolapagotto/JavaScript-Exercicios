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

    nome: 'Pikachu',
    tipo: 'rato',
    raca: 'Pokemon',
    idade: 24,
    genero: 'Masculino',
    vacinado: true,
}

let novosPets = [
    {
        nome: 'nome 1',
        tipo: 'rato',
        raca: 'Pokemon',
        idade: 22,
        genero: 'Masculino',
        vacinado: false,

    },
    {
        nome: 'nome 2',
        tipo: 'tartaruga',
        raca: 'Pokemon',
        idade: 3,
        genero: 'Masculino',
        vacinado: true,
    }
]


function validaPet(novoPet){
    return (novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado);
}
 
function cadastrarNovoPet(petsLista, novoPet){
    if(typeof novoPet == "object"){
        if(validaPet(novoPet)){
            petsLista.push(novoPet);
        } 
    }
    return petsLista;
}

function cadastrarNovosdePets(petsLista, novosPets){
    for(let i = 0; i < novosPets.length; i++){
        petsLista.push(novosPets[i]);
    } 
}

var petsVacinados = [];
var petsNaoVacinados = [];

function verificaAnimaisVacinados (petsLista){
    for(var i = 0; i < petsLista.length; i++){
        if(petsLista[i].vacinado){
            //console.log(petsLista[i].nome + ' já está vacinado.');
            petsVacinados.push(petsLista[i]);
        } else {
            //console.log(petsLista[i].nome + ' precisa ser vacinado.');
            petsNaoVacinados.push(petsLista[i])
        }
    } 
    return [petsVacinados, petsNaoVacinados];
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

let petVacinado = encontrarPet(pets, 'Filipe');
console.log(petVacinado);
//console.log(verificaAnimaisVacinados(pets));
//cadastrarNovosdePets(pets, novosPets);
//let p = verificaAnimaisVacinados(pets);
//console.log(p[0]);
//console.log(p[1]);


//verificaAnimaisVacinados(pets);

//console.log(cadastrarNovoPet(pets, novoPet));
//console.log(cadastrarNovosdePets(pets, novosPets));