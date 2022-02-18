
console.log( this ) // => printed ein empty object

// Object => BOX für Variablen (Key Value Pairs)
const bird = {

  name: "Birdy", // KEY VALUE PAIR
  age: 7, // property / member / field

  // method => a function in an object

  // this = whole object
  flapNormal() {
    console.log( this ) // ???
    console.log( this.name +  ": Flap flap..." )
  },
  // this = whole object
  flapFunc: function() {
    console.log( this ) // ????
    console.log( this.name + ": Flap flap..." )
  },
  // this = undefined ????
  flapArrow: () => {
    console.log( this ) // this is set already on DECLARATION of the function
    console.log( this.name + ": Flap flap..." )
  },

}


const log = console.log

log()
log( bird.name )

// this is nicht immer genau gleich!
// je nachdem WAS FÜR EINE FUNKTION ich aufrufe und WIE heißt this immer etwas anderes
bird.flapNormal() // this = bird
bird.flapFunc() // this = bird
bird.flapArrow()  // => this = undefined

console.log( bird )


// EXTENDING object dynamically at any time

  // add new property
bird.favoriteMove = "flap"

  // add new functions
bird.funky = () => { console.log("Funky") } // WARNUNG: This funktioniert nicht in arrow func!
bird.funkyName = function() { console.log("Funky " + this.name) } // THIS funktioniert!

bird.funkyName()

log()
log()

// exports { a,b } // => this