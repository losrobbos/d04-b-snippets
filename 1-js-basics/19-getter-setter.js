class Person {
  // constructor is just called when we use the NEW keyword
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    
    // this is BADDDD ! do not combine items in constructor
    // this.fullname = firstname + " " + lastname
  }

  // object.fullname
  get fullname() {
    return this.firstname + " " + this.lastname
  }

  // wir bekommen fullname
  // trennen in firstname und lastname
  set fullname( fn ) {
    console.log( "Fullname given: ", fn )
    const arrNames = fn.split(" ")
    this.firstname = arrNames[0]
    this.lastname = arrNames[1]
  }
}

const person = new Person("Anthony", "Fauci")

console.log(person.fullname)
person.lastname = "Trump"

console.log(person.fullname)

person.fullname = "Mahatma Modi"
console.log(person.firstname)
console.log(person.lastname)