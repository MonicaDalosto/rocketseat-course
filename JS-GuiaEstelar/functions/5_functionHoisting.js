// function hoisting

// sofre elevação:
sayMyName()

function sayMyName() {
    console.log('Mônica')
}

// não sofre elevação e dá erro (só vai funcionar se eu executar a function depois da declaration dela):

tellMyName()

const tellMyName = function () {
    console.log('Mônica')
}