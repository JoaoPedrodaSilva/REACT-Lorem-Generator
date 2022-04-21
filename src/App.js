import React, {useState} from "react"
import Header from './Header.js'
import Form from './Form.js'
import Paragraphes from './Paragraphes.js'



function App() {
  const [count, setCount] = useState(0)
  const [paragraphes, setParagraphes] = useState([])

  return (
    <main className="app">
      <section className="header">
        <Header />
      </section>

      <section className="form">
        <Form count={count} setCount={setCount} setParagraphes={setParagraphes} />
      </section>

      <section className="paragraphes">
        <Paragraphes paragraphes={paragraphes} />
      </section>
    </main>
  )
}

export default App
