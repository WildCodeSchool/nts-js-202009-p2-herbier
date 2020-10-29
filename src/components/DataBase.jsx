import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const DataBas = styled.div`
  margin:1px;
  width: 100px;
  height: 100px;
`;

class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scanned: []};
}

  render() {
    return (
      <DataBas>
        <Thumbnail src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`} />
      </DataBas>
    );
  }
}

export default DataBase;
