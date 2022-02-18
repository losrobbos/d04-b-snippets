
// IF ELSE

if( "a" == "a" ) {
  const z = "z" // const / let => erzeugen BLOCK SCOPE => so we cannot access it after block anymore!
  // var z = "z" // this here creates a FUNCTON SCOPE variabel => so we can access it in whole function
}

// console.log( z ) // this here will not work, because z is not visible to us!




const a = "a"
const b = "b"

// c ist NUR sichtbar in funky (nicht außerhalb!)
// c ist im SCOPE von funky
// a,b sind im SCOPE von funky => weil eben funky alles - weil die welt so gerecht ist - ERBT!
const funky = () => {
  const c = "c"
  var million = 1000000
  
  console.log( a, b, c )

  // OUTPUT
  return million / 10 // just share 100.000 EUR with parent
}

const share = funky() //  a,b => hand over to function. there you have it. enjoy! no secrets!

console.log( share )
console.log({ share })

// console.log( million ) // I cannot access the million, because it is in FUNCTION scope
// so unfortunately not visible t meeee!


