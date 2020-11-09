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

class MapFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      boxchecked: false,
      click: false,
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
    this.setState({ click: !this.state.click });
    console.log(this.state.click);
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
          <button type="button" onClick={this.handleButtonChange}>Plante 1</button>
          <button type="button" onClick={this.handleButtonChange}>Plante 2</button>
          <button type="button" onClick={this.handleButtonChange}>Plante 3</button>
          <img
            className={this.state.click ? 'show' : 'hidden'}
            src="https://via.placeholder.com/75/0000FF/808080"
            alt="plant1"
          />
        </DailyPLant>
      </Filter>
    );
  }
}

export default MapFilter;
