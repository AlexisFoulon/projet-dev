import React from "react";
import { ButtonBlue } from "../componnents/buttonBlue";
import InfosPerso from "../componnents/infoPerso";
import ImageAdresse from "../componnents/imageAdresse";
import Adresse from '../assets/img/Adresse.png'

function Contact (){

    const styleInput = () => 'w-[580px] p-2 border border-gray-300 rounded focus:outline-none placeholder-opacity-50 placeholder-gray-400'

    return(

        <div>
            <div className= "w-screen mt-8 mb-6 flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <p>
                    Pour me contacter en vue d'un entretien ou d'une fututr collaboration, merci de remplir le formulaire de contact.
                </p>
                <hr className="w-[500px] h-2 mt-6 border-none bg-blue-500"/>
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-[1200px] h-[750px] flex justify-center ml-6 mb-6 bg-zinc-50 shadow-2xl border border-gray-200 rounded-xl">
                    {/* Partie formulaire */}
                    <div className="w-[50%] flex flex-col p-6">
                        <h2 className="text-3xl font-semibold mb-4">Formulaire de contact</h2>
                        <hr className="w-[570px] h-1.5 bg-blue-500 border-none mb-10"/>
                        <form className="w-full max-w-md space-y-4 justify-center items-center ">
                            <input 
                            type="text"
                            placeholder="Votre nom"
                            required
                            className={styleInput()}
                            />
                            <input 
                            type="email"
                            placeholder="Votre Mail"
                            required
                            className={styleInput()} 
                            />
                            <input 
                            type="tel" 
                            name="phone" id="phone" 
                            maxLength={10} required 
                            pattern="[0-9]{10}"
                            placeholder="10 20 30 40 50"
                            className={styleInput()} 
                            // Oblige l'utilisateur à utilisé des chiffres 
                            onInput={(e) =>{
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            }}
                            />
                            <input 
                            type="text" 
                            placeholder="Sujet"
                            required
                            className={styleInput()} 
                            />
                            <textarea 
                            placeholder="Votre message"
                            required minLength={10}
                            className="w-[580px] resize-y max-h-[300px] min-h-[150px] p-2 border border-gray-300 rounded focus:outline-none placeholder-opacity-50 placeholder-gray-400" 
                            />
                            <div className="justify-center items-center flex w-[580px]">
                                <ButtonBlue texte="Envoyer"/>
                            </div>
                        </form>
                    </div>
                    {/* Partie coordonées perso */}
                    <div className="w-[50%] flex flex-col p-6 ">
                        <h2 className="text-3xl font-semibold mb-4">Mes coordonnées</h2>
                        <hr className="w-[560px] h-1.5 bg-blue-500 border-none mb-10"/>
                        <div>
                            <InfosPerso/>
                        </div>
                        <div className="mt-8">
                            <ImageAdresse src={Adresse} alt="Adresse Google Maps"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact