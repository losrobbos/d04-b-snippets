// generic class, parent class, base class
class Enemy {

  constructor(name, health = 100) {
    this.name = name
    this.health = health
  }

  greeting() {
    return `Hi, I am ${this.name}, I will slay ya`
  }
}

// FuriousJelly, AngryBird, Stormtrooper, JsZombie
// Singleton: JavaScript

class Stormtrooper extends Enemy {

  // take all the parent has + some nice addon
  constructor( name, health = 100, weapon ) {
    super(name, health) // create me a base enemy FIRST => this
    this.weapon = weapon // add the things that are SPECIAL to this class
  } // return this

  greeting() {
    console.log( "Greeting: ", super.greeting() ) // call the parents version of greeting !
    return `Greeting: Hi, just die!`
  }
}

class AngryBird extends Enemy {
  
  flapAttack() {
    console.log( "FLAP FLAP DIE BA***STER***" )
  }
}

const basicEnemy = new Enemy("Lauterbach")
console.log( basicEnemy )
console.log( basicEnemy.greeting() )

const trooper = new Stormtrooper("troopy", 75, "gun")
console.log( trooper )
console.log( trooper.greeting() )

const angryBird = new AngryBird("EvilBird", 100)
console.log( angryBird)
angryBird.flapAttack()