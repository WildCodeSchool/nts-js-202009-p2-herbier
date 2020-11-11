import React from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import MapPicker from './logos/map-picker.svg';

const Card = styled.div`
  .cardmap {
    height: 50vh;
  }
`;

const myIcon = L.icon({
  iconUrl: MapPicker,
});

function LocationMarker() {
  const [position, setPosition] = React.useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>Votre position</Popup>
    </Marker>
  );
}

class Map extends React.Component {
  render() {
    return (
      <Card>
        <MapContainer
          className="cardmap"
          center={{ lat: 47.214975, lng: -1.557501 }}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </Card>
    );
  }
}

export default Map;
