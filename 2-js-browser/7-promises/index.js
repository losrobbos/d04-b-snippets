
const fetchData = async () => {

  // MANUALLY CREATE ERROR
  // throw new Error("Hey, Lieferfahrer ist tot umgefallen. KEINE Daten, sorry")
  /// => creates an error object

  const arrTodos = [
    { id: "t1", title: "Make some rucola Smoothie" },
    { id: "t2", title: "Drink coffee" },
    { id: "t3", title: "Show promises" },
  ]

  return arrTodos // JS wraps the return in a PROMISE in an async function
}

const promData = fetchData()

// wenn fertig mit AUSPACKEN 
// => dann freuen
// => Daten im THEN handler abrufen!
promData
.then( data => {
  console.log(data)
})
// catche ERROR beim AUSPACKEN
.catch( err => {
  console.log("AUTSCH", err.message)
})
