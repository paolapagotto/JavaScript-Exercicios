const listarPets = (pets) => {
    pets.forEach(pet => {
        console.log('nome: ' + pet.nome);
        console.log('tipo: ' + pet.tipo);
    })
};

const validaDados = (novoPet) => {
    return (
        // novoPet.id &&
        novoPet.nome &&
        novoPet.tipo &&
        novoPet.raca &&
        novoPet.idade &&
        novoPet.genero &&
        // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
        typeof novoPet.vacinado == "boolean"
    )
}

const cadastrarPet = (pets, objetoPet) => {
    if (typeof objetoPet == "object") {
        if (validaDados(objetoPet)) {

            let novoObjeto = {
                id: pets.length + 1,
                ...objetoPet
            }

            pets.push(novoObjeto)
            console.log(pets)
        } else {
            console.log("O objeto não tem todas propriedades necessárias informadas")
        }
    } else {
        console.log("Insira um objeto válido")
    }
}

const cadastrarPetsDoJsonSpreadOperator = (pets, json) => {
    let arrayPets = JSON.parse(json)
    pets.push(...arrayPets)
    return pets
}


module.exports = {
    listarPets,
    validaDados,
    cadastrarPet,
    cadastrarPetsDoJsonSpreadOperator
};