import React from "react";
import { Link } from "react-router-dom";


const styleLi =() => 'mb-2 text-sm text-zinc-300 leading-[1.1]'

const styleLink =() => 'mb-2 text-sm text-zinc-300 leading-[1.1] hover:underline hover:text-white hover:opacity-100'

const Footer = () => {
    return(
        <div className="bg-zinc-600 text-white w-full h-auto px-6 py-10 flex flex-col md:flex-row md:justify-evenly md:items-center gap-10 md:gap-0 ">
            
            <div className="w-48">
                <h3 className='mb-4 text-xl '>John Doe</h3>
                <ul>
                    <li className={styleLi()}>40 rue Laure Diebold</li>
                    <li className={styleLi()}>69009 Lyon, France</li>
                    <li className={styleLi()}>10 20 30 40 50</li>
                    <li className={styleLi()}>john.doe@gmail.com</li>
                </ul>
                <div className="flex space-x-4 mt-4">
                    {/* noopener utilisé ici pour plus de sécurité */}
                    <a href="https://github.com" target="_blank" rel="noopener">
                        <img src="./src/assets/img/Github.png" 
                        alt="logo github .png" 
                        className="w-5 h-5 opacity-50 hover:opacity-100"/>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener">
                        <img src="./src//assets/img/twitterx.png" 
                        alt="logo x anciennement tweeter .png" 
                        className="w-5 h-5 opacity-50 hover:opacity-100"/>
                    </a>
                    <a href="https://fr.linkedin.com/" target="_blank" rel="noopener">
                        <img src="./src/assets/img/linkendin.png" 
                        alt="logo linkendin .png"  
                        className="w-5 h-5 opacity-50 hover:opacity-100"/>
                    </a>
                </div>
            </div>

            <div className="w-48">
                <h3 className='mb-5 text-xl'>Liens utiles</h3>
                <ul>
                    <li className={styleLink()} >
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to="/services">Services</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to="/contact">Me contacter</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to="/mentions">Mentions légales</Link>
                    </li>
                </ul>
            </div>

            <div className="w-60">
                <h3 className='mb-4 text-xl text-left'>Mes dernières réalisations</h3>
                <ul>
                    <li className={styleLink()}>
                        <Link to="/portfolio">Fresh Food</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to ="/portfolio">Restaurant Akira</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to ="/portfolio">Espace bien-être</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to ="/portfolio">SEO</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to ="/portfolio">Création d'une API</Link>
                    </li>
                    <li className={styleLink()}>
                        <Link to ="/portfolio">Maquette d'un site</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Footer