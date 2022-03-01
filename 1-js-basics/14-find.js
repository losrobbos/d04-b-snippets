const books = [
  { title: "Antworten auf schwierige Fragen", author: "Steven Hawking" },
  { title: "Eloquent JavaScript", author: "Unbekannt" },
  { title: "Schachnovelle", author: "Stefan Zweig", },
  { title: "Der Prozess", author: "Kafka", },
  { title: "Die Verwandlung", author: "Kafka", },
  { title: "Die PhysikerIn", author: "Dürrenmatt",  },
]


const result = books.find( (book) => {
  return book.author === "Kafka"
} )

console.log( result )