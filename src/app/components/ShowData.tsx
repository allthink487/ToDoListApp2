import React from 'react'
import { useState,useEffect } from 'react'

interface Post {
  id: number;
  title: string;
  note:string,
  createdAt:Date
}

export default function ShowData({refresh}:{refresh:boolean}) {

    const [data,setData] = useState<Post[]|null>(null)

    useEffect(()=>{
        fetch('http://localhost:3000/api/posts')
        .then((response)=> response.json())
        .then((data)=>{
          setData(data)
        })
      },[refresh])
      console.log(data)
  return (
    <ul>
      { data && (data.map( (elem) => <li key={elem.id} className='text-white'>{elem.title}</li> ) ) }
    </ul>
  )
}
