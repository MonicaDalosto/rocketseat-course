// callback function
// chamar uma function dentro de outra function

function sayMyName(parametro) {
    console.log('antes de executar a funcao callback')
    
    parametro()

    console.log('depois de executar a callback')
}

sayMyName(
    // () => {
    function argumento() {
        console.log('estou em uma callback')
    }
)