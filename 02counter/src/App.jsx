import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  //React does UI updation
  //   [variable,function(thi changes the value of counter in UI)]
  const [counter,setCounter]=useState(10)


  //let counter = 51
  const addValue = () => {
    // console.log("clicked",counter);
    // counter +=1

    //--->for assignment

    // if(counter==25) setCounter(0)
    //   else
    setCounter(counter + 1)
  //  console.log("Value added",Math.random());
   
  }

  const decValue = () =>{
    // counter  = counter-1

    //--->for assignment
    
    // if(counter<=0) setCounter(0)
    //   else
    setCounter(counter-1)
  }
  return (
    <>
      <h2>Lets learn hooks in react with the help of counter project</h2>
      <h3>Counter Value: {counter}</h3>
      <button 
      onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <button
      onClick={decValue}>Remove value : {counter}</button>
      {/* <p>footer:{counter}</p> */}
    </>
  )
}

export default App
