import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Guest")
  const [count, setCount] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")

  const updateName = () =>{
    setName("Kenyansa")
  }
  const increment = () => {
    setCount (count + 1);
  }
  const decrement = () => {
    setCount (count - 1);
  }
  const reset = () => {
    setCount (0);
  }
//alternatively:  const increment = () => setCount((count) => count + 1)
  const toggleEmploymentStatus = () =>{
    setIsEmployed(!isEmployed);
  }

  function handleNameChange (event){
    setName(event.target.value)
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Working</span> With State.</h1>
      <div className="card">
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={updateName}>
          Set Name
        </button> <br/>
        <p className='mb-2 font-bold text-lg'>Name: {name}<br/> +++++++++++++++++</p>
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={toggleEmploymentStatus}>
          Employment Status
        </button><br />
        <p className='mb-2 font-bold text-lg'>Employed ?: {isEmployed ? "Yes": "No"} <br/> +++++++++++++++++</p>


        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={increment}>
          Increment
        </button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={reset}>
          Reset
        </button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={decrement}>
          Decrement
        </button>
        <p className="font-serif font-bold mb-2">Count is: {count} <br/> +++++++++++++++++</p>

        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name} <br/> +++++++++++++++++</p>

        <input value={quantity} type='number' onChange={handleQuantityChange} />
        <p>Quantity: {quantity} <br/> +++++++++++++++++</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
        <p>Comment:{comment} <br/> +++++++++++++++++</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment} </p>
      </div>
    </>
  )
}

export default App
