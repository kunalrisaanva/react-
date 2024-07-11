import React ,{Children, memo} from 'react'

function Child({ data , func}) {

  

    console.log("child componenet");

   

  return (
    <>
    
    <h1> child components </h1>

    <p> data : { data }</p>

    <button onClick={func}> add data</button>
    


    </>
  )
}

export default memo(Child)