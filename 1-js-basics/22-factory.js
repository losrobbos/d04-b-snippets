// Factory pattern, static, instanceof

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
    return `Greeting: Hi, just die!`
  }
}

class AngryBird extends Enemy {
  
  flapAttack() {
    console.log( "FLAP FLAP DIE BA***STER***" )
  }
}

const basicEnemy = new Enemy("Lauterbach")
const trooper = new Stormtrooper("troopy", 75, "gun")
const angryBird = new AngryBird("EvilBird", 100)

// FACTORY
class EnemyFactory {
  
  // create an object by a STRING identifier
  createEnemy( type, name ) {
    switch(type) {
      case "bird": return new AngryBird(name);
      case "trooper": return new Stormtrooper(name)      
    }
  }
}

const factory = new EnemyFactory()
const enemies = ["bird", "trooper", "trooper", "bird"]

const arrEnemies = enemies.map(strEnemy => {
  const enemy = factory.createEnemy( strEnemy, strEnemy )  
  console.log( enemy.greeting() )
  return enemy
})

console.log( arrEnemies )
