//rfec - shortcut
import React, {useState, useEffect} from 'react';

import './HeroBanner.css';

//need to get some good quality pics
import pic1 from '../../Images/pic1.jpg';
import pic2 from '../../Images/pic2.jpg';

function HeroBanner() {
    const [announcements, setAnnouncements] = useState([`Don't forget to get your bike serviced regularly to prevent your bikes parts from wearing out`])

    return (
        <div className='hero-container'>
            {/* <img className='hero-image' src={pic2} alt='BMD at work'/> */}
            <div className='hero-content'>
            <button className='hero-content' className='hero-welcome'>Welcome to Bike Man Dan</button>
            <button className='hero-content' className='hero-announcement'>{announcements}</button>
            </div>
            
        </div>
    )
}

export default HeroBanner
