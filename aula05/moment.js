const moment = require('moment');
const fns = require('date-fns');

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
//Trazer a diferenca de dias entre 15/09/2005 e 15/09/2020
//a quantidade de dias E meses entre essas datas
//utilizando a biblioteca moment e a biblioteca date fns 


//MOMENT JS

const pastDate = moment("2005-09-15");
const presentDate = moment("2020-09-15");
const duration = moment.duration(presentDate.diff(pastDate));

const days = duration.asDays();
const months = Math.ceil(duration.asMonths());


const differenceDays = presentDate.diff(pastDate, 'days');
const differenceMonths = presentDate.diff(pastDate, 'months');
const differenceYears = presentDate.diff(pastDate, 'years');

console.log(days);
console.log(months);

console.log("A diferença entre as datas é de: " + days + " dias.");
console.log("A diferença entre as datas é de: " + months + " meses.");

console.log(differenceDays);
console.log(differenceMonths);
console.log(differenceYears);

//DATE-FNS

const pastDateFNS = new Date(2005, 8, 15);
const presentDateFNS = new Date(2020, 8, 15);

const durationDaysFNS = fns.differenceInDays(presentDateFNS, pastDateFNS);
const durationMonthsFNS = fns.differenceInMonths(presentDateFNS, pastDateFNS);

console.log(durationDaysFNS);
console.log(durationMonthsFNS);