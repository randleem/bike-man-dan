import React from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';


function GoogleMaps() {
    return (
        <div>
            <GoogleMap defaultZoom={10} defaultCenter={{lat: 52.4,lng: -1.9}}>

            </GoogleMap>
            <div id='map'></div>
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps))

export default WrappedMap;


