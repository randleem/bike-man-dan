import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

// https://www.youtube.com/watch?v=Pf7g32CwX_s


function GoogleMaps() {
    return (
        <div>
            <GoogleMap defaultZoom={10} defaultCenter={{lat: 52.486244,lng: -1.890401}}>

            </GoogleMap>
            <div id='map'></div>
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps))

export default WrappedMap;

// use dan@bikemandan.co.uk account to get an api key 
