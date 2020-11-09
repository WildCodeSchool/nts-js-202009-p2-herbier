import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  width: 382px;
  height: 214px;
  background-color: white;
`;

const Parks = [
  { name: 'Jardin des plantes', distance: '0,3 km', speciesNumber: '(150)' },
  { name: 'Parc des plantes', distance: '2 km', speciesNumber: '(8)' },
  { name: 'Parc de Procé', distance: '5 km', speciesNumber: '(300)' },
  { name: 'Parc Municipal', distance: '8 km', speciesNumber: '(56)' },
];

function ParkList({ park }) {
  return (
    <List>
      {Parks.map((park) => (
        <p>
          <img src={MapPicker}></img> {park.distance} {park.name}{' '}
          {park.speciesNumber}
        </p>
      ))}
    </List>
  );
}

export default ParkList;
