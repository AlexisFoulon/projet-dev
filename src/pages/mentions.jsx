import AccordionCard from "../componnents/AccordionCard"
import InfosPerso from "../componnents/infoPerso"
import World from '../assets/img/world.png'

const Mentions = () => {

    return(
        <div className="w-screen px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl mt-10 mb-10 text-center">Mentions légales</h1>
            <hr className="w-[250px] sm:w-[550px] h-1.5 bg-blue-500 border-none mb-20 mx-auto"/>
            <div className="w-full max-w-6xl mx-auto border border-gray-300 rounded-md overflow-hidden shadow-md mt-20 mb-20">
                    <AccordionCard 
                        title='Editeur du site'
                        content= {<InfosPerso/>} isFirst ={true} isLast={false}/>
                    <AccordionCard
                        title='Hébergeur'
                        content={ 
                            <div>
                                <ul>
                                    <li className="text-3xl text-black mb-4">alwaysdata</li>
                                    <li>91 Rue du Faubourg Saint-Honoré, 75008 Paris</li>
                                    <li className="flex gap-4 mt-4 " >
                                        <img 
                                            src={World} 
                                            alt="Planète"
                                            className="w-4 h-4 mt-1.5" />
                                        <a 
                                            href="https://www.alwaysdata.com/"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:blue-800 underline hover:text-lg transition-all duration-300"
                                            >www.alwaysdata.com</a>    
                                    </li>
                                </ul>
                            </div>
                        }/>
                    <AccordionCard
                        title='Crédits'
                        content={
                            <div>
                                <ul>
                                    <li className="text-3xl text-black mb-4">Crédits</li>
                                    <li >Ce site a été réalisé par Aléxis Foulon, étudiant au 
                                        <a 
                                        href="https://www.centre-europeen-formation.fr/"
                                        rel="noopener noreferrer"
                                        className="ml-1.5 text-blue-400 underline hover:text-blue-800 hover:text-lg transition-all duration-300">Centre Europpéen de formation</a>
                                    </li>
                                    <li className="italic mt-4">Les icônes utilisé sont des images gratuites importées de
                                        <a 
                                        href="https://www.flaticon.com/fr/"
                                        rel="noopener noreferrer"
                                        className="ml-1.5 text-blue-400 underline hover:text-blue-800 hover:text-lg transition-all duration-300 ">Flaticon</a>
                                    </li>
                                    <li className="italic mt-4">Les images utilisées sont libre de droits provenant de 
                                        <a 
                                        href="https://pixabay.com/fr/"
                                        rel="noopener noreferrer"
                                        className="ml-1.5 text-blue-400 underline hover:text-blue-800 hover:text-lg transition-all duration-300" >Pixabay</a>
                                    </li>
                                </ul>
                            </div>
                        }
                    />

            </div>
        </div>
    )
}

export default Mentions