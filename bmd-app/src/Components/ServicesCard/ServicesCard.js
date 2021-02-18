import React from 'react';
import "./ServicesCard.css";

function ServicesCard({title, imageURL, body, imageAlt, backgroundColor, fontColor}) {
    return (
        <div className='services-card-container' style={{background: backgroundColor, color: fontColor}}>
            <div className='services-card-image'>
                <img src={imageURL} alt={imageAlt} />
            </div>
            <div className='services-card-title'>
                <h2>{title}</h2>
            </div>
            <div className='services-card-body'>
                <p>{body}</p>
            </div>
            <button className='services-card-more-info-button' onClick={() => console.log('Dan Smells')}>More Info</button>
            
        </div>
    )
}

export default ServicesCard
