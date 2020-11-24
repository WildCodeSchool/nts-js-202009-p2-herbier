import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const AroundMe = styled.div`
  margin: 0 15px;
`;

const Filter = styled.div`
  background-color: #9cd69b;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  span {
    font-size: 10px;
  }
`;

const Range = styled.div`
  display: flex;
  color: #ffffff;

  span {
    font-size: 18px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    cursor: pointer;
    margin: auto;
  }

  input[type='range']::-webkit-slider-thumb {
    color: red;
  }
`;

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
      <AroundMe>
        <Filter>
          <Title>
            Distance <span>(Km)</span>
          </Title>
          <Range>
            <span>0</span>
            <input
              type="range"
              min="1"
              max="20"
              value={rangeDistance}
              onChange={this.handleChange}
              step="1"
              list="tickmarks"
            />
            <span>{rangeDistance}</span>
          </Range>
        </Filter>
        <Map rangeDistance={rangeDistance} />
      </AroundMe>
    );
  }
}

export default AroundMePage;
