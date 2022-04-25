import logo from "../logo.svg"

// PROPS

// NAMED EXPORT
export const Header = ( { name, login } ) => {

  // destructure "attributes" (=props) from props object
  // const { name, login } = props

  // console.log( "Props: ", props )

  // JSX LEGO Baukasten
  const jsxNameAndNumber = <div>{`${name} und ${13 + 4}`}</div>
  const jsxLoginState = login && <div>Eingeloggt</div>

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React + 04-B!</p>

      {jsxNameAndNumber}
      {jsxLoginState}
      {/* CONDITIONAL RENDERING */}
      {/* <div>{login ? "Eingeloggt" : "Ausgeloggt"}</div> */}
    </header>
  )
}
