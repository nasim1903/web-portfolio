import React from "react";

import './navbar.css'


function Navbar() {
    
    const nav = document.querySelector('nav')


    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#eee';
        } else {
            nav.style.backgroundColor = 'transparent'
        }
    })
    

    return (
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
                <li><a>About me</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;