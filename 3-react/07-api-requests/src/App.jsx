import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  // STATE
  const [users, setUsers] = useState([{ _id: "u1", name: "Tick" }])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/users")
      const usersApi = await res.json()
      setUsers( usersApi )
    }
    fetchData() // grab that fuckin users
  }, []) // just run on FIRST render!


  // EVENT LISTENERS
  const onUserAdd = async () => {
    console.log( "Adding user..." )
    const username = prompt("Username pleeeze")

    const userNew = { name: username }

    // 1. UPDATE API => send data via POST request
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify( userNew ), // String => JSON => JS data in a string 
      headers: {
        "Content-Type": "application/json"
      },
    })

    console.log( userNew )
    const userNewApi = await res.json() // new item from API
    console.log( userNewApi )

    // 2. UPDATE UI => state
    
    setUsers( [...users, userNewApi] ) // merge new user to existing users
  }

  const onUserDelete = async (idToDelete) => {
    console.log( idToDelete)

    // Update API first
    const url = `http://localhost:5000/users/${idToDelete}`

    console.log(url)

    const res = await fetch(url, {
      method: "DELETE",
    })

    // filter out item we wanna get rid of
    const usersKeep = users.filter( user => user._id !== idToDelete)

    // update state
    setUsers( usersKeep )
  }


  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            users.map(user => (
              <div key={user._id}>
                <span>{ user.name }</span>
                <button onClick={ () =>  onUserDelete(user._id) }>X</button>
              </div>
            ))
          }
        </div>
        <button onClick={ onUserAdd } >Add user</button>
      </header>
    </div>
  )
}

export default App
