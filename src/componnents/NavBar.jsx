import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react"

const linkStyle =({isActive}) => 
    `relative transition-all duration-200 ease-in-out
    text-white opacity-70 hover:opacity-100 
    after:absolute after:-bottom-0.5 after:left-0 
    after:h-[2px] after:w-0 after:bg-white
    after:transition-[width] after:duration-350
    hover:after:w-full
   ${isActive ? "opacity-100 after:w-full font-semibold" : ""}`;

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return(
        <header className=" bg-zinc-600 text-white">
            <div className="h-[50px] flex items-center justify-between px-6">
                <span className='text-xl font-bold '>John Doe</span>

                <nav className="hidden md:flex gap-6 text-lg">
                    <NavLink to='/' className= {linkStyle} >Home</NavLink>
                    <NavLink to='/services' className= {linkStyle} >Services</NavLink>
                    <NavLink to='/portfolio' className= {linkStyle} >Portfolio</NavLink>
                    <NavLink to='/contact' className= {linkStyle} >Contactez-moi</NavLink>
                    <NavLink to='/mentions' className= {linkStyle} >Mention Légales</NavLink>
                </nav>

                <button 
                    className={`md:hidden z-50 p-2 rounded transition-all duration-300
                    ${menuOpen ? "backdrop-blur-md bg-zinc-200/10 -rotate-90" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu className="w-6 h-6"/>
                </button>
            </div>

            {menuOpen && (
                <div className="flex flex-col items-start gap-4 px-6 pb-4 md:hidden text-lg bg-zinc-600">
                    <NavLink to='/' className= {linkStyle} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to='/services' className= {linkStyle} onClick={() => setMenuOpen(false)}>Services</NavLink>
                    <NavLink to='/portfolio' className= {linkStyle} onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
                    <NavLink to='/contact' className= {linkStyle} onClick={() => setMenuOpen(false)}>Contactez-moi</NavLink>
                    <NavLink to='/mentions' className= {linkStyle} onClick={() => setMenuOpen(false)}>Mention Légales</NavLink>
                </div>
            )}
        </header>
    )
}

export default NavBar;