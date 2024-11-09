'use client'
import React,{useState} from 'react'

//inciting commit
import ShowData from './ShowData'


export default function Form() {

    const [titleValue,setTitleValue] = useState('')
    
    const [noteValue,setNoteValue] = useState('')

    const [refresh,setRefresh] = useState(false)


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        fetch('/api/posts',{
          method:"Post",

          body:JSON.stringify({title:titleValue,note:noteValue}),

          headers:{
          "Content-type":"application/json"
          }
          
        })
        
        setRefresh(prev => !prev)

    
      }

    
  return (

    <>
            <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center p-6 gap-2 h-1/2 border-b border-slate-800 ' method='post'>
                <input type="text" className='border-b-2 border-b-white/10 bg-transparent outline-none w-[500px] placeholder:text-center placeholder:font-[100] focus:border-b-blue-700 text-white font-bold text-xl tracking-[2px]' placeholder='Entrez le titre de la note' value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>
                <label htmlFor="inp2" className='text-xl font-bold text-white'>Note</label>
                <textarea id='inp2' className='w-1/2 min-h-56 bg-white/5 border border-white rounded-md focus:outline outline-2 outline-offset-4 outline-blue-700 p-3 text-white font-bold ' value={noteValue} onChange={(e)=>setNoteValue(e.target.value)}/>
                <button type="submit"className="bg-blue-700 font-bold py-2 px-3 text-white rounded-md mt-3">Creer</button>
            </form>
            <ShowData refresh={refresh} />
    </>



  )
}
