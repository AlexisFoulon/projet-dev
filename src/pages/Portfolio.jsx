import React from 'react'
import { CardPortfolio } from '../componnents/cardPortfolio'
import Banner from '../assets/img/banner.jpg'
import FreshFood from '../assets/img/fresh-food.jpg'
import Jap from '../assets/img/portfolio/restaurant-japonais.jpg'
import Wellnes from '../assets/img/portfolio/espace-bien-etre.jpg'
import SEO from '../assets/img/portfolio/seo.jpg'
import Code from '../assets/img/portfolio/coder.jpg'
import Screen from '../assets/img/portfolio/screens.jpg'


function Portfolio () {
    return (
        <div className='w-screen'>
            <img className="h-[300px]" src={Banner} alt="effet de lumière bleue" />
            <div className="flex flex-col justify-center items-center gap-2 ">
                <h2 className='text-5xl font-medium mt-14 mb-2'>Portfolio</h2>
                <h3 className='text-lg mb-5'>Voici quelques-unes de mes créations</h3>
                <hr className='h-1.5 bg-blue-500 w-xl mb-24 border-none'/>
            </div>
            <div className='grid grid-cols-3 gap-y-8 gap-x-10 max-w-7xl mx-auto'>                
                <CardPortfolio
                    imgSrc={FreshFood}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec PHP et MySQL"
                />
                <CardPortfolio
                    imgSrc={Jap}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec WordPress"
                    
                />
                <CardPortfolio
                    imgSrc={Wellnes}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec LARAVEL"
                />
                <CardPortfolio
                    imgSrc={SEO}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Utilisation des outils SEO"
                />
                <CardPortfolio
                    imgSrc={Code}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "PHP - SYMFONY"
                />
                <CardPortfolio
                    imgSrc={Screen}
                    title='Fresh Food'
                    description="Site de vente de produits frais en ligne"
                    infosRectangle= "Site réalisé avec FIGMA"
                />
            </div>
        </div>
    )
}


export default Portfolio