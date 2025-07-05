import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Rajesh",
    age:22
  }
  let newArr=[1,2,3,4,5]
  return (
    <div className='bg-slate-700'>

     <h1 className='bg-amber-700 text-3xl mb-5 '> Tailwind Test..</h1>
     <Card username='Harshita' />
     <Card username='Rashmita'  />
     <Card username='Harshita' btnText='click mehh' />
    </div>
  )
}

export default App
