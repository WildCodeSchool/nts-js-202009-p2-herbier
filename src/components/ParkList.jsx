import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';
import { calcDistance } from '../utils';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => distance};

  div {
    display: ${({ showPark }) => (showPark ? 'block' : 'none')};
  }
`;

function ParkList(props) {
  const showPark =
    calcDistance(props.position, props.coord) <= parseInt(props.rangeDistance);

  return (
    <List
      distance={props.distance}
      showPark={showPark}
    >
      <div>
        <img src={MapPicker} alt="map marker" />
        {`${props.distance} km`}
        {props.namePark}
      </div>
    </List>
  );
}

export default ParkList;
