import React from 'react';
import heroBG from '../assets/img/hero-bg.jpg'
import AboutImg from '../assets/img/john-doe-about.jpg'
import './Home.css'
import Button from '../componnents/button'

function Home () {
    const handleClick = () =>{
        alert('boutton cliqué !')
    };

    const Paragraph = ({ children }) =>(
        <p className="!text-xs leading-[1.9] ml-[10px] !mb-[15px] max-w-[95%]">
            {children}
        </p>
    );

    return (
        // separation du contenue en deux conatiner horizontaux 
        <div className="flex flex-col items-center w-screen">
            <div className='relative w-screen h-[900px] flex justify-center items-center overflow-hidden'>
                <img className='w-screen h-full object-cover object-center absolute top-0 left-0 opacity-70 z-[1]' src= {heroBG} alt ="Developpeur au travail"/>
                <div className="z-[2] realtive w-full h-full text-center text-white flex flex-col gap-5 items-center justify-center px-4">
                    <div className="flex flex-col-reverse items-center gap-10">
                        <h1 className='!text-4xl md:text-3xl font-bold !mb-[150px]'>Developpeur web et web mobile</h1>
                        <h2 className='!text-6xl md:text-6xl font-bold'>Bonjour je suis John Doe</h2>
                    <Button onClick={handleClick} texte='En savoir plus'/>  
                    </div>
                </div>
            </div>

            <div className="flex justify-around bg-zinc-50 shadow-lg/20 p-8 border-zinc-200 box-border max-w-[80%] max-h-[800px] z-[1]">
                <div className="column">
                    <h3>A propos</h3>
                    <hr className='hr-title'/>
                    <img className='mb-5 w-[95%]' src={AboutImg} alt="photo de profil d'un developpeur" />
                    <div>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </Paragraph>
                    </div>  
                </div>
                <div className="column">
                    <h3>Mes compétences</h3>
                    <hr className='hr-title'/>
                    <ul className='skills'>
                        <li>
                            <span>HTML - 80%</span>
                            <div className="progress-bar bg-red">
                                <div className="progress" ></div>
                            </div>
                        </li>
                        <li>
                            <span>CSS - 60%</span>
                            <div className="progress-bar bg-blue">
                                <div className="progress"></div>
                            </div>
                        </li>
                        <li>
                            <span>JAVASCRIPT - 25%</span>
                            <div className="progress-bar bg-yellow">
                                <div className="progress"></div>
                            </div>
                        </li>
                        <li>
                            <span>REACT JS - 25%</span>
                            <div className="progress-bar bg-purple">
                                <div className="progress"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Home


