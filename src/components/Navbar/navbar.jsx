import React from "react";

import './navbar.css'

function Navbar() {

    const navChange = () => {

        const nav = document.querySelector('nav')
    
        window.addEventListener('onclick', function () {
            if (window.scrollY > 100) {
                nav.classList.add('nav-scroll')
            } else {
                return nav.classList.remove('nav-scroll')
            }
        })

    }  


    return (
        <nav onClick={navChange} >
            <ul>
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
                <li><a>About me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;