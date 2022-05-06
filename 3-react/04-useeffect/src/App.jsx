import { useEffect, useState } from 'react'
import './App.css'

const App = ( ) => {

  console.log("Rendering like hell", Date.now())

  const [todos, setTodos] = useState([
    { id: "t1", title: "Wake the dog", status: true },
    { id: "t2", title: "Train some useEffect", status: false },
  ])

  // this function gets only executred ONCE on initial rendering 
  // ALWAYS executed AFTER first render
  // typically to fetch data from API or wherever
  useEffect( () => {

    console.log("UseEffect hook")

    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const todosApi = await res.json()
      setTodos(todosApi)
    }
    setTimeout(() => {
      fetchData()
    }, 5000)
  }, [])

  console.log("Rendering JSX")

  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <h2>UseEffect in action</h2>
        {
          todos.map(todo => <div key={todo.id} >{todo.title}</div>)
        }
      </header>
    </div>
  )
}

export default App
