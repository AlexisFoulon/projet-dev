import React, { useState, useEffect } from "react";
import ImgGithub from '../assets/img/Img-Github.png'
import User from '../assets/img/user.png'
import Ping from '../assets/img/Ping.png'
import Text from '../assets/img/text.png'
import Cube from '../assets/img/cube.png'
import Users from '../assets/img/users.png'

function Modal ({ isOpen, closeModal}) {
    const [githubData, setGithubData] = useState(null);

    //Utilisation de useEffect pour Récuperer les donné une seule fois à l'ouverture de la page
    useEffect (() => {
        const fetchGithubData = async () => {
            const data = {
                name:"Aléxis Foulon",
                location:"Reims, France",
                bio:"Je suis Developpeur junior en apprentissage",
                repos: 3,
                followers:0,
                following:0,
            };
            setGithubData(data);
        }

        fetchGithubData()
    }, []);

    if (!isOpen) return null;


    const styleHr = () => 'border-gray-300/25 w-full'

    const StyleLi = () => 'flex items-center gap-4 '

    return(
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-gray-700 p-4 text-white rounded-md shadow-lg w-[650px] h-[550px] flex flex-col">
                <h2 className="text-2xl font-bold  mb-4">Mon profil GitHub </h2>
                <hr className="border-gray-300/25 mb-8"/>
                <div className="flex flex-row flex-1 overflow-hidden gap-6">
                    <img  
                    className="object-conatin rounded-md h-full max-h-[250px]"
                    src={ImgGithub} 
                    alt="AutoPortrait fait avec une ia" 
                    />
                    <div className="w-2/3 max-h-[450px] overflow-hidden pr-2">
                        {githubData ?(
                            <ul className="space-y-2 texte-sm">
                                <li className={StyleLi()}> 
                                    <img 
                                    src={User} 
                                    alt="icone utilisateur" 
                                    className={"w-5 h-5"}/>
                                    {githubData.name}
                                </li>
                                <hr className={styleHr()}/>
                                <li className={StyleLi()}>
                                    <img 
                                    src={Ping} 
                                    alt="icone de Localisation"
                                    className="w-5 h-5" />
                                    {githubData.location}
                                </li>
                                <hr className={styleHr()}/>
                                <li className={StyleLi()}>
                                    <img 
                                    src={Text} 
                                    alt="Icone de journal"
                                    className="h-5 w-5" />
                                    {githubData.bio}
                                </li>
                                <hr className={styleHr()}/>
                                <li className={StyleLi()}>
                                    <img 
                                    src={Cube} 
                                    alt="Icone de cube représentant des repository" 
                                    className="w-5 h-5"/>
                                    {githubData.repos}
                                </li>
                                <hr className={styleHr()}/>
                                <li className={StyleLi()}>
                                    <img 
                                    src={Users}
                                    alt="icone d'utilisateurs"
                                    className="w-5 h-5"/>
                                    {githubData.followers}
                                </li>
                                <hr className={styleHr()}/>
                                <li className={StyleLi()}>
                                    <img 
                                    src={Users}
                                    alt="icone d'utilisateurs"
                                    className="w-5 h-5"/>
                                    {githubData.following}
                                </li>
                            </ul>
                        ) : (
                            <p>Chargement des donées ...</p>    
                            
                        )}
                    </div>
                </div>

                <hr className='border-gray-300/25 w-full'/>
                <div className="flex justify-end mt-">
                    <hr />
                    <button  
                        onClick={closeModal}
                        className="mt-4 bg-gray-300 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300 cursor-pointer" 
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Modal