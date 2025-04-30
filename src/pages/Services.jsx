import Banner from '../assets/img/banner.jpg'
import { Card } from '../componnents/card'
import Pinceau from '../assets/img/pinceau.png'
import Balise from "../assets/img/balise.png"
import Loupe from "../assets/img/loupe.png"

function Services () {
    return (
        <div className="w-screen">
            <img className="h-[300px] object-cover" src={Banner} alt="effet de lumière bleue" />
            <div className="flex flex-col justify-center items-center gap-2 ">
                <h2 className='text-4xl sm:text-5xl mt-14 mb-2'>Mon offre de services</h2>
                <h3 className='text-base sm:text-lg mb-5'>Voici les prestations sur lesquelles je peux intervenir</h3>
                <hr className='h-1.5 bg-blue-500 w-[250px] sm:w-[500px] mb-24 border-none'/>
            </div>
            
            {/* imgClassName pour definir des style particulieremnt sur ces images ci, sans restraindre les autre image utilisant card */}
            <div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
                <Card
                     imgSrc={Pinceau}
                     imgClassName='w-10 h-10'
                     title="UX Design"
                     description="L'UX Design est une discipline qui consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations.
                        L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
                />
                <Card
                    imgSrc={Balise}
                    imgClassName='w-10 h-10'
                    title="Développement web"
                    description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (TailwindCSS, React, Angular, etc.)."
                />
                <Card
                    imgSrc={Loupe}
                    imgClassName='w-10 h-10'
                    title="Référencement"
                    description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.).
                        L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
                />
            </div>
           
        </div>
    )
}


export default Services