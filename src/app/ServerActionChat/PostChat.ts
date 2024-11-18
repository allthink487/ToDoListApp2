'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"




export default async function PostChat(formData:FormData) {
    const prisma = new PrismaClient() 

    try{
        
         
        await prisma.msgs.create({
        data:{
            msg:formData.get('msg') as string,
            
        },
    })
    

    }catch(err){
        console.log(`there are an error ${err}`)
    }
    revalidatePath('http://localhost:3000/home/home')
}
