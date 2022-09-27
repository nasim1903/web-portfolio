import React from "react";

import './InfoCard.css'

function InfoCard({text, text2}){

    return (
        <div className="infoCard" >
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    )

}

export default InfoCard;