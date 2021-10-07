// Manipulando Strings e Números

// ** Transformar String em Número e Número em String
/*
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))
*/

// ** Contar caracteres tem uma palavra ou quantos números tem um número:
/*
let word = "Paralelepípedo"
console.log(word.length)
let number = 12345
console.log(String(number).length)
*/

// ** Transformar um número quebrado com 2 casa decimais:
// trocar ponto por vírgula
/*
let number = 594.4584956395
console.log(number.toFixed(2).replace(".", "."))
*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.
/*
let word = 'Programar é muito bacana!'
console.log(word.toUpperCase())
console.log(word.toLowerCase())
*/

// ** Separe um texto que contem espaços em um novo array no qual cada texto é uma posição de array.
// ** Transforme o array em um texto e substitua os espaços por underscore (_)
/*
let phrase = "Eu quero viver o Amor!" // String com espaços
let myArray = phrase.split(" ") // Convertido em Array
console.log(myArray)
let phraseWithUnderscore = myArray.join("_") // Convertido em String com Underscore
console.log(phraseWithUnderscore)
*/

// ** Verificar se o texto contém a palavra Amor:
/*
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))
*/

// ** Criar Array com constructor
/*
let myArray = new Array(10)
console.log(myArray)
*/

// ** Contar elementos de um Array:
//console.log(["a", "b", "c"].length)

// ** Transformar uma cadeia de caracteres em elementos de um Array:
/*
let word = "manipulação"
console.log(Array.from(word))
*/

// ** Manipulando Arrays
let techs = ["html", "css", "js"]
// adicionar um item no fim:
techs.push("nodejs")
// adicionar no começo:
techs.unshift("sql")
// remover do fim:
// techs.pop()
// remover do começo:
// techs.shift()
// pegar somente alguns elementos do Array:
// console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do Array:
// techs.splice(1, 2)
// encontrar a posição de um elemento no Array:
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)