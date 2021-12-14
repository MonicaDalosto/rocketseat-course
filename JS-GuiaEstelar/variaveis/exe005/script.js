//  1. Declare uma variável de nome weight
let weight

//  2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
const person = {
    name: 'Ana',
    age: 25,
    stars: 4.56,
    isSubscribed: true
}
console.log(person)
console.log(`${person.name} tem ${person.age} anos, recebeu ${person.stars} estrelas e a sua subscrição possui valor ${person.isSubscribed}!`)

/*  
    4. A variável student abaixo é de que tipo de dados?
    
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {};
console.log(typeof student)

student = {
    name: 'Ana',
    age: 25,
    stars: 4.56,
    isSubscribed: true,
    weight: 52
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*  
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let students = []

/*  
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o texto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]
console.log(students)

/*  
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student1 = {
    name: 'Bruno',
    age: 28,
    stars: 3.2,
    isSubscribed: true,
    weight: 78
}

// sabendo a posição dentro do Array:
//students[1] = student1

// sem saber a próxima posição livre dentro do Array:
students.push (
    student1
)

console.log(students[1])
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porquê? Após sua resposta, rode o código e veja se você acertou.
    
    console.log(a)
    var a = 1
*/

console.log(a)
    
var a = 1