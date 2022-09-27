import React, { useState } from "react";

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

    
    const clickLinkAbout = () => {
        const about = document.getElementById('about')
        about.scrollIntoView()
    }

    const clickLinkHome = () => {
        const home = document.getElementById('home')
        home.scrollIntoView()
    }

    
    return (
        <nav className={navbar ? 'active' : 'nav'}>
            <ul>
                <li><button onClick={clickLinkHome} >Home</button></li>
                <li><button>Contact</button></li>
                <li><button onClick={clickLinkAbout} >About me</button></li>
            </ul>
        </nav >
    )
}

export default Navbar;