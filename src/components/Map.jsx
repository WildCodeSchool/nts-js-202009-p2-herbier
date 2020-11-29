import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
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
  }
`;

const GeoInformMessage = styled.div`
  display: ${({ myPosition }) => (myPosition === undefined ? 'block' : 'none')};
  font-size: 1em;
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

function Map(props) {
  const { rangeDistance, showNantes, myPosition } = props;
  const [parks, setParks] = React.useState([]);
  const [parksupp, setParksupp] = React.useState([
    {
      fields: {
        location: [47.2752, -1.580253],
        nom_complet: 'Arboretum Parc',
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

  const myPositionNumber = myPosition && myPosition.map((e) => parseFloat(e));

  return (
    <Card myPosition={myPosition}>
      <GeoInformMessage myPosition={myPosition}>
        La geolocalisation n&apos;est pas activée
      </GeoInformMessage>
      <MapContainer
        className="cardmap"
        center={{ lat: 47.214975, lng: -1.557501 }}
        zoom={11}
      >
        {myPosition && (
          <Marker position={myPosition} icon={myIcon}>
            <Popup>Votre position</Popup>
          </Marker>
        )}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
              : myPosition &&
                calcDistance(myPositionNumber, item.fields.location) <=
                  parseInt(rangeDistance, 10)
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
        {myPosition === null
          ? null
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
                  myPosition={myPosition}
                  namePark={item.fields.nom_complet}
                  showNantes={showNantes}
                  key={item.fields.nom_complet}
                  rangeDistance={rangeDistance}
                  distance={calcDistance(
                    myPositionNumber,
                    item.fields.location
                  )}
                />
              ))}
      </ParkNear>
    </Card>
  );
}

Map.propTypes = {
  showNantes: PropTypes.bool.isRequired,
  rangeDistance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  myPosition: PropTypes.array.isRequired,
};

export default Map;
