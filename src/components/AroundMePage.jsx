import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const Filter = styled.div`
  background-color: #9cd69b;
`;

const Range = styled.div``;

const Button = styled.div`
  outline: none;
  cursor: pointer;
  background-color: #9cd69b;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 10px 15px;
  box-shadow: rgb(0, 0, 0, 0.3) 0px 3px 3px 1px;
  font-size: inherit;
  width: fit-content;
`;

class AroundMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeDistance: 0,
      showNantes: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ rangeDistance: event.target.value });
  }

  render() {
    const { rangeDistance, showNantes } = this.state;
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
          <Button onClick={() => this.setState({ showNantes: !showNantes })}>
            {' '}
            {showNantes
              ? 'Seulement les parcs proches'
              : 'Afficher tout les parcs'}
          </Button>
        </Filter>
        <Map showNantes={showNantes} rangeDistance={rangeDistance} />
      </div>
    );
  }
}

export default AroundMePage;
