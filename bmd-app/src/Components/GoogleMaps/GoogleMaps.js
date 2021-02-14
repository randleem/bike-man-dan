import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const googleAPI = process.env.REACT_APP_GOOGLE_MAPS_API;

export class MapContainer extends  React.Component {
    render() {
      return (
        <Map google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Birmingham'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }
export default GoogleApiWrapper({
    apiKey: `${googleAPI}`
    })(MapContainer);