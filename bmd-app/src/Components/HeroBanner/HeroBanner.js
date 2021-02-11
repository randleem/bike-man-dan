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
            <h1 className='hero-welcome'>Welcome to Bike Man Dan</h1>
            <br></br>
            <h3 className='hero-announcement'>{announcements}</h3>
            </div>
            
        </div>
    )
}

export default HeroBanner
