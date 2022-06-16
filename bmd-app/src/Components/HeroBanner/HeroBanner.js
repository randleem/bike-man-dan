//rfec - shortcut
import React, { useState, useEffect } from "react";

import "./HeroBanner.css";

function HeroBanner() {
  const [announcements, setAnnouncements] = useState([
    `Don't forget to get your bike serviced regularly to prevent your bikes parts from wearing out`,
  ]);

  return (
    <div className="hero-container">
      {/* <img className='hero-image' src={pic2} alt='BMD at work'/> */}
      <div className="hero-content">
        {/* <button className='hero-content hero-welcome' >Welcome to Bike Man Dan, your Local Mobile Bike Mechanic</button>
            <button className='hero-content hero-announcement' >{announcements}</button> */}
        <div id="hero-container-text">
          <p id="hero-text">
            Your local mobile bicycle maintenance and repair service proudly
            serving cyclists in and around Birmingham since 2011
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
