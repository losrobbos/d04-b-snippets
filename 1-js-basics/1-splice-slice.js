
const arrPeople = [ "Anwer", "Mehmet", "Gül", "Rob", "Philipp" ]

console.log( { arrPeople } )

// Get a piece (slice) of the array cake
const arrSlice = arrPeople.slice( 1, 3 )

console.log( { arrSlice } )

// kill Rob (=splice)
const arrLeftBehinds = arrPeople.splice(3, 1)

console.log( { arrLeftBehinds })

console.log( { arrPeople } )

// Pop somethin => changes the original
// arrPeople.pop()

const whatever = arrPeople.slice(-2)

console.log( { whatever } )


// exchange first with last character in string

const someString = "Hello" // => "oellH"

const charBegin = someString[someString.length-1 ]
const strMiddlePart = someString.slice(1, -1)
const charEnd = someString[0]
console.log(  charBegin + strMiddlePart  + charEnd )
