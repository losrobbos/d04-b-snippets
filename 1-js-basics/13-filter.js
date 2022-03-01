const books = [
  { title: "Antworten auf schwierige Fragen", author: "Steven Hawking" },
  { title: "Eloquent JavaScript", author: "Unbekannt" },
  { title: "Schachnovelle", author: "Stefan Zweig", },
  { title: "Der Prozess", author: "Kafka", },
  { title: "Die Verwandlung", author: "Kafka", },
  { title: "Die PhysikerIn", author: "Dürrenmatt",  },
]

// console.log(books)

const booksKafka1 = books.filter( (book) => {
    return book.author === "Kafka" // true / false
})

// the code blow does the same as filter above. filter is just a shorter version for that
const booksKafka2 = []
for( let book of books ) {
  if(book.author === "Kafka") {
    booksKafka2.push( book )
  }
}

console.log( booksKafka1 )
console.log( booksKafka2 )

// this here will not work like expected 
// => map will put the return value, so true / false into the resulting array
const booksKafka3 = books.map( (book) => {
    return book.author === "Kafka" // true / false
})

console.log( booksKafka3 )
