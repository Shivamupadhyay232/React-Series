import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)
  const removeValue=()=>{
    setCounter(counter-1);
  }
  const addValue=()=>{
    // console.log("Value Addded",Maths.random());
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>    
  )
}

export default App
