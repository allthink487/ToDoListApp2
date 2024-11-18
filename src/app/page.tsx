'use client'

import Link from 'next/link'
import React from 'react'

export default function LoginForm() {

  return (
    <div className='flex justify-center items-center h-screen w-full '>
        <form action="" className='flex flex-col justify-between items-center p-4 bg-white shadow-lg  shadow-slate-600  h-1/2 rounded-md '>
            
            <div className='flex flex-col gap-4'>
                <div className='text-center'>
                    <label htmlFor="inp1" className='font-bold text-xl text-blue-700'>Pseudo</label>
                    <p className='text-sm opacity-65'>Le Pseudo (surnom) sera afficher pour que les autre utilisateur vous reconnaissent</p>
                </div>
                
                <input type="text" id="inp1" placeholder='Entrez votre Pseudo' className='border border-black rounded-md focus:outline outline-4 outline-blue-600 outline-offset-2 p-2'/>

                <label htmlFor="inp1" className='font-bold text-xl text-center text-blue-700'>Email</label>
                <input type="text" id="inp1" placeholder='Entrez votre Email' className='border border-black rounded-md focus:outline outline-4 outline-blue-600 outline-offset-2 p-2'/>
            </div>

            <div className='w-full'>
                <button className='bg-gradient-to-l from-blue-700 to-blue-600 via-blue-500 p-2 w-full rounded-md font-bold text-white' ><Link href="/home" >Soummetre</Link></button>
            </div>
        </form>
    </div>
  )
}
