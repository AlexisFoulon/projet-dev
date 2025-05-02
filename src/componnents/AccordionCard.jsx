import {useState} from "react";
import ArrowDown from '../assets/img/ArrowDown.png'

function AccordionCard ({title, content, isFirst, isLast}) {
    const [isOpen, setIsOpen] = useState (false)
    
    const roundedClass = isFirst
        ?"rounded-t-md "
        :isLast
        ?"rounded-b-md"
        :""


    return(
        <div className={`bg-zinc-50 w-full border-t border-zinc-200 ${roundedClass}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="flex justify-between items-center w-full p-4 text-left text-base sm:text-lg font-medium"
            >
                {title}
                <img src={ArrowDown} 
                alt="fléche"
                className={`w-4 h-4 object-contain transition-transform duration-300 ${isOpen ? 'rotate-180': ''}`}
                />
            </button>
            {isOpen && (
                <div className="p-4 bg-white text-gray-700 border-t border-gray-300 ">
                    {content}
                </div>
            )}
            
        
        </div>

    )
}

export default AccordionCard