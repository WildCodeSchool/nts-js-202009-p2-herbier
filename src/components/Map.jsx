import React from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import MapPicker from './logos/map-picker.svg';

const Card = styled.div`
  .map{
    height:50vh;
  }
`;

let myIcon = L.icon({
  iconUrl: MapPicker,
})

class Map extends React.Component {
  render() {
    return (
      <Card>
        <MapContainer
          className="map"
          center={[47.1961915, -1.5407704]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.1961915, -1.5407704]} icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Card>
    );
  }
}

export default Map;
