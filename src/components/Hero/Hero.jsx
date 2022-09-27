import React from "react";

import './hero.css'
import blob from './blob.png'

function Hero() {
    return (
        <section className="intro" id='home'>
            <div className="intro-text">
                <div>
                    <h3>HELLO I'M,</h3>
                    <h1>NASIM AHMED</h1>
                    <h3>SOFTWARE DEVELOPER</h3>
                </div>
            </div>
            <div className="img-section">
                <img src={blob} alt='blob'  className="blob"></img>
            </div>
        </section>
    )
}

export default Hero;