import React from "react";
 export default function Form(){
    return(
      
            <form action="" className="flex flex-col justify-between border border-gray-700 p-4 w-full  gap-5 mt-3 mx-10 ">
                
                <label htmlFor="inp1">Title</label>
                <input type="text" className="border border-black p-2" id="inp1" />

                <div className="flex flex-col bg-blue-500">
                    <label htmlFor="inp2">Description</label>
                    <textarea className="border border-black h-full" id="inp2" />
                </div>
                
                <label htmlFor="ipn3">Image</label>
                <input type="file" className="border border-black p-5" id="inp3" />
                
                <div className="flex justify-between">
                    <button className="border border-black p-1">Annuler</button>
                    <button className="border border-black p-1">Publier</button>
                </div>
            </form>
        
    )
 }