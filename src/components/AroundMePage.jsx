import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './Map';
import MapFilter from './MapFilter';


class AroundMePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MapFilter />
        <Map />
      </div>
    );
  }
}

export default AroundMePage;
