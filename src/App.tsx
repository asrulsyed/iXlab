import { useState } from 'react'
import './App.css'
import EdithInterface from './edith-interface-final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EdithInterface />
    </>
  )
}

export default App
