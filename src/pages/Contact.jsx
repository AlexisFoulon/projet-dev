import React from "react";
import { ButtonBlue } from "../componnents/buttonBlue";
import InfosPerso from "../componnents/infoPerso";
import ImageAdresse from "../componnents/imageAdresse";
import Adresse from '../assets/img/Adresse.png'

function Contact (){

    const styleInput = () => 'w-full p-2 border border-gray-300 rounded focus:outline-none placeholder-opacity-50 placeholder-gray-400'

    return(

        <div>
            <div className= "w-screen mt-8 mb-6 flex justify-center items-center flex-col">
                <h1 className="text-3xl mb-4">Contact</h1>
                <p className="text-center">
                    Pour me contacter en vue d'un entretien ou d'une fututr collaboration, merci de remplir le formulaire de contact.
                </p>
                <hr className="w-[250px] md:w-[500px] h-1.5 mt-6 border-none bg-blue-500"/>
            </div>
            <div className="w-screen h-full flex items-center justify-center px-6 mb-10">
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center bg-zinc-50 shadow-2xl border border-gray-200 rounded-xl p-6">
                    {/* Partie formulaire */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-4 flex flex-col">
                        <h2 className="text-3xl mb-4">Formulaire de contact</h2>
                        <hr className="w-full max-w-[570px] h-1.5 bg-blue-500 border-none mb-10"/>
                        <form className="w-full space-y-4 ">
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
                            className="w-full resize-y max-h-[300px] min-h-[150px] p-2 border border-gray-300 rounded focus:outline-none placeholder-gray-400/50" 
                            />
                            <div className="justify-center items-center flex w-full">
                                <ButtonBlue texte="Envoyer"/>
                            </div>
                        </form>
                    </div>
                    {/* Partie coordonées perso */}
                    <div className="w-full md:w-1/2 md:pl-4 flex flex-col ">
                        <h2 className="text-3xl mb-4">Mes coordonnées</h2>
                        <hr className="w-full max-w-[560px] h-1.5 bg-blue-500 border-none mb-10"/>
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