const log = console.log

const arrStudents = ["Omar", "Jakob", "Mustafa", "Mehmet"]

// log( arrStudents[0] )
// log( arrStudents[1] )
// log( arrStudents[2] )

// geh im array von 0 bis zum ENDE

// ordinary for loop
// for(let i=0; i < arrStudents.length; i++) {
//   log( arrStudents[i] )
// }

// for..in => index??
for(let i in arrStudents) {
  log(i)
}

log("------")

// for..of => value??
for(let i of arrStudents) {
  log(i)
}

