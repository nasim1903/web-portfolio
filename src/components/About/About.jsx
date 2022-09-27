import React from "react";

import './About.css'
import myFaceImg from './me.png'

import InfoCard from "../InfoCard/InfoCard.jsx";

function About() {

    const about = document.getElementById('about')

    const clickLink = () => {
        about.scrollIntoView()
    }

    const p1 = "Hi i'm Nasim! I am a solution-driven Software Developer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction"
    const p2 =  "Proven experience developing Back End applications using Node JS and Front End applications using React. Built desktop and mobile applications with a few years of experience under my belt"

    return (
        <>
            <div className="about" id='about' onClick={clickLink} >
                <div className="myFace">
                    <img src={myFaceImg} className='myFace1'  alt="My face" />
                </div>
                </div>
                <div className="aboutMeText">
                    <div>
                    <InfoCard text={p1} text2={p2} />
                    </div>
            </div>
        </>
    )
}

export default About;