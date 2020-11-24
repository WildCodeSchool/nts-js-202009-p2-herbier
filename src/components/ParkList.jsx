import React from 'react';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => distance};

  div {
    display: ${({ showPark }) => (showPark ? 'block' : 'none')};
  }
`;

function ParkList(props) {
  const { distance, namePark, rangeDistance, showNantes } = props;
  const showPark = distance <= parseInt(rangeDistance);

  return (
    <List distance={distance} showPark={ showNantes ? true : showPark }>
      <div>
        <img src={MapPicker} alt="map marker" />
        {`${distance} km`}
        {namePark}
      </div>
    </List>
  );
}

export default ParkList;
