import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
        <header className="header">
            <nav className="navBar">
            <span>John Doe</span>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Services'>Services</NavLink>
                <NavLink to='/Portfolio'>Portfolio</NavLink>
                <NavLink to='/Contact'>Contactez-moi</NavLink>
                <NavLink to='/MentionLegales'>Mention Légales</NavLink>
            </nav>
        </header>
        </nav>
    )
}

export default NavBar;