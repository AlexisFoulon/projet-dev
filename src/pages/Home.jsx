import React, {useState} from 'react';
import heroBG from '../assets/img/hero-bg.jpg'
import AboutImg from '../assets/img/john-doe-about.jpg'
import Modal from '../componnents/Modal';

function Home () {

    const Paragraph = ({ children }) =>(
        <p className="text-sm leading-[1.9] mb-[15px] max-w-[98%]">
            {children}
        </p>
    );

    const SkillBar = ({ label, percentage, color }) => {
        return(
            <li className="mb-6">
                <span className="block mb-1">{label} - {percentage}%</span>
                <div className="w-[95%] h-[15px] bg-[#e0e0e0] rounded-[10px] overflow-hidden mb-5">
                    <div 
                        className="h-full rounded-[10px]"
                        style={{ width : `${percentage}%` , backgroundColor: color}}
                        
                    ></div>
                </div>
            </li>
        )
    };

    const ButtonHome = ({ onClick, texte }) =>{
        return(
            <button
                className="absolute mt-6 top-[60%] left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-red-500 text-white p-2 rounded-md z-10 hover:bg-red-800 cursor-pointer"
                onClick={onClick}
            >
                {texte}
            </button>
        )   
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        // separation du contenue en deux conatiner horizontaux 
        <div className="flex flex-col items-center w-screen">
            <div className='relative w-screen h-[900px] flex justify-center items-center overflow-hidden'>
                <img className='w-screen h-full object-cover object-center absolute top-0 left-0 opacity-70 z-[1]' src= {heroBG} alt ="Developpeur au travail"/>
                <div className="z-[2] relative w-full h-full text-center text-white flex flex-col gap-5 items-center justify-center px-4">
                    <div className="flex flex-col-reverse items-center gap-10">
                        <h1 className='text-3xl md:text-4xl mb-[150px]'>Développeur web et web mobile</h1>
                        <h2 className='text-5xl md:text-6xl'>Bonjour je suis John Doe</h2>
                    <ButtonHome onClick={openModal} texte='En savoir plus'/>  
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-around bg-zinc-50 shadow-lg/20 p-8 border-zinc-200 box-border w-[95%] max-w-[80%] max-h-[1800px] z-[1] mb-10 mt-7">
                <div className="w-full md:w-1/2">
                    <h3 className="text-[28px] pb-[15px] font-semibold">A propos</h3>
                    <hr className='w-[100%] h-[5px] rounded bg-blue-500 border-none mb-10'/>
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
                
                <div className="w-full md:w-1/2">
                    <h3 className="text-[28px] pb-[15px] font-semibold">Mes compétences</h3>
                    <hr className='w-[100%] h-[5px] rounded bg-blue-500 border-none mb-10'/>
                    <ul>
                        <SkillBar label="HTML" percentage={80} color="#f44336"/>
                        <SkillBar label="CSS" percentage={60} color="#0044ff" />
                        <SkillBar label="JAVASCRIPT" percentage={25} color="#ffd900" />
                        <SkillBar label="REACT JS" percentage={25} color="#ad20ff" />
                    </ul>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />

        </div>
    )
}



export default Home

