/* eslint-disable max-classes-per-file */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

// eslint-disable-next-line react/prefer-stateless-function
class Description extends React.Component {
  render() {
    const { famille, genre, espece, photo1Id, handleScan } = this.props;
    return (
      <PlantCard onScan={handleScan}>
        <DescriptName>
          Famille: <span>{famille}</span>
        </DescriptName>
        <DescriptName>
          Genre: <span>{genre}</span>
        </DescriptName>
        <DescriptName>
          Espèces: <span>{espece}</span>
        </DescriptName>
        <Illustration
          src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${photo1Id}/300/`}
          alt={espece}
        />
      </PlantCard>
    );
  }
}

class Card extends React.Component {
  render() {
    const { scan, famille, espece, genre, photo1Id, handleScan } = this.props;
    return (
      <CardCss scan={scan} handleShowScan={this.handleShowScan}>
        <Description
          espece={espece}
          famille={famille}
          genre={genre}
          photo1Id={photo1Id}
          onScan={handleScan}
        />
      </CardCss>
    );
  }
}

Description.propTypes = {
  famille: PropTypes.string.isRequired,
  espece: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  handleScan: PropTypes.func.isRequired,
  photo1Id: PropTypes.number.isRequired,
};

Card.propTypes = {
  famille: PropTypes.string.isRequired,
  espece: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  handleScan: PropTypes.func.isRequired,
  photo1Id: PropTypes.number.isRequired,
  scan: PropTypes.bool.isRequired,
};

export default Card;
