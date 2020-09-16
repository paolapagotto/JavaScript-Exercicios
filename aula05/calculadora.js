// callbacks

const calcular = (numero1, numero2, operacao) => {
    operacao(numero1, numero2)
    console.log("A operação foi realizada com sucesso")
}
  
const somar = (numero1, numero2) => {
    console.log(numero1 + numero2)
}
  
const subtrair = (numero1, numero2) => {
    console.log(numero1 - numero2)
}
  
const dividir = (numero1, numero2) => {
    console.log(numero1 / numero2)
}
  
const multiplicar = (numero1, numero2) => {
    console.log(numero1 * numero2)
}

// calcular(10, 5, soma)

module.exports = {
    calcular,
    somar,
    subtrair,
    dividir,
    multiplicar,
}