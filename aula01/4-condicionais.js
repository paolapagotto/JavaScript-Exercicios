//Condicionais

//if
/*
if(condição){
    //código a executar se a condição é verdadeira
}

//if + else

if(condição){
    //código a executar se a condição é verdadeira
} else {
    //código a executar se a condição é falsa
}

//if + else if + else

if(condição){
    //código a executar se a condição é verdadeira
} else if(outracondiçao){
    //código a executar se a outra condição é verdadeira
} else {
    //código a executar se a condição é falsa
}
*/

// if ternario 

/* horizontal, ambas estruturas têm o mesmo fluxo interno
se esta condição é verdadeira, faça isso, se não, faça esse outro
mas neste caso não é necessário escrever a palavra if, nem else.
*/

//4 > 10 ? 'O 4 é maior' : 'O 10 é maior'; 

// Switch

/* O Switch é composto por uma expressão a avaliar, 
seguida de diferentes casos, quantos quisermos, 
cada um contemplando um cenário diferente. */
/*
switch (expressão){
    case valorA:
        //código que se executa se o valorA é verdadeiro;
        break;
    case valorB:
        //código que se executa se o valorB é verdadeiro;
        break;
    default:
        //código que se executa se nenhum caso é verdadeiro;
}

//Exemplo:
var idade = 5;
switch(idade){
    case 10:
        console.log('Tem 10 anos');
        break;
    case 5:
        console.log('Tem 5 anos');
        break;
    default:
        console.log('Não existe essa idade');
}

let dia = 'segunda-feira';

switch(dia){
    case 'sexta-feira':
        console.log('Bom fim de semana!');
        break;
    case 'segunda-feira':
        console.log('Boa semana!');
        break;
    default:
        console.log('Bom dia!');
}


let dia = "sabado";
function fimDeSemana(dia){
	switch(dia){
		case "sabado":
			console.log("você não tem aulas");
			break;
	    case "domingo":
			console.log("você não tem aulas");
			break;
		default:
			console.log("você tem aulas!")
		}
}
fimDeSemana(dia);

let dia = "sabado";
function fimDeSemana(dia){
	switch(dia){
		case 'segunda-feira':
			console.log("você tem aulas!");
			break;
	    case 'quarta-feira':
			console.log("você tem aulas!");
			break;
		case 'sexta-feira':
			console.log("você tem aulas!");
			break;
		default:
			console.log("você não tem aulas!");
		}
}
fimDeSemana(dia);

let dia = 'segunda-feira'
*/


function fimDeSemana(dia) {	

    var variavel = 
        dia == 'sexta-feira' ? 'Bom fim de semana!' : 
        dia == 'segunda-feira' ? 'Boa semana!' : 'Bom dia!';

	/*if (dia == 'sexta-feira') {
    	console.log('Bom fim de semana!')
	} else if (dia == 'segunda-feira') {
    	console.log('Boa semana!')
	} else {
    	console.log('Bom dia!')
	}*/
    console.log(variavel);
}

fimDeSemana('sexta-feira');
fimDeSemana('segunda-feira');
fimDeSemana('quarta-feira');