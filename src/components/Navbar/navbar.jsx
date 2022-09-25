import React from "react";
import { useState } from "react";

import './navbar.css'

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    
    const changeBackground = () => {
        
        const nav = document.querySelector('nav')
        if (window.scrollY > 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
        
    }
    
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className= {navbar ? 'active' : 'nav'}>
            <ul>
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
                <li><a>About me</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;