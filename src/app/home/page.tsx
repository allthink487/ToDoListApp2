import React from 'react'



import ShowData from '../components/ShowData'


export default async function Home() {
    return(
        <div className="h-screen w-full bg-slate-950 overflow-auto">
            <ShowData/> 
        </div>
    )
}