import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => distance};

    img {
      margin-right: 10px;
    }
  }
`;

const ParkElement = styled.div`
  display: ${({ showPark }) => (showPark ? 'flex' : 'none')};
  margin-bottom: 20px;

  .namePark{
    font-weight: bold;
  }
`;

function ParkList(props) {
  const { distance, namePark, rangeDistance, showNantes } = props;
  const showPark = distance <= parseInt(rangeDistance);

  return (
    <List distance={distance}>
      <ParkElement distance={distance} showPark={!showNantes ? showPark : true}>
        <img src={MapPicker} alt="map marker" />
        <div className="namePark">{namePark}</div>
        <div className="distancePark">{`${distance} km`}</div>
      </ParkElement>
    </List>
  );
}

export default ParkList;
