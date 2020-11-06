import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  width: 382px;
  height: 214px;
  background-color: #9CD69B;
`;

const Range = styled.div``;

const Checkbox = styled.div``;

class MapFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      boxchecked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    this.setState({boxchecked: !this.state.boxchecked});
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
          <input type="checkbox" onChange={this.handleInputChange} value={this.state.boxchecked}/>
        </Checkbox>
      </Filter>
    );
  }
}


export default MapFilter;
