'use client'

import React from 'react'

import { IoSend } from "react-icons/io5"

import PostChat from '../ServerActionChat/PostChat'
export const ChatForm = () => {
  return (
    <form action={PostChat} className='flex'>
        <input type="text" className='bg-white/5 p-2  bg-slate-950 rounded-full focus:outline outline-2 outline-blue-800  w-full text-white font-semibold text-xl placeholder:text-lg placeholder:font-normal' placeholder='Entrez votre message' name='msg' />
        <button type='submit' className='rounded-full'><IoSend className='bg-blue-500 rounded-full h-10 w-10 p-2'/></button>
    </form>
  )
}
