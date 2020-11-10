import React from 'react';
import { geolocated } from 'react-geolocated';

class Geo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Votre navigateur ne prend pas en charge la géolocalisation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>La Geolocalisation n'est pas activée</div>
    ) : this.props.coords ? (
      <span>
        {this.props.coords.latitude}, {this.props.coords.longitude}
      </span>
    ) : (
      <div>En attente de votre localisation&hellip; </div>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geo);
