import React from "react";

import './Cards.css'

function Cards(images) {
    return (
        <>
            <h2>SKILLS</h2>
            <section className="skills">
                <div className="card-carasouel ">
                    <div className="card">
                        <div className="card-color"></div>
                        <img src={images} alt="CSS icon"></img>
                        <h3>HTML5</h3>
                        <p>Expert Knowledge in <span>HTML5</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards;