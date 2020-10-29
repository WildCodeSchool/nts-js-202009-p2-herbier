import React from 'react';
import styled from 'styled-components';

const DescriptName = styled.p`
  color: #69c5b2;
  font-weight: bold;
`;

const Illustration = styled.img`
  border: solid 1px;
  height: 150px;
  width: 95%;
  border-radius: 5px;
  margin-top:2rem;
`;

const PlantCard = styled.div`
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

// eslint-disable-next-line react/prefer-stateless-function
class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Img, Gender, Family, Species } = this.props;
    return (
      <PlantCard>
        <DescriptName>Famille:{Family}</DescriptName>
        <DescriptName>Genre: {Gender}</DescriptName>
        <DescriptName>Espèces: {Species}</DescriptName>
        <Illustration src={Img} alt={Species} />
      </PlantCard>
    );
  }
}

export default Description;
