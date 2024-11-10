'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"


export default async function PostData(formData:FormData) {
    const prisma = new PrismaClient() 

    try{

        await prisma.notes.create({
            data:{
                title:formData.get('title') as string,
                note:formData.get('note') as string,
            }
        })

    }catch(err){
        console.log(`there are an error ${err}`)
    }
    revalidatePath('/')
}
