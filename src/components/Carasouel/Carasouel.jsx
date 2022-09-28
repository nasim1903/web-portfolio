import React from "react";

import Cards from "../Cards/Cards";

import CSS from './images/CSSlogo.png'
import JS from './images/JSlogo.png'
import HTML from './images/HTMLsign.png'
import Reactlogo from './images/Reactlogo.png'
import nodeIcon from './images/node.png'
import mongo from './images/mongo.png'
import expressIcon from './images/expressjs.png'
import sqlIcon from './images/postgres.png'
import gitIcon from './images/git.png'

function Carasouel() {

    return (
        <>
            <div className='start' >
                <Cards images={JS} alt={'JS icon'} title={'Javascript'} text={'Proficient experience in'}></Cards>
            </div>
            <Cards images={Reactlogo} alt={'React icon'} title={'React'} text={'Creating Web Applications such as this site using'}></Cards>
            <Cards images={nodeIcon} alt={'Node JS icon'} title={'NodeJS'} text={'Practical experience creating Back End apps using'}></Cards>
            <Cards images={expressIcon} alt={'Express JS icon'} title={'ExpressJS'} text={'Created servers and REST APIs for Back End apps using'}></Cards>
            <Cards images={mongo} alt={'MongoDB icon'} title={'MongoDB'} text={'Experienced in creating NoSQL databases using'}></Cards>
            <Cards images={sqlIcon} alt={'Postgres icon'} title={'PostgresSQL'} text={'On top of NoSQL databases i have used SQL databases such as'}></Cards>
            <Cards images={gitIcon} alt={'Git Icon'} title={'Git'} text={'Mangaged projects such as this portfolio site using'}></Cards>
            <Cards images={HTML} alt={'HTML icon'} title={'HTML5'} text={'Knowledge in'}></Cards>
            <Cards images={CSS} alt={'css icon'} title={'CSS3'} text={'Expert Knowledge in'}></Cards>
        </>
    )
}

export default Carasouel;