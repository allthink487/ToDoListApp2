
import React from 'react'


import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

/* interface Post {
  id: number;
  title: string;
  note:string,
  createdAt:Date
}*/

export default async function ShowData() {

    const prisma = new PrismaClient()

    const items = await prisma.notes.findMany()


  return (
    <div className='flex flex-col gap-4 '>
       {items && items.map( item =>
              <div key={item.id} className='flex flex-col p-4 gap-2 relative '>

                <button className=' opacity-0 absolute text-md text-white hover:opacity-20 left-0 bottom-0 mb-7 '>{'<='}</button>

                <button className=' opacity-0 absolute text-md text-white hover:opacity-20 left-0 bottom-0 ml-4 mb-1' onClick={async ()=>{
                'use server'
                const prisma = new PrismaClient()
                    try{
                        
                    const deleted = await prisma.notes.delete({
                        where:{id:item.id},
                    })
                    console.log(deleted)
                    }catch(err){
                        console.log(err)
                    }
                    revalidatePath('/')
                  }}>X</button>

                <div className='flex gap-2'>
                  <input type="checkbox"  className='p-10 bg-transparent'/>
                  <h1 className='text-white divide-y text-2xl font-bold'>
                      {item.title}
                    </h1>   
                </div>
        
                  <div className=' bg-slate-900 max-w-3xl border border-white rounded-md p-3 text-white leading-7 overflow-auto ml-5'>{item.note}</div>       
                </div>
       )}       
    </div>
  )
}

