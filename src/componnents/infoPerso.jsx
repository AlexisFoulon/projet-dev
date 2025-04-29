import React from "react";
import Map from '../assets/img/Map.png'
import Ping from '../assets/img/Ping.png'
import Smartphone from '../assets/img/Smartphone.png'
import Email from '../assets/img/Email.png'


function InfosPerso (){
    return(
        <div>
            <h3 className="text-3xl mb-6">John Doe</h3>
                <ul>
                    <li className="flex items-center gap-2"> 
                    <img src={Map} alt="Carte GoogleMaps" className="w-4 h-4" />
                    <a 
                        href="https://maps.app.goo.gl/oCen7Gxy8rsutgEZA" 
                        target="_blank"
                        rel="noopener norreferrer"
                        className="transition-all duration-400 hover:underline hover:text-xl"
                    >
                        40 rue Laure Diebold
                    </a>
                </li>
                <li className="flex items-center gap-2"> 
                    <img src={Ping} alt="Carte GoogleMaps" className="w-4 h-4" />
                    <a 
                        href="https://maps.app.goo.gl/oCen7Gxy8rsutgEZA" 
                        target="_blank"
                        rel="noopener norreferrer"
                        className="transition-all duration-400 hover:underline hover:text-xl"
                    >
                    69009 Lyon, France
                    </a>
                </li>
                <li className="flex items-center gap-2" > 
                    <img src={Smartphone} alt="image de Smartphone" className="w-4 h-4"/>
                    <a href="tel:+1020304050"
                        target="_blank"
                        rel="noopener norreferrer"
                        className="transition-all duration-400 hover:underline hover:text-xl"
                    >    
                        10 20 30 40 50
                    </a>
                </li>
                <li className="flex items-center gap-2" > 
                    <img src={Email} alt="image de Smartphone" className="w-4 h-4"/>
                    <a href="Mailto:jonh.doe@gmail.com"
                        target="_blank"
                        rel="noopener norreferrer"
                        className="transition-all duration-400 hover:underline hover:text-xl"
                    >    
                    jonh.doe@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InfosPerso