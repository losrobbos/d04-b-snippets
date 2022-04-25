import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header"

// JSX => HTML + JS

// REASONS to use a Web Framework
// 1. Optimize resources (HTML, CSS, JS, Media)
// 2. Split HTML & Code into Files (=Components)
//  2.1 => better team organisation
// 3. Automatic DOM rendering => REACT to changes of data and update HTML automatically!

function App() {

  console.log(" Rendering...")

  // App.js => DATA master
  const name = "Rob"
  const login = false

  // const arrPeople = ["Zubia", "Marion", "Jakob", "Mehmet"]

  const [arrPeople, setArrPeople] = useState(["Zubia", "Marion", "Jakob", "Mehmet"])


  const addPerson = () => {
    console.log( "AddPerson called...")
    // arrPeople.push("Sevde")
    const peopleUpdated = [...arrPeople, "Sevde"]

    // STATE CHANGE FUNCTIONS trigger a RE-RENDERING (= DOM UPDATE) 
    setArrPeople( peopleUpdated )
  }

  // LEGO mit HTML
  // JSX => render HTML
  return <div className="App">
    {/* Use Component just like your OWN HTML tag */}
    {/* pass PROPS to component using kind of like "HTML attributes" */}
    <Header name={name} login={login} /> 
    {
      arrPeople.map( person => <div key={person}>Person: { person.toUpperCase()}</div> )
    }
    <button onClick={ addPerson  }>Add Sevde</button>
  </div>
}

export default App
