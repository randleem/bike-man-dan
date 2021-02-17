//rfec - shortcut
import React from 'react'
import './Home.css';
// Components
import HeroBanner from '../HeroBanner/HeroBanner';

function Home() {
    
    return (
        <div>
            <HeroBanner/>
            <div className='home-container'>
            <div className='home-text'>
                <p>Hi, my name is Dan, your local mobile bicycle mechanic, I have been proudly serving cyclists in Birmingham and surrounding areas since 2011</p>
            </div>
        </div>
        </div>
    )
}

export default Home
