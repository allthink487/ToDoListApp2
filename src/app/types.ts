

type User = {
    id: number
    pseudo:string
    email:string
    noteUser:Notetypes[]
}
export type Notetypes= {
    id : number
    title : string 
    note : string
    user : User
    userId : number
    noteId : number
    checked : boolean
    createdAt : Date
}