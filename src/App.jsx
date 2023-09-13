import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Form from './Form'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar />
        <Form />
        <List />

      </div>
    </>
  )
}

export default App
