// .map .filter FIND => ARRAY Methods (split, splice, push)

// .map .filter .forEach .reduce => MEISTENS für Arrays of OBJECTS

const books = [
  { title: "Antworten auf schwierige Fragen", author: "Steven Hawking" },
  { title: "Eloquent JavaScript", author: "Unbekannt" },
  { title: "Schachnovelle", author: "Stefan Zweig", },
  { title: "Der Prozess", author: "Kafka", },
  { title: "Die Verwandlung", author: "Kafka", },
  { title: "Die PhysikerIn", author: "Dürrenmatt",  },
]


// MAP - Use Case 1 => loopt durch jedes Item im Array durch und MAPPED (wandelt) es in etwas ANDERES
// MAP - Use Case 2 => loopt durch jedes Item im Array durch und EXTRACTED etwas aus jedem Item 



// EXPECTED OUTPUT: [ 'Steven Hawking', "Unbekannt', 'Thomas Mann' ]

console.log( books )

// EXTRACTION sample => manipuliert NICHT das Original!
const booksTitles = books.map( (book) => {
  return book.title // map pusht das returnte item in den neuen array booksTitles 
})

console.log()
console.log(booksTitles)

console.log( { books } )

// HERE we manipulate the ORIGINAL object => by overwriting a property of that object!
// THIS will change the original array!
const booksTitlesUc = books.map( (book) => {
  book.title = book.title.toUpperCase()
  return book
  // return book.title.toUpperCase() // map pusht das returnte item in den neuen array booksTitles 
})

console.log()
console.log( { books} )
console.log( { booksTitlesUc })




