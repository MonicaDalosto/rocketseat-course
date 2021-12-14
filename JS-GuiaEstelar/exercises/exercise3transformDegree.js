/*
### Celsius em Fahrenheit:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

// Solution:

// transformDegree('50F')

// function transformDegree(degree) {
//   const celsiusExists = degree.toUpperCase().includes('C')
//   const fahrenheitExists = degree.toUpperCase().includes('F')

//   // fluxo de erro
//   if (!celsiusExists && !fahrenheitExists) {
//     throw new Error('Grau não identificado')
//   }

//   // fluxo ideal: F to C
//   let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
//   let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
//   let degreeSign = '°C'

//   // fluxo alternativo: C to F
//   if (celsiusExists) {
//     updatedDegree = Number(degree.toUpperCase().replace('C', ''))
//     formula = celsius => (celsius * 9) / 5 + 32
//     degreeSign = '°F'
//   }

//   return formula(updatedDegree) + degreeSign
// }

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if (fahrenheitExists) {
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    return fahrenheitToCelsius(updatedDegree)
  } else if (celsiusExists) {
    let updatedDegree = Number(degree.toUpperCase().replace('C', ''))
    return celsiusToFahrenheit(updatedDegree)
  } else {
    throw new Error('Grau não identificado')
  }
}

function fahrenheitToCelsius(degree) {
  return ((degree - 32) * 5) / 9 + '°C'
}

function celsiusToFahrenheit(degree) {
  return (degree * 9) / 5 + 32 + '°F'
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50g')
} catch (error) {
  console.log(error.message)
}
