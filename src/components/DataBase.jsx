import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const DataBas = styled.div`
  display: ${({ scanned, all, choicePlus, filter, famille, espece, genre, parc }) =>
    scanned 
      ? "block" 
      : all 
        ? "block"
        : choicePlus === (parc || genre || espece || famille )
          ? "block" : "none"};
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
        parc={this.props.nom_du_site}
        filter={this.props.filter}
        choicePlus={this.props.choicePlus}
        scanned={this.props.scanned}
        all={this.props.all}
      >
        <Thumbnail
          id={this.props.id}
          src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`}
        />

}

  render() {
    return (
      <DataBas>
        <Thumbnail src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`} />
>>>>>>> 06b64d4fa2b659801780c04eb53347e8ab1d9650
      </DataBas>
    );
  }
}

export default DataBase;
