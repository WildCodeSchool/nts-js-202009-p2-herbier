import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  background-color: #9cd69b;
`;

const Range = styled.div``;

const Checkbox = styled.div``;

const DailyPLant = styled.div`
  .hidden {
    display: none;
  }

  .show {
    display: flex;
  }
`;

const DailyPLants = [
  {
    src: 'https://via.placeholder.com/75/0000FF/808080',
    name: 'Margueritte',
    id: 100,
  },
  {
    src: 'https://via.placeholder.com/75/FF0000/FFFFFF',
    name: 'Rose',
    id: 101,
  },
  {
    src: 'https://via.placeholder.com/75/FFFF00/000000',
    name: 'Tulipe',
    id: 102,
  },
];

class MapFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      boxchecked: false,
      click: false,
      plant: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ boxchecked: !this.state.boxchecked });
  }

  handleButtonChange(event) {
    this.state.plant = DailyPLants.find((dailyPlant) => {
        return dailyPlant.id === parseInt(event?.target?.id);
    });

    this.setState({ click: !this.state.click });
  }

  render() {
    return (
      <Filter>
        <Range>
          <h3>Distance (Km)</h3>
          <input
            type="range"
            min="1"
            max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
          />
          {this.state.value}
        </Range>
        <Checkbox>
          <h3>Plantes manquantes</h3>
          <input
            type="checkbox"
            onChange={this.handleInputChange}
            value={this.state.boxchecked}
          />
        </Checkbox>
        <DailyPLant>
          <h3>Plantes du moment</h3>
          <button id="100" type="button" onClick={this.handleButtonChange}>
            Plante 1
          </button>
          <button id="101" type="button" onClick={this.handleButtonChange}>
            Plante 2
          </button>
          <button id="102" type="button" onClick={this.handleButtonChange}>
            Plante 3
          </button>
          <img
            className={this.state.click ? 'show' : 'hidden'}
            src={this.state.plant?.src || ""}
            alt={this.state.plant?.name || ""}
          />
        </DailyPLant>
      </Filter>
    );
  }
}

export default MapFilter;
