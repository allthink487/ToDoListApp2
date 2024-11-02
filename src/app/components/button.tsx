import React from "react";
import Link from "next/link";

export default function Button({href,children}:{href:string,children:string}){

    return(
        <button className="bg-black text-white font-[600] border-black rounded-[7] 
        px-2 py-1"><Link href={href} >{children}</Link></button>
    )
}