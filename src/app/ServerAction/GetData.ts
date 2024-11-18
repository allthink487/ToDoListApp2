'use server'
import { PrismaClient } from "@prisma/client"

export default async function GetData() {
    const prisma = new PrismaClient()
    const items = await prisma.notes.findMany()
    return items
}
