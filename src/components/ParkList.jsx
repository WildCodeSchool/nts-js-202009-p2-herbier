import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => distance};

  div {
    display: ${({ showPark }) => (showPark ? 'block' : 'none')};
    display: flex;
    margin-bottom: 20px;

    img {
      margin-right: 10px;
    }

  }
`;

function ParkList(props) {
  const { distance, namePark, rangeDistance } = props;
  const showPark = distance <= parseInt(rangeDistance);

  return (
    <List distance={distance} showPark={showPark}>
      <div>
        <img src={MapPicker} alt="map marker" />
        <div>{`${distance} km`}</div>
        <div>{namePark}</div>
      </div>
    </List>
  );
}

export default ParkList;
