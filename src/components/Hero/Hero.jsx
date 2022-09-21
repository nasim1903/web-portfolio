import React from "react";

import './hero.css'

function Hero() {
    return (
        <section className="intro">
            <img src="img/small blob.png" alt="" className="small-blob"></img>
            <div className="intro-text">
                <div>
                    <h3>HELLO I'M,</h3>
                    <h1>NASIM AHMED</h1>
                    <h3>FRONT END DEVELOPER</h3>
                </div>
            </div>
            <div className="img-section">
                <img src="img/blob.png" alt="blob" className="blob"></img>
            </div>
        </section>
    )
}

export default Hero;