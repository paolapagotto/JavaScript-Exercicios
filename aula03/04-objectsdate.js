//Object Date
//objeto para gerar datas e trabalhar com elas

//   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

var myDate = new Date();
//se não escrevermos os argumentos, 
//o objeto Date é gerado com a hora e a data do momento.

//Métodos de DATE

//  .getDate()  //esse método retorna o número do dia do mês de uma data
//retorna um número entre 1 e 31

    var dayOfMyDate = myDate.getDate();
    console.log(dayOfMyDate);

//  .getMonth()  //esse método retorna o número do mês de uma data
//retorna um número entre 0 (Janeiro) e 11 (dezembro)

    var monthOfMyDate = myDate.getMonth();
    console.log(monthOfMyDate);

//  .getDay()  //esse método retorna o dia da semana de uma data
//retorna um número entre 0 (Domingo) e 6 (Sábado)

    var  weekDayOfMyDate = myDate.getDay();
    console.log(weekDayOfMyDate);

//  .getFullYear()  //esse método retorna o ano completo de uma data
//retorna um número entre 1000 e 9999 (4 dígitos)

    var yearOfMyDate = myDate.getFullYear();
    console.log(yearOfMyDate);


//Criando Datas Dinâmicas

    var myBirthDay = new Date(1989,8,23);
    console.log(myBirthDay.getFullYear());
    
//Exercício
// Date: uma classe para lidar com o tempo.
// Você vai criar agora a sua primeira data com  Date... a que você quiser!
// Para começar, você deve criar uma variável data e armazenar nela uma instancia de Date.
// Depois, você terá que configurar a data utilizando os métodos setYear, setMonth e setDate, 
// passando a eles os argumentos correspondentes a cada um

let data =  new Date();

data.setDate(23);
data.setMonth(7);
data.setYear(1989);

console.log(data);