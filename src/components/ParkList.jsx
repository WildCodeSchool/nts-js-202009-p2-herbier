import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MapPicker from './logos/map-picker.svg';

const List = styled.div`
  display: flex;
  flex-direction: column;
  order: ${({ distance }) => Math.floor(distance)};
  width: 100%;
  margin: auto;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const ParkElement = styled.div`
  display: ${({ showPark }) => (showPark ? 'flex' : 'none')};
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: baseline;

  .namePark {
    font-weight: bold;
    text-align: center;
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
        <div className="distancePark">{`${distance.toFixed(2)} km`}</div>
      </ParkElement>
    </List>
  );
}

ParkList.propTypes = {
  distance: PropTypes.number.isRequired,
  namePark: PropTypes.string.isRequired,
  showNantes: PropTypes.bool.isRequired,
};

export default ParkList;
