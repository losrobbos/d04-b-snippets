import './App.css'
import { Title } from './components/styled/Title'
import Layout from './components/styled/Layout'

// Styled Components => creates components with style

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <div>Item 1</div>
          <div>Item 2</div>
        </Layout>
        {/* <Title primary>Hallo</Title>
        <Title primary><div>Blaaa</div></Title>
        <Title>Hallo</Title> */}
      </header>
    </div>
  )
}

export default App
