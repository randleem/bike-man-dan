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
                    body="Pick up and drop off at your home or work"
                />
                <Card 
                    title="Minimum Labour Charge"
                    className="fas fa-biking"
                    body="Minimum labour charge of £35 (excluding parts)"
                />
                <Card 
                    title="New Bike Build"
                    className="fas fa-gift"
                    body="Assemble new bike from the box"
                />
            </div>
            </div>
            
        </div>
    )
}

export default About
