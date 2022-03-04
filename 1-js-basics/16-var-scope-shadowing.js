

const summe = 15

// shadowing
const doSomething = (summe) => {
  console.log( summe )  
}

doSomething( 100 )

console.log( summe )