"use server"
import React from 'react'
import ButtonDelete from './ButtonDelete'

 import { ChatForm } from './ChatForm'

//import { Notes } from '../types'
import Form from './Form'
import { PrismaClient } from '@prisma/client'


export default async function ShowData() {

    const prisma = new PrismaClient()
    const items = await prisma.notes.findMany()
    const msgs = await prisma.msgs.findMany()
    
  return (
    <>
      <Form/>
      <div className={` flex flex-col  gap-2 mb-16`}>
        
       { items && items.map( (item:{ title: string; note: string; id: number; checked: boolean; createdAt: Date }) =>

              <div key={item.id} className='flex flex-col p-4 gap-2 relative '>
                
                <div className=" absolute bottom-0 left-0 opacity-30  "><ButtonDelete id={item.id}/></div>

                <div className='flex gap-2'>
                  <input type="checkbox"/>
                  <h1 className='text-white divide-y text-2xl font-bold'>
                      {item.title}
                  </h1>   
                </div>
                
                <div className=' bg-slate-900 max-w-3xl border border-white rounded-md p-3 text-white leading-7 overflow-auto ml-5'>{item.note}</div>     
                </div>


                  
       )}

        {msgs && msgs.map(msg => 
                <div key={msg.id} className='text-white font-bold text-lg bg-sky-600 rounded-3xl p-2 w-fit '>{msg.msg}</div>
                )}
    </div>

    <div className=' w-full p-2 fixed bottom-0 left-0 z-0'>
        <ChatForm/>
    </div>  
    </>
  )
}
