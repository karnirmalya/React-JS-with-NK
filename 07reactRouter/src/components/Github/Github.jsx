import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
     const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/karnirmalya')
    //     .then( response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='h-auto w-auto text-center m-4 bg-gray-600 text-white p-4 text-3xl  '>
      Github Followers : {data.followers}
     
     <div className="flex justify-center items-center h-full">
  <img
    src={data.avatar_url}
    alt=" Git Profile"
    className="rounded-full w-30 h-30 object-cover"
  />
</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
     const response = await fetch('https://api.github.com/users/karnirmalya')
     return response.json()
}
