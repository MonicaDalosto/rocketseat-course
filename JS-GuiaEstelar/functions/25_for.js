/*  for:
break - para a execução do loop
continue - pula a execução do momento

A estrutura de repetição for tem a seguinte sintaxe:
for(inicialização de uma variável; condição de continuação para o loop; expressão final)

*/

for(let i = 0; i < 10; i++) {
    console.log(i)
}

// ou:

for(let i = 10; i > 0; i--) {
    if(i === 7) {
        continue; // nesse exemplo o continue é utilizado para pular a impressão do número 7
    } else if(i === 2){
        break; // o break pode ser utilizado para parar a execução do loop
    }
    console.log(i)
}