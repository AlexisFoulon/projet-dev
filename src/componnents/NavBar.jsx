import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle =({isActive}) => 
    `relative transition-all duration-200 ease-in-out
    text-white opacity-70 hover:opacity-100 
    after:absolute after:-bottom-0.5 after:left-0 
    after:h-[2px] after:w-0 after:bg-white
    after:transition-[width] after:duration-350
    hover:after:w-full
   ${isActive ? "opacity-100 after:w-full font-semibold" : ""}`;

const NavBar = () => {
    return(
        <nav>
        <header className="h-[40px] bg-zinc-600 text-white flex items-center justify-between px-8 ">
            <span className='text-lg font-bold'>John Doe</span>
            <nav className="flex gap-6 text-lg">
                <NavLink to='/' className= {linkStyle} >Home</NavLink>
                <NavLink to='/services' className= {linkStyle} >Services</NavLink>
                <NavLink to='/portfolio' className= {linkStyle} >Portfolio</NavLink>
                <NavLink to='/contact' className= {linkStyle} >Contactez-moi</NavLink>
                <NavLink to='/mentions' className= {linkStyle} >Mention Légales</NavLink>
            </nav>
        </header>
        </nav>
    )
}

export default NavBar;