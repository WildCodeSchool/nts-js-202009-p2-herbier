import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => distance};
`;

function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

function calcDistance(coord1, coord2) {
  if (!coord1 || !coord2 || coord1.length !== 2 || coord2.length !== 2) {
    return null;
  }
  const lng1 = toRadian(coord1[1]);
  const lat1 = toRadian(coord1[0]);
  const lng2 = toRadian(coord2[1]);
  const lat2 = toRadian(coord2[0]);

  const deltaLat = lat2 - lat1;
  const deltaLng = lng2 - lng1;

  const a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLng / 2), 2);

  const c = 2 * Math.asin(Math.sqrt(a));
  const EARTH_RADIUS = 6371;

  return (c * EARTH_RADIUS).toFixed(2);
}

function ParkList(props) {
  const position =
    props.position === null ? null : [props.position.lat, props.position.lng];

  return (
    <List distance={parseInt(calcDistance(position, props.coord))}>
      <div>
        <img src={MapPicker} alt="map marker" /> {props.name}{' '}
        {calcDistance(position, props.coord) + ' km'}
      </div>
    </List>
  );
}

export default ParkList;
