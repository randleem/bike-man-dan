import React from 'react';
import "./Card.css";

function Card({title, className, body}) {
    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <h1><i className={className}></i></h1>
            </div>
            <div className='card-title'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            
        </div>
    )
}

export default Card
