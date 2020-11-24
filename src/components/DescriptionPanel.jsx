import React, { Component } from 'react';
import styled from 'styled-components';
import cross from './logos/close-line-blank.png';
import plant from './pictures/imagedefault.png';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


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
    transform: translateX(-150%);
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
    font-size: 18px;
    margin: 2px 0 2px 0;
  }

  @media ${device.tablet} {
    margin:0;
    margin-top: 15px;
    padding:0;
    order:3;
    z-index:0;
    width:90%;
    max-width:330px;
    height:22vh;
    max-height:400px;
    div.showDescriptionPanel {
    background-color: white;
    border:1px solid #8fae44;
    width:25vw;
    max-width:330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    border-radius: 5px;
    position: sticky;
    z-index: 0;
    padding: 0;

  }
  div{
    background-color: white;
    border:1px solid #8fae44;
    width:25vw;
    max-width:330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    border-radius: 5px;
    position: sticky;
    z-index: 0;
    padding: 0;
    transform: translateX(0);
  } img:first-child {
    background-image: url(${({noClick})=>noClick?plant:''});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    border-radius:0;
    width: ${({noClick})=>(noClick?'80%':'100%')};
    width:100%;
    max-width:330px;
    height: 180px;
    object-fit: cover;
    margin:0;
    padding: 0;

  }
  img:last-child {
    display:none;
    height: 40px;
    width: 100%;
    position: sticky;
    margin:0;
    padding: 0;


  }
  p {
    color: black;
    font-size: 17px;
    margin: 3px 0 3px 0;
    padding:0;
  }}
`;

class DescriptionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Panel className="DescriptionPanel" noClick={this.props.noClick}>
        <div className={this.props.showPanel ? 'showDescriptionPanel' : ''}>
          <img
            src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.description[0]}/300/`}
            alt={this.props.description[3]}
          />
          <p>Famille : {this.props.description[1]}</p>
          <p>Genre : {this.props.description[2]}</p>
          <p>Espèce : {this.props.description[3]}</p>
          <img src={cross} alt='close' onClick={this.props.hidePanel} />
        </div>
      </Panel>
    );
  }
}

export default DescriptionPanel;
