// static

class Buch {

  static buecher = []

  // static search
  static searchInTitle = (book, pattern) => {
    return book.title.includes( pattern )
  }

  static compareTitles = (book1, book2) => {
    return book1.title.length > book2.title.length
  }  
  
  constructor(title) {
    this.title = title
  }



}

const buch1 = new Buch("Das Ende der Welt")
const buch2 = new Buch("Das Zauberberg von Thomas Mann")
Buch.buecher.push( buch1 )
Buch.buecher.push( buch2 )

console.log( Buch.buecher )

let result = Buch.searchInTitle( buch2, "berk" )
console.log( result )

result = Buch.compareTitles( buch1, buch2)
console.log( result )