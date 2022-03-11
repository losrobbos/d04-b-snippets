// class, constructor, new, this, super,  static, get / set
// X class, constructor, new, this, getter
class HeroCharacter {
  // construct me a new hero character
  constructor( name, health = 100) {
    this.name = name;
    this.health = health; // if health is not undefined => take health => otherwise take 100
  }

  // object.isAlive => silently calls getter function "isAlive()""
  get isAlive() {
    return this.health > 0  // health > 0 => alive : dead
  }
}

const marion = new HeroCharacter('Marion');
console.log( marion );

const martin = new HeroCharacter("Martin", 99)
console.log( martin )

// martin attacks marion
console.log("Alive: ", marion.isAlive)
marion.health -= 20
marion.health -= 20
marion.health -= 20
marion.health -= 20
marion.health -= 20
console.log("Alive: ", marion.isAlive)

// check if character died
