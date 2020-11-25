import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
import MapPickerBlue from './logos/map-picker-blue.svg';
import ParkList from './ParkList';
import { calcDistance } from '../utils';

const Card = styled.div`
  .cardmap {
    height: 50vh;
    z-index: 95;
    border-radius: 5px;
    margin-bottom: 20px;
    filter: grayscale(${({ position }) => (position === null ? '60%' : '0%')});
  }
`;

const ClickMessage = styled.div`
  display: ${({ position }) => (position === null ? 'block' : 'none')};
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const Icon = L.icon({
  iconUrl: MapPicker,
  iconSize: [30, 30],
});

const myIcon = L.icon({
  iconUrl: MapPickerBlue,
  iconSize: [30, 30],
});

const ParkNear = styled.div`
  display: flex;
  flex-direction: column;
`;

function LocationMarker(props) {
  const [position, setPosition] = React.useState(null);
  const { getPosition } = props;
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      getPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>Votre position</Popup>
    </Marker>
  );
}

function Map(props) {
  const { rangeDistance, showNantes } = props;
  const [position, setPosition] = React.useState(null);
  const [parks, setParks] = React.useState([]);
  const [parksupp, setParksupp] = React.useState([
    {
      fields: {
        location: [47.2752, -1.580253],
        nom_complet: 'Arboretum Cimetière Parc',
        idobj: '1016',
      },
    },
    {
      fields: {
        location: [47.222245, -1.538662],
        nom_complet: 'Cimetière de la Bouteillerie',
        idobj: '1016',
      },
    },
    {
      fields: {
        location: [47.231688, -1.58187],
        nom_complet: 'Foyer des Anciens',
        idobj: '1016',
      },
    },
    {
      fields: {
        location: [47.2269, -1.511953],
        nom_complet: "Jardin d'agronomie tropical du Grand Blottereau",
        idobj: '1016',
      },
    },
  ]);

  React.useEffect(() => {
    Axios.get(
      'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=92&apikey=2f32ed799486d788edf5f463168e5500e0dc963879c989c1cf49776a'
    ).then((res) => {
      if (res.data.records.length !== parks.length) {
        setParks(res.data.records);
      }
    });
  }, [parks]);

  const getPosition = (pos) => {
    setPosition(pos);
  };

  return (
    <Card position={position}>
      <ClickMessage position={position}>
        Pour commencer, cliquez sur la carte
      </ClickMessage>
      <MapContainer
        className="cardmap"
        center={{ lat: 47.214975, lng: -1.557501 }}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker getPosition={getPosition} />
        {[...parks, ...parksupp]
          .filter(
            (element) =>
              element.fields.idobj === '1016' ||
              element.fields.idobj === '1019' ||
              element.fields.idobj === '1021' ||
              element.fields.idobj === '1020' ||
              element.fields.idobj === '2372'
          )
          .filter((item) =>
            showNantes
              ? true
              : position &&
                calcDistance(position, item.fields.location) <=
                  parseInt(rangeDistance)
          )
          .map((item) => (
            <Marker
              key={item.fields.nom_complet}
              position={item.fields.location}
              icon={Icon}
            >
              <Popup>{item.fields.nom_complet}</Popup>
            </Marker>
          ))}
      </MapContainer>
      <ParkNear>
        {position === null
          ? ''
          : [...parks, ...parksupp]
              .filter(
                (element) =>
                  element.fields.idobj === '1016' ||
                  element.fields.idobj === '1019' ||
                  element.fields.idobj === '1021' ||
                  element.fields.idobj === '1020' ||
                  element.fields.idobj === '2372'
              )
              .map((item) => (
                <ParkList
                  namePark={item.fields.nom_complet}
                  showNantes={showNantes}
                  key={item.fields.nom_complet}
                  rangeDistance={rangeDistance}
                  distance={calcDistance(position, item.fields.location)}
                />
              ))}
      </ParkNear>
    </Card>
  );
}

Map.propTypes = {
  showNantes: PropTypes.bool.isRequired,
};

LocationMarker.propTypes = {
  getPosition: PropTypes.func.isRequired,
};

export default Map;
