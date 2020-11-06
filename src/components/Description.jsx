import React from 'react';
import styled from 'styled-components';

const DescriptName = styled.p`
  color: #69c5b2;
  font-weight: bold;
  span {
    color: black;
    font-weight: normal;
  }
`;

const Illustration = styled.img`
  border: 1px;
  height: 230px;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  margin-top: 2rem;
  object-fit: cover;
`;

const PlantCard = styled.div`
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const CardCss = styled.div`
  display: ${({ scan }) => (scan ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
`;

const plants = [
  {
    Family: 'arbre',
    Gender: 'persistant',
    Species: 'bouleau',
    Img:
      'https://www.scenolia.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/3/7/3701237739066.main.jpg',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class Description extends React.Component {
  render() {
    const { Img, Gender, Family, Species } = this.props;
    return (
      <PlantCard>
        <DescriptName>
          Famille: <span>{Family}</span>
        </DescriptName>
        <DescriptName>
          Genre: <span>{Gender}</span>
        </DescriptName>
        <DescriptName>
          Espèces: <span>{Species}</span>
        </DescriptName>
        <Illustration src={Img} alt={Species} />
      </PlantCard>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <CardCss scan={this.props.scan} handleShowScan={this.handleShowScan}>
        {plants.map((plant) => (
          <Description {...plant} key={plant.Species} />
        ))}
      </CardCss>
    );
  }
}

export default Card;
