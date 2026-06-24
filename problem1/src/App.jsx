import { useState } from 'react'
import './App.css'
import Train from './Train.jsx'
import Input from './input.jsx'
import Temp from './Temp.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Train></Train>
      <Input></Input>
      <Temp></Temp>
    </>
  )
}

export default App
