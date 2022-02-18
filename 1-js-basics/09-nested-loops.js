
// einfache for schleife => array

// nested for schleife => 2d array / arrays nested in arrays

// object
const person = {
  // subvariables
  name: "Rob",
  age: 38  
}

// In 99% der Fälle brauchen wir für NESTED arrays NESTED LOOPS!

const students = [
  { name: "Anom1", hobbies: ['Coding', 'Fishing', 'Whatever'] },
  { name: "Dude", hobbies: ['Procrastinating', 'Netflix'] },
  { name: "Anom3", hobbies: ['Nested Loops', 'Nested While Loops'] }
]

const printStudentHobbies = (studentName) => {

  // OUTER LOOP => finde STUDENT (in OUTER array)
  // INNER LOOP => printe HOBBIES (in INNER array)
  for( let student of students) {
  
    if( student.name === studentName  ) {
      console.log( student.name )
      const hobbies = student.hobbies
  
      for( let hobby of hobbies) {
        console.log( "--", hobby )
      }
    }
  
  }
}


printStudentHobbies( "Dude" )
printStudentHobbies( "Anom3" )

