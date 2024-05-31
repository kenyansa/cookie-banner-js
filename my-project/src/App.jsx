import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Guest")
  const [count, setCount] = useState(0)

  const updateName = () =>{
    setName("Kenyansa")
  }

  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Working</span> With State.</h1>
      <div className="card">
        <button onClick={updateName}>Set Name</button> <br/>
        <p>Name: {name}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  )
}

export default App
