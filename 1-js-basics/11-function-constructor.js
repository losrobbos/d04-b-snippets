// class Bird {
// }


// Function that CREATES Objects dynamically
// Object Factory => produces birds
function Bird(name, age) {
  this.name = name
  this.age = age
}
// {} = this =>  { name: "Birdy", age: 17  }
const bird1 = new Bird("Birdy", 17) // new => create object => übergibt func leeres object {}
const bird2 = new Bird("Flappy", 13)
const bird3 = new Bird("Hawky", 23)

// freeze all properties in object to READ ONLY => not changeable anymore!
Object.freeze( bird1 )
Object.freeze( bird2 )
Object.freeze( bird3 )

console.log()
console.log( bird1 )
console.log( bird2 )
console.log( bird3 )
console.log()

bird2.age = 99
bird2.favoriteMove = "flap"
console.log( bird2 )


