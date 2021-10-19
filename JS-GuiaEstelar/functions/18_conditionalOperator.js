// Operador Condicional (ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição   então   valor1   se não   valor2
// condition    ?     value1     :      value2

// Exemplos

// Café da manhã top:
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'O café da manhã é bom!' : 'O café da manhã é ruim'

console.log(niceBreakfast)

// Maior de 18
let age = 16
const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)