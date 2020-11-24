import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const Filter = styled.div`
  background-color: #9cd69b;
`;

const Range = styled.div``;

class AroundMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeDistance: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ rangeDistance: event.target.value });
  }

  render() {
    const { rangeDistance } = this.state;
    return (
      <div>
        <Filter>
          <Range>
            <h3>Distance (Km)</h3>
            <input
              type="range"
              min="1"
              max="20"
              value={rangeDistance}
              onChange={this.handleChange}
              step="1"
            />
            {rangeDistance}
          </Range>
        </Filter>
        <Map rangeDistance={rangeDistance} />
      </div>
    );
  }
}

export default AroundMePage;
