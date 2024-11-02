import React from "react";

export default function Dasbord(){
    return(
        <div className="flex flex-col p-2 gap-1 w-full h-screen ">
            <h1 className="font-[900] mt-1 ml-5">Dashbord</h1>
            <div className="border-2 rounded-md border-[#101010] h-1/2 w-full" ><p className="text-md font-[100]">votre nom: allthink</p></div>
            <h1 className="font-[900] mt-1 ml-5">Vos articles</h1>
            <div className="border-2 rounded-md border-[#101010] h-1/2 w-full font-[900]" ></div>
        </div>
    )

}

