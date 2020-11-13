import React from 'react';
import Axios from 'axios';
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
import MapPickerBlue from './logos/map-picker-blue.svg';
import { element } from 'prop-types';

const Card = styled.div`
  .cardmap {
    height: 50vh;
  }
`;

const Icon = L.icon({
  iconUrl: MapPicker,
  iconSize: [30, 30],
});

const myIcon = L.icon({
  iconUrl: MapPickerBlue,
  iconSize: [30, 30],
});

function LocationMarker() {
  const [position, setPosition] = React.useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>Votre position</Popup>
    </Marker>
  );
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      parksupp: [
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
      ],
    };
    this.getPark = this.getPark.bind(this);
  }

  componentDidMount() {
    this.getPark();
  }

  getPark() {
    Axios.get(
      'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&rows=92'
    ).then((res) => {
      this.setState({
        parks: [...res.data.records, ...this.state.parksupp],
      });
    });
  }

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
          {this.state.parks
            .filter(
              (element) =>
                element.fields.idobj === '1016' ||
                element.fields.idobj === '1019' ||
                element.fields.idobj === '1021' ||
                element.fields.idobj === '1020' ||
                element.fields.idobj === '2372'
            )
            .map((item) => (
              <Marker position={item.fields.location} icon={Icon}>
                <Popup>{item.fields.nom_complet}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </Card>
    );
  }
}

export default Map;
