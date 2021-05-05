import React from 'react';
import './Areas.css';

import WrappedMap from '../GoogleMaps/GoogleMaps';
import PostcodeChecker from './PostcodeChecker.js';

function Areas() {
    return (
        <div id='areas' className='areas-container'>
            <div className='areas-child areas-google-map'>
                <WrappedMap 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            <div className='areas-child areas-text'>
                <h1>Areas of Service</h1>
                <h2>As a mobile bike mechanic I come to you!</h2>
                <h3>Typically I will take your bike away to service or repair, and I will bring the bike back to your home</h3>
                <h3>Some small jobs e.g. puncture repair or a new innertube fitting I will do on site</h3>
                <h3>Any questions please give me a call</h3>
            </div>
            <div className='areas-child areas-postcode-day-checker'>
                <PostcodeChecker/>
            </div>
            
        </div>
    )
}

export default Areas
