// IMPORTANT: EACH WEBSITE has their OWN localstorage!
// so google has a separate storage and yourdomain.com too

// get items from localstorage by KEY
const userLc = localStorage.getItem("USER")
const todoLc = localStorage.getItem("TODO")

// add a new item to localstorage
localStorage.setItem("POINTS", 5)

console.log( "User from Local Storage: ", userLc )
console.log( "Todo from Local Storage: ", todoLc )

// remove an item from localstorage by KEY 
localStorage.removeItem("TODO")

// delete ALL keys of the storage
// localStorage.clear()