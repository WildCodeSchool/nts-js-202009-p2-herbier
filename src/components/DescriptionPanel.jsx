import React, { Component } from 'react';
import styled from 'styled-components';
import cross from './logos/close-line-blank.png';

const Panel = styled.div`
  div.showDescriptionPanel {
    background-color: #8fae44;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 95%;
    border-radius: 0 5px 5px 0;
    position: fixed;
    top: 4rem;
    z-index: 95;
    padding: 0 0 2rem 0;
    transition: transform 1000ms;
    transform: translateX(0);
  }
  div {
    background-color: #8fae44;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 95%;
    border-radius: 0 5px 5px 0;
    position: fixed;
    top: 4rem;
    z-index: 95;
    padding: 0 0 2rem 0;
    transition: transform 1000ms;
    transform: translateX(-100%);
  }
  img:first-child {
    border-radius: 50%;
    width: 220px;
    height: 220px;
    object-fit: cover;
    margin: 2rem;
  }
  img:last-child {
    height: 40px;
    width: auto;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  p {
    color: #ffffff;
    font-size: 20px;
    margin: 0.5rem 0 0.5rem 0;
`;

class DescriptionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel className="DescriptionPanel">
        <div className={this.props.showPanel ? 'showDescriptionPanel' : ''}>
          <img
            src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.description[0]}/300/`}
            alt={this.props.description[3]}
          />
          <p>Famille : {this.props.description[1]}</p>
          <p>Genre : {this.props.description[2]}</p>
          <p>Espèce : {this.props.description[3]}</p>
          <img src={cross} onClick={this.props.hidePanel} />
        </div>
      </Panel>
    );
  }
}

export default DescriptionPanel;
