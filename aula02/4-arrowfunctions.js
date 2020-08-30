// Arrow Functions

// nos permitem escrever funções com uma sintaxe mais compacta

//SOMAR
function somar(a, b){
    return a + b;
}

let somar = (a, b) => a + b;



let dobro = a => a * 2;

// O operador flecha substitui a palavra reservada function

let saudar = () => 'Olá, mundo!';

let dobroNumero = numero => numero * 2;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ';' + data.getMinutes();
}

