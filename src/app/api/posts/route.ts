import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {

    try{
  
        const prisma = new PrismaClient()
        const notes = await prisma.notes.findMany()
        return NextResponse.json(notes)
    }catch(err){
        console.log(err)
    }

}
export async function POST(request:Request) {

    try{
        
        const prisma = new PrismaClient()

        const { title, note } = await request.json()

        const posts = await prisma.notes.create({
            data:{
               title:title,
               note:note
            }
        })

        return NextResponse.json({msg:"Note is create successfully",Newpost:posts},{status:201})
    }catch(err){

        console.log(err)
        return NextResponse.json({error:"une erreur s'est produite veuillez ressayer plus tard",err:err},{status:500})



    }

}
