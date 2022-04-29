import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  // *** STATES

  // number
  const [count, setCount] = useState( 0 ) // set up a state and put 0 into the BOX
  
  // string
  const [message, setMessage] = useState("Hallo dudes")

  // object
  const [user, setUser] = useState({
    username: "Marc", 
    password: "marc123",
    loggedIn: false,
    // specialization: "None"
  })

  // array
  const [todos, setTodos] = useState([
    { id: "t1", title: "Do some state" },
    { id: "t2", title: "Learn some Java. Enjoy!" },
  ])

  // *** EVENT LISTENERS 

  const onClickNumber = () => {
    console.log("Update number")
    setCount( count + 1 )
  }

  const onClickString = () => {
    console.log("Update message")
    setMessage( "State ist sowas von geil" )
  }

  const onClickObject = () => {
    console.log("Update user")

    // IMMUTABILITY pattern

    // folgender Code klappt nicht! State variables dürfen wir nicht DIREKT manipulieren
    // user.password = "1973198642zhnw7510100uixjst6565###111"

    setUser({
      ...user, // COPY of old state
      // overwrite password field
      password: "1973198642zhnw7510100uixjst6565###111", // update EXISTING field
      username: "Jakob",
      // specialization: "Python" // add NEW field to object
    })
  } 

  const onClickArrayAdd = () => {
    console.log("Update array")

    const idNew = Date.now().toString() // generate some unique id
    const todoNew = { id: idNew, title: "Add something to array" }

    console.log(idNew)

    // the WRONG way: adding a new item to array
    // todos.push( todoNew ) // push does not work => we cannot change the original!

    // correct way: create COPY + add new one
    const todosCopy = [...todos, todoNew] // copy OLD array items + merge with NEW item

    setTodos(todosCopy) // overwrite old array and trigger DOM update
  }

  const onClickArrayEdit = (idToEdit) => {
    const titleNew = prompt("Neuer Titel pleeeze: ")
    console.log("Edit item: ", idToEdit, "Title New: ", titleNew)

    // FIND the item to update by ID
    // Update the found OBJECT => immutable => modify a COPY

    const todosUpdated = todos.map((todo) => {
      return todo.id === idToEdit
        ? { ...todo, title: titleNew } // item we wanna update! => create a COPY of it!!
        : todo // all others items => simply dont touch!
    })

    setTodos(todosUpdated) // overwrite old array and trigger DOM update
  }

  const onClickArrayDelete = (idToDelete) => {
    console.log("Delete item: ", idToDelete)

    // Deletion methods: pop, shift, splice, filter
    // problem: splice, pop => all change the original!

    // filter gives me back a new ARRAY
    const todosKeep = todos.filter( (todo) => {
      return todo.id !== idToDelete
    } ) 
    setTodos( todosKeep ) // overwrite old array and trigger DOM update
  }

  // JSX "pieces" => those could be outsourced to own components !
  const jsxTodoList = todos.map((todo) => (
    <div key={todo.id}>
      <span>{todo.title}</span>
      {/* use CALLBACK syntax when you want to pass PARAMETERS to function */}
      <button onClick={() => onClickArrayEdit(todo.id)}>Edit</button>
      <button onClick={() => onClickArrayDelete(todo.id)}>X</button>
    </div>
  ))

  // LAYOUT
  // Layout should ideally not contain much javascript logic
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={onClickNumber}>Count: {count}</div>
        <div onClick={onClickString}>Message: {message}</div>
        <div onClick={onClickObject}>
          {/* we can just output SIMPLE datatypes between curly braces {} in JSX */}
          User: {user.username} {user.password} {user.specialization}{" "}
        </div>
        <br />
        <div>
          Todos:{" "}
          { jsxTodoList }
          <button onClick={onClickArrayAdd}>Add</button>
        </div>
      </header>
    </div>
  )
}

// [ "a", "b", "c" ] => 0, 1, 2

export default App
