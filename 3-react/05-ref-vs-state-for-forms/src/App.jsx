import { useRef, useState } from 'react'
import './App.css'

function App() {

  // STATE
  const [message, setMessage] = useState("hallo")

  // REFS
  const usernameRef = useRef()
  const passwordRef = useRef()

  // EVENT LISTNER => which trigger state updates
  const handleMessageChange = (event) => {
    console.log( event.target.value )
    setMessage( event.target.value ) // add new form input content to state variable
  }

  const registerUser = () => {
    console.log("Submitted that shit")
    console.log( usernameRef.current.value )
    console.log( passwordRef.current.value )
  }

  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <h2>Signup</h2>
        {/* classical FORM INPUT STATE */}
        {/* <input name="message" type="text" value={message} onChange={ handleMessageChange } /> */}

        {/* You can use REFs too to get values from Form inputs */}
        {/* Prefer refs in case you do not need the intermediate result of the user typing */}
        {/* Prefer refs when you want to valiate data on SUBMIT  */}
        {/* Prefer state when you want to valiate data on TYPING  */}
        <input ref={usernameRef} name="username" type="text" placeholder="Username..." />
        <input ref={passwordRef} name="password" type="password" placeholder="Password..." />

        <div>
          <button onClick={registerUser}>Submit</button>
        </div>
      </header>
    </div>
  )
}

export default App
