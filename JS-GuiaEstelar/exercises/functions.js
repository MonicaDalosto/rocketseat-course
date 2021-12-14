/*
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria;
    * Contar o número de autores;
    * Mostrar livros do autor Augusto Cury;
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. 
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

// 1 - Contar o número de categorias e o número de livros em cada categoria:
const totalCategories = booksByCategory.length
console.log(`O número total de categorias é ${totalCategories}.`)

for (let categoryXXX of booksByCategory) {
  // console.log(categoryXXX) // Imprimir o valor da nova variável, não foi pedido no execício.
  console.log(
    `O total de livros da categoria: ${categoryXXX.category} é ${categoryXXX.books.length}.`
  )
}
// 2 - Contar o número de autores:
function countAuthors() {
  let authors = []

  for (let categoryXXX of booksByCategory) {
    for (let bookXXX of categoryXXX.books) {
      if (authors.indexOf(bookXXX.author) == -1) {
        authors.push(bookXXX.author)
      }
      // console.log(authors) // Imprimir o valor da nova variável, não foi pedido no execício.
    }
  }
  console.log(`O total de autores é ${authors.length}.`)
}
countAuthors()
// 3 - Mostrar livros do autor Augusto Cury:
function booksOfAuthor(author) {
  let books = []

  for (let categoryXXX of booksByCategory) {
    for (let bookXXX of categoryXXX.books) {
      if (bookXXX.author === author) {
        books.push(bookXXX.title)
      }
      // console.log(books) // Imprimir o valor da nova variável, não foi pedido no execício.
    }
  }
  console.log(`Livro(s) do autor ${author}: ${books.join('; ')}.`)
}
booksOfAuthor('Augusto Cury')

// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor:
