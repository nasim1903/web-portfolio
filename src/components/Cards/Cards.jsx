import React from "react";

import './Cards.css'

function Cards({ images, title, alt, text}) {

    return (
        <>
            <div className="card">
                <div className="card-color"></div>
                <img src={images} alt={alt}></img>
                <h3>{title}</h3>
                <p>{text} <span>{title}</span></p>
            </div>
        </>
    )
}

export default Cards;