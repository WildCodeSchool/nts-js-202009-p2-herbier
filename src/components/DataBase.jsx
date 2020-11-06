import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  filter: grayscale(${({ scanned }) => (!scanned ? '100%' : '0%')});
`;

const DataBas = styled.div`
  display: ${({ scanned, genre, espece, parc, famille, choicePlus, all }) =>
  

  (!all && scanned && (genre === choicePlus || parc === choicePlus || espece === choicePlus || famille === choicePlus))
    ? "block"
    :(!all && genre === choicePlus || parc === choicePlus || espece === choicePlus || famille === choicePlus))
    ?"block"
    :(all && (genre !== choicePlus && parc !== choicePlus && espece !== choicePlus && famille !== choicePlus))
    ?"block"
    :(scanned && (genre !== choicePlus && parc !== choicePlus && espece !== choicePlus && famille !== choicePlus))
    ?"block"
    :"none"
};
  margin: 1px;
  width: 100px;
  height: 100px;
`;

class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DataBas
        famille={this.props.famille}
        espece={this.props.espece}
        genre={this.props.genre}
        parc={this.props.parc}
        filter={this.props.filter}
        choicePlus={this.props.choicePlus}
        scanned={this.props.scanned}
        all={this.props.all}
      >
        <Thumbnail
          scanned={this.props.scanned}
          id={this.props.id}
          src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`}
        />
<<<<<<< HEAD
=======

}

  render() {
    return (
      <DataBas>
        <Thumbnail src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`} />
>>>>>>> 332ca11ed36cd069d9fcbd8de16d92a3795ef506
      </DataBas>
    );
  }
}

export default DataBase;
