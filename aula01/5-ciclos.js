//Ciclos

// FOR

for (inicio; condição; modificador){
    //código que se executa em cada repetição;
}

for(let volta = 1; volta <= 5; volta++){
    console.log('Dando a volta número ' + volta);
}

var texto = ' '; 
function papagaio(texto){
	for(let i = 0; i <5; i++){
		console.log(texto);
	}
}

function naoPareDeContarImparesAte(numero){
    var qntNumImpares=0;
    for(let i=0; i<=numero; i++){
        if( i%2 != 0){
            qntNumImpares += 1;
        }
    } return qntNumImpares;
}

//WHILE

while(condição){
    //bloco de código que se executa se a condição é verdadeira
}

var contador = 0;
while(contador <= 4){
    contador++;
    console.log('Contador: ' + contador);
}

// DO WHILE

do{
    //bloco de código que se executa ao menos uma vez
    // e cada volta se a condição é verdadeira
} while(condição)

var diaSemana = 1;
do{
    console.log('Dia da semana No. ' + diaSemana);
    diaSemana++;
} while(diaSemana <= 7)


function count(inicio, fim) {
    //Escreva seu código aqui
    while(inicio < fim){
        console.log('O número atual é ' + inicio + ' e é menor que ' + fim);
    }
}

function findFive(array){
    var i = 0;
    do{
        if(array[i] == 5){
            console.log("Encontramos um 5!")
            break;
        } else {
            console.log(array[i]);
            i++;
        }
    } while (i < array.length);
}

findFive([1,3,6,7,6,5,7,9]);
findFive([5,1,3,6,7,6,5,7,9]);
findFive([1,5,6,7,6,5,7,9]);
findFive([1,3,6,7,6,8,7,5]);
findFive([1,3,6,7,6,8,7]);

function encontreUm5(numeros){
    var i = 0;
    do{
        if(numeros[i] == 5){
            console.log("Encontramos um 5!")
            break;
        } else {
            console.log(numeros[i]);
            i++;
        }
    } while (i < numeros.length);
}

function tabelaDeMultiplicacao(numero) {
    //Escreva seu código aqui
    var i = 1
    while(i <= 10){
        console.log( numero + ' * ' + i + ' = ' + (numero*i));
        i++;
    }
}
tabelaDeMultiplicacao(2);

