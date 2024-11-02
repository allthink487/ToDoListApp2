import React from "react"
import Image from "next/image"
export default function ImgText({width=25,height=25,src,href,children=""}:{width?:number,height?:number,src:string,href:string,children?:string}){
    return(
        <>
        <a href={href} className="flex flex-col items-center justify-center">
            <Image src={src}
            alt="Next.js logo" 
            width={width} 
            height={height}/>
          <span className="text-sm mt-1 text-1xl font-[100]" >{children}</span>
          </a>
        </>
    )
}