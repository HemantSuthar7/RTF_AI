import { useState } from 'react'
import Header from './components/Header'
import Main_layout from './components/Main_layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main_layout/>
    </>
  )
}

export default App
