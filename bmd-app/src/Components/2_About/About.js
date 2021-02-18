import React from 'react';
import './About.css';
import Card from "../Card/Card";

function About() {
    return (
        <div id='about' className='about-container'>
            <div className='about-introduction'>
                <h1>Bike Man Dan gets your two wheels back on the road</h1>
                <div className='about-card-container'>
                <Card 
                    title="Mobile"
                    className="fas fa-wrench"
                    body="As a mobile mechanic - I come to you"
                />
                <Card 
                    title="Minimum Labour Charge"
                    className="fas fa-biking"
                    body="I have a minimum labour charge of £35 (excluding parts)"
                />
                <Card 
                    title="Assemble New Bikes"
                    className="fas fa-gift"
                    body="I also assemble new bikes that have been bought online and adjust the saddle to your perfect height"
                />
            </div>
            </div>
            
        </div>
    )
}

export default About
