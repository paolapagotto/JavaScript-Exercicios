//Destructuring

//nos permite extrair dados de arrays e objetos literais

//para extrair dados de um array:
let colors = ['red', 'blue', 'yellow'];
let blue = colors[1];
console.log(blue);

//para extrair dados de um objeto
let car = {
    brand: 'Ford',
    year: 1998,
};
let brandCar = car.brand;
console.log(brandCar);

// Array
let array = ['red', 'blue', 'yellow'];
//let [color1, color2, color3] = array;
let [color1, color2] = array;
console.log(color2)

// Objetos
let person = { name: 'Paola', age: 31, presences: 3};
let {name, age} = person;
//let{name, presences} = person;

//a desestruturação não modifica o array ou o objeto literal de origem
//seu único objetivo é copiar os valores de forma mais prática e rápida

//Exercício
// Desestruturando..
// Para este exercício, já temos uma array de destinos mundiais.
// Queremos que, usando a desestruturação, você defina 
// as variáveis ​​bariloche e china e extraia apenas os destinos
// "Bariloche" e "China" da array


let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [city1, city2, city3, city4, city5] = destinosIncriveis;
console.log(city2,city4);