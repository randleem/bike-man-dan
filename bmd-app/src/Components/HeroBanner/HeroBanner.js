//rfec - shortcut
import React from 'react';

import './HeroBanner.css';

//need to get some good quality pics
import pic1 from '../../Images/pic1.jpg';
import pic2 from '../../Images/pic2.jpg';

function HeroBanner() {
    return (
        <div className='hero-container'>
            {/* <img className='hero-image' src={pic2} alt='BMD at work'/> */}
            <div className='hero-content'>
            <h1>Welcome to Bike Man Dan</h1>
            <h3>Anouncement 1</h3>
            </div>
            
        </div>
    )
}

export default HeroBanner
