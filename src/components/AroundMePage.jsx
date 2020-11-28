import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import SideBars from './SideBars';

const AroundMe = styled.div`
  margin: 0 15px;
  @media (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const H1 = styled.h1`
  background-color: #69c5b2;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  padding-top: 20px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 90vw;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-top: 0;
    width: 59vw;
    display: flex;
    flex-direction: column;
  }
`;

const Filter = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
  height: fit-content;

  .rangeBlock {
    display: block;
    transform: translateX(
      ${({ showNantes }) => (showNantes ? '-9999px' : '0')}
    );
    transition: all ease-in-out 0.5s;
    background-color: #9cd69b;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;

    @media (min-width: 768px) {
      max-width: 600px;
      margin: 10px auto;
    }
  }
`;

const TitleRange = styled.div`
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
  justify-content: space-around;

  span {
    font-size: 18px;
    margin: 0 10px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    cursor: pointer;
    margin: auto;
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 30px;
    background: #ffffff;
  }
`;

const Button = styled.div`
  padding: 10px 30px;
  background-color: #9cd69b;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border-radius: 5px;
  font-size: 24px;
  margin-top: 25px;
  outline: none;
  width: fit-content;
  margin: auto;
  cursor: pointer;
  width: fit-content;
`;

class AroundMePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeDistance: 20,
      showNantes: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ rangeDistance: event.target.value });
  }

  render() {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem('latitude', position.coords.latitude);
      localStorage.setItem('longitude', position.coords.longitude);
    });
    const { rangeDistance, showNantes } = this.state;
    const myPosition = [
      localStorage.getItem('latitude'),
      localStorage.getItem('longitude'),
    ];

    return (
      <AroundMe>
        <H1>Autour de Moi</H1>
        <Filter showNantes={showNantes}>
          <Button onClick={() => this.setState({ showNantes: !showNantes })}>
            {' '}
            {showNantes ? 'Les parcs proches' : 'Tous les parcs'}
          </Button>
          <div className="rangeBlock">
            <TitleRange>
              Distance <span>(Km)</span>
            </TitleRange>
            <Range>
              <span>0</span>
              <input
                type="range"
                min="1"
                max="20"
                value={rangeDistance}
                onChange={this.handleChange}
                step="1"
              />
              <span>{rangeDistance}</span>
            </Range>
          </div>
        </Filter>
        <Map
          showNantes={showNantes}
          rangeDistance={rangeDistance}
          myPosition={myPosition}
        />
        <SideBars />
      </AroundMe>
    );
  }
}

export default AroundMePage;
