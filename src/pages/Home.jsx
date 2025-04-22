import React from 'react';
import heroBG from '../assets/img/hero-bg.jpg'
import AboutImg from '../assets/img/john-doe-about.jpg'
import './Home.css'
import Button from '../componnents/button'

function Home () {
    const handleClick = () =>{
        alert('boutton cliqué !')
    };

    return (
        // separation du contenue en deux conatiner horizontaux 
        <div className="main-containt">
            <div className='top-container'>
                <img className='img-home' src= {heroBG} alt ="Developpeur au travail"/>
                <div className="top-content">
                    <div className="title-container">
                        <h1 className='title'>Developpeur web et web mobile</h1>
                        <h2 className='subtitle'>Bonjour je suis John Doe</h2>
                    </div>
                    <Button onClick={handleClick} texte='En savoir plus'/>
                </div>
            </div>

            <div className="bottom-container">
                <div className="column">
                    <h3>A propos</h3>
                    <hr className='hr-title'/>
                    <img className='img-about' src={AboutImg} alt="photo de profil d'un developpeur" />
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, magnam vitae iusto cum nisi sed pariatur nobis, necessitatibus, aliquam non dicta deserunt cupiditate expedita? Id quibusdam eligendi quas dolor laudantium iste suscipit 
                            porro consequuntur iure minus ?
                        </p>
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


