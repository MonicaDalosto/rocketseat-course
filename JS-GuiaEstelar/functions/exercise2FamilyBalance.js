/*
### Sistema de gastos familiares:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

// My solution:

let valueFamily = {
    incomes: [3150.90, 4690,75, 200],  // salário, aluguel de sala, aluguel de garagem
    expenses: [1500, 1400, 70, 250, 100, 1000] // aluguel, comida, água, luz, internet, mensalidade faculdade
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

// Primeira opção(minha):
function calculateBalance() {
    const calculatedIncomes = sum(valueFamily.incomes)
    const calculatedExpenses = sum(valueFamily.expenses)
    
    const totalBalance = calculatedIncomes - calculatedExpenses
    
    if(totalBalance > 0) {
        console.log(`O saldo financeiro familiar é positivo no valor de R$ ${totalBalance.toFixed(2)}. `)
    } else if(totalBalance < 0) {
        console.log(`O saldo financeiro familiar é negativo no valor de R$ ${totalBalance.toFixed(2)}.`)
    } else {
        console.log('O saldo financeiro familiar é zero.')
    }
}

// Segunda opção(Mayk):
function calculateBalance() {
    const calculatedIncomes = sum(valueFamily.incomes)
    const calculatedExpenses = sum(valueFamily.expenses)
    
    const totalBalance = calculatedIncomes - calculatedExpenses
    
    const positiveBalance = totalBalance >= 0

    let balanceText = "negativo"

    if(positiveBalance) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${totalBalance.toFixed(2)}`)
}

// Terceira opção(Rafael):
function calculateBalance() {
    const calculatedIncomes = sum(valueFamily.incomes)
    const calculatedExpenses = sum(valueFamily.expenses)
    
    const totalBalance = calculatedIncomes - calculatedExpenses
    
    const positiveBalance = totalBalance >= 0

    const balanceText = positiveBalance ? "positivo" : "negativo"

    console.log(`Seu saldo é ${balanceText}: R$ ${totalBalance.toFixed(2)}`)
}

calculateBalance()