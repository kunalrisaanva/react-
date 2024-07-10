import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {


    const data = useLoaderData()



//     const [data ,setData] = useState([])

// useEffect(() => {
//     fetch("https://api.github.com/users/kunalrisaanva")
//     .then( resp => resp.json())
//     .then( data => setData(data) )
// },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>

    Github followers : {data.followers}


    <img className='text-center' src={data.avatar_url} alt="git" width={300} />


    </div>
  )
}

export default Github




export const githibInfoLoader = async () => {
  const resp =  await fetch("https://api.github.com/users/kunalrisaanva")
  return resp.json()

}