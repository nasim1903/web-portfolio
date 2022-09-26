import React from "react";
import { useState } from "react";

import './navbar.css'

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    
    const changeBackground = () => {
        
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
        
    }
    
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className= {navbar ? 'active' : 'nav'}>
            <ul>
                <li><button>Home</button></li>
                <li><button>Contact</button></li>
                <li><button>About me</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;