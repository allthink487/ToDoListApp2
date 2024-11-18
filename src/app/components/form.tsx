
import React from 'react'



import PostData from '../ServerAction/PostData'

export default function Form() {




    
  return (

    <div className=' overflow-y-auto w-full '>
            <form action={PostData} className='flex flex-col w-full justify-center items-center p-6 gap-2  border-b border-slate-800 '>
              
                <input type="text" className='border-b-2 border-b-white/10 bg-transparent outline-none md:w-[500px] placeholder:text-center placeholder:font-[100] focus:border-b-blue-700 text-white font-bold text-xl tracking-[2px]' placeholder='Entrez le titre de la note' name='title'/>

                <label htmlFor="inp2" className='text-xl font-bold text-white'>Note</label>
                <textarea id='inp2' className='md:w-1/2 w-full min-h-56 bg-white/5 border border-white rounded-md focus:outline outline-2 outline-offset-4 outline-blue-700 p-3 text-white font-bold ' name='note'/>

                <button type="submit" className={` font-bold py-2 px-3 text-white rounded-md mt-3 bg-blue-700 `} >Creer</button>
            </form>
 
    </div>



  )
}
