'use client'
import React from 'react'


export default function Exp() {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       

    
      }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' />
            <input type="text" name='note' />
            <button type="submit">submit</button>
        </form>
    </>
  )
}
