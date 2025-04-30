import React from "react";
import { ButtonBlue } from "./buttonBlue";

export const CardPortfolio = ({imgSrc, title, description, infosRectangle}) => {
    return(
        <div className="w-[400px] h-[450px] mb-8 bg-zinc-50 flex flex-col items-center text-center border border-gray-300 rounded-md hover:bg-zinc-200 hover:shadow-lg overflow-hidden ">
            <img className="w-full h-[250px] object-cover" src={imgSrc} alt={title}/>
            <div className="p-6 flex flex-col items-center justify-between">
                <h4 className="mb-2 text-2xl font-bold">{title}</h4>
                <p className="mb-4">{description}</p>
                <ButtonBlue texte="Voir le site"/>

                <div className="mt-4 w-[400px] p-2 border border-gray-300 shadow-md bg-zinc-100 text-black text-center rounded-b-lg  hover:bg-zinc-200 hover:shadow-lg">
                    {infosRectangle}
                </div>
            </div>
        </div>
    )
}