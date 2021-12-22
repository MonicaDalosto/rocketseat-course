const button = document.getElementById('openModal')

const invisibleElement = document.getElementById('closeModal')

button.addEventListener('click', changeButton)

function changeButton() {
  button.style.display = 'none'
  invisibleElement.style.display = 'block'
}

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    button.style.display = 'flex'
    invisibleElement.style.display = 'none'
  }
})

// Solução do Mayk usando a ferramenta de CSS "unpkg" que não funcionou no meu pc:
// const buttonOpenModal = document.getElementById ('openModal')

// const modalWrapper = document.querySelector('modal=wrapper')

// buttonOpenModal.onclick = function() {
//   modalWrapper.classList.remove('invisible')
// }

// document.addEventListener('keydown', function(event) {
//   const isEscKey = event.key ==='Escape'

//   if(isEscKey) {
//     modalWrapper.classList.add('invisible')
//   }
// })
