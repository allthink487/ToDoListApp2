"use client"

import { FaTrashAlt } from "react-icons/fa";
import DeleteData from "../ServerAction/DeleteData";

export default function ButtonDelete({id}:{id:number}) {
  return (
    <button onClick={()=>DeleteData(id)} ><FaTrashAlt className="text-white" /></button>
  )
}
