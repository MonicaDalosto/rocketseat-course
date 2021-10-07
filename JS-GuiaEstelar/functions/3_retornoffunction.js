
// criando uma function dentro de uma variável
const sum = function(number1, number2) { // os valores number1 e number2 são parâmetros da função e serão substituídos pelo argumento indicado quando eu executar a function.
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)