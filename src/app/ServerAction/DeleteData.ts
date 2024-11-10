'use server'
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

export default async function DeleteData(itemId) {

        const prisma = new PrismaClient()
            try{
                
            const deleted = await prisma.notes.delete({
                where:{id:item.id},
            })
            console.log(deleted)
            }catch(err){
                console.log(err)
            }
            revalidatePath('/')
          }

