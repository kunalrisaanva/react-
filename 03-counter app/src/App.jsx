import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)


  // let counter = 1;

  const addValue = () => {
    console.log("clicked ",counter);

    counter += 1

    setCounter(counter)

  }


  const removeValue = () => {
    console.log("clicked ",counter);



    counter -= 1

    if(counter  === -1 ) 
      // counter = 0
      setCounter( counter = 0)
    else
      setCounter(counter)
    
    

  }


  return (
    <>
    <h1> chaii aur react </h1>
      <h2> Your Value is : { counter } </h2>


      <p> current value : { counter } </p>

      <button onClick={ addValue }  > add value </button>
      <br />
      <br />
      <button onClick={ removeValue}> remove value </button>
    </>
  )
}

export default App
