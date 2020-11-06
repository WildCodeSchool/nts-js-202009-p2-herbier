import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './Map';
import MapFilter from './MapFilter';
import ParkList from './ParkList';


class AroundMePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MapFilter />
        <Map />
        <ParkList />
      </div>
    );
  }
}

export default AroundMePage;
