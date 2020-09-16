const moment = require('moment');

//moment traz a hora, data em formatos diferentes
console.log(moment().format());
    //2020-09-16T01:35:28+01:00

//Desafio
//Exibir data atual no formato BR: 15/09/2020

moment. locale('pt-BR');
console.log(moment(). format('DD MM YYYY'));
console.log(moment(). format('DD/MM/YYYY'));
console.log(moment(). format('DD MM YYYY HH:mm'));

//Desafio
//Trazer a diferenca de dias entre 15/09/2005 e 15/05/2020
//a quantidade de dias E meses entre essas datas
//utilizando a biblioteca moment e a biblioteca date fns 

