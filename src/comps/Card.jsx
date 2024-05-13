import React from "react";
import { Instagram, Linkedin, Facebook,  } from 'lucide-react';


const Card = ({imageUrl, name, phone} ) =>{
    return(
    <div className="flex items-center flex-col h-52 w-44  p-1 bg-slate-400">
     <div className="rounded-full h-24 w-24">
        <img className="rounded-full"
        src={imageUrl}>
        </img>
    </div>
    <div className="flex items-center flex-col h-fit w-fit ">
        <span className="pt-1">{name}</span>
        <span className="text-sm opacity-70 pt-1">{phone}</span>
        </div>
    </div>
    )
}
export default Card