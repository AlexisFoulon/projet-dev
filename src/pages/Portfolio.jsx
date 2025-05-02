import React from 'react'
import { CardPortfolio } from '../componnents/cardPortfolio'
import Banner from '../assets/img/banner.jpg'
import FreshFood from '../assets/img/fresh-food.jpg'
import Jap from '../assets/img/portfolio/restaurant-japonais.jpg'
import Wellness from '../assets/img/portfolio/espace-bien-etre.jpg'
import SEO from '../assets/img/portfolio/seo.jpg'
import Code from '../assets/img/portfolio/coder.jpg'
import Screen from '../assets/img/portfolio/screens.jpg'


function Portfolio () {
    return (
        <div className='w-screen'>
            <img className="h-[300px] w-screen object-cover" src={Banner} alt="effet de lumière bleue" />
            <div className="flex flex-col justify-center items-center gap-2 ">
                <h2 className='text-5xl mt-14 mb-2'>Portfolio</h2>
                <h3 className='text-lg mb-5'>Voici quelques-unes de mes créations</h3>
                <hr className='h-1.5 bg-blue-500 w-[250px] sm:w-[500px] mb-24 border-none'/>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 max-w-7xl mx-auto px-4 justify-center place-items-center'>                
                <CardPortfolio
                    imgSrc={FreshFood}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec PHP et MySQL"
                />
                <CardPortfolio
                    imgSrc={Jap}
                    title='Restaurant Akira'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec WordPress"
                    
                />
                <CardPortfolio
                    imgSrc={Wellness}
                    title='Espace bien-être'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec LARAVEL"
                />
                <CardPortfolio
                    imgSrc={SEO}
                    title='SEO'
                    description="Amélioration du référencement d'un site e-commerce"
                    infosRectangle= "Utilisation des outils SEO"
                />
                <CardPortfolio
                    imgSrc={Code}
                    title="Création d'une API"
                    description="Création d'un API RESTFULL publique"
                    infosRectangle= "PHP - SYMFONY"
                />
                <CardPortfolio
                    imgSrc={Screen}
                    title="Maquette d'un site web"
                    description="Création du prototype d'un site"
                    infosRectangle= "Site réalisé avec FIGMA"
                />
            </div>
        </div>
    )
}


export default Portfolio