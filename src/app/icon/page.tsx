import React from "react";



// Importation des icônes depuis le style "Solid"
import { 
    UserIcon, 
    CogIcon, 
    BellIcon, 
    ShoppingCartIcon,
    CheckCircleIcon,
    XMarkIcon
} from "@heroicons/react/16/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import {MegaphoneIcon} from "@heroicons/react/16/solid";

// Importation des mêmes icônes depuis le style "Outline"
//import { HomeIcon as HomeOutline, UserIcon as UserOutline, CogIcon as CogOutline, BellIcon as BellOutline } from "@heroicons/react/24/outline";






export default function Icon(){
    return(
        <>
            <div className="flex justify-between items-center border-b-2 border-black w-full" >
                <div className="flex bg-white w-full p-2 gap-12" >

                    <CogIcon className="h-7 w-6 cursor-pointer "/>
              

                    <BellIcon className="h-7 w-6 cursor-pointer"/>
    

                    <UserIcon className="h-7 w-6 cursor-pointer" />

                    <MegaphoneIcon className="h-7 w-6 cursor-pointer" />

                    <ShoppingCartIcon className="h-7 w-6 cursor-pointer" />

                    <CheckCircleIcon className="h-7 w-6 cursor-pointer" />
                    
                    < XMarkIcon className="h-7 w-6 cursor-pointer" />

                    <SpeakerXMarkIcon className="h-7 w-6 cursor-pointer" />
                </div>
            </div>
        </>
    )
}