import React, {useState} from 'react';
import "./ServicesCard.css";

function ServicesCard({title, imageURL, summary, imageAlt, backgroundColor, fontColor}) {
const [fullDetail, setFullDetail] = useState(false);

function handleFullDetail(){
    setFullDetail(!fullDetail)
}
    return (
        <div className='services-card-container' style={{background: backgroundColor, color: fontColor}}>
            <div className='services-card-image'>
                <img src={imageURL} alt={imageAlt} />
            </div>
            <div className='services-card-title'>
                <h2>{title}</h2>
            </div>
            <div className='services-card-summary'>
                <p>{summary}</p>
            </div>
            <button className='services-card-more-info-button' onClick={handleFullDetail}>More Info</button>
            
        </div>
    )
}

export default ServicesCard
