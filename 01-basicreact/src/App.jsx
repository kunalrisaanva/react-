import { useState } from 'react'
import CallMe from './kunal'
import { New } from './Comp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <CallMe/>
    <New/>
    
    </>
    
  )
}

export default App
