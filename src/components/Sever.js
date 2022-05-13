import React, { useEffect, useState } from 'react'
import axios from "axios"

function Sever() {
const [value,setValue]=useState(null)

    useEffect(()=>{
     axios.get('http://localhost:3000/posts?_sort=likes&_order=desc')
     .then((res)=>setValue(res.data))

    },[])
    
console.log(value)

  return (
    <div>
{
value?.length>0 && value.map(element => {
    return(
        <div>
    
    <h1>{element?.id}</h1>
    <h1>{element?.title}</h1>
    <h1>{element?.body}</h1>
    <h1>{element?.likes}</h1>
    <hr></hr>
    <br></br>
    </div>
    )
})

}

     
    </div>
  )
}

export default Sever