console.log('Yayyyyy, das klappt!');

const button = document.querySelector('button');

// Event Listener (Click)

// this typically comes from some backend server out there in the cloud
const todos = [
  "Do some DOM manipulation",
  "Get more coffee", // => <div>Get more coffee</div> 
  "Talk about teaching",
]

// <div>Do some DOM manipulation</div><div>Get more coffee</div>"

// when clicking the login button, this should happen...
// 1. loope über todos array
// 2. convert each item to an HTML div tag
// 3. stuff all these div tags inside container "todos-list"

button.addEventListener("click", () => {

  let strHtmlTodos = ""

  // loope durch den array und wrappe jedes todo item mit div tags

  for( let todo of arrTodos  ) {
    strHtmlTodos += `<div class="todo">${ todo }</div>` // translate data to HTML
  }

  // grab the parent container where we wanna stuff all these nice array items
  const todosList = document.querySelector(".todos-list")
  // replace innerHTML with this DIV strings
  todosList.innerHTML = strHtmlTodos
})



// PIZZA ARRAY

const arrPizzas = [
  { _id: 1, name: "Hawaii", price: 5.99, image: "https://robimages.com/hawaii" }, // objects => boxes mit mehreren Unter-Variablen
  { _id: 2, name: "Vegetale", price: 6.99, image: "https://robimages.com/vegetale" },
  { _id: 3, name: "Funghi", price: 8.99, image: "https://robimages.com/funghi"}
]