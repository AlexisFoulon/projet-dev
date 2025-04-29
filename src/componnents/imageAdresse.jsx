import React, {useState} from "react";

export default function ImageAdresse ({ src, alt }) {
    const [isOpen, setIsOpen] = useState (false);


    return (
        <>
            {/* image cliquable */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
                <img 
                    src={src} 
                    alt={alt}
                    className="w-full h-full cursor-pointer object-cover hover:opacity-80 transition duration-200"
                    onClick={() => setIsOpen(true)} 
                />
            </div>
            {/* lightbox */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-gray-500 bg-opacity-10 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick ={() => setIsOpen(false)} //fermer au clic
                >
                    <img 
                        src={src} 
                        alt={alt}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg transition-transform duration-300 transform scale-100 hover:scale-105"
                    />
                </div>
            )}
        </>
    )
}