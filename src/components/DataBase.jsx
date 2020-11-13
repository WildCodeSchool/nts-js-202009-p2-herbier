import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  filter: grayscale(${({ scanned }) => (!scanned ? '100%' : '0%')});
`;

const DataBas = styled.div`
  display: ${({
    scanned,
    genre,
    espece,
    parc,
    famille,
    choicePlus,
    all,
    filter,
    search,
  }) => {
    if (!filter && !all && scanned) {
      if (search) {
        if (
          (genre && genre.toLowerCase().includes(search.toLowerCase())) ||
          (famille && famille.toLowerCase().includes(search.toLowerCase())) ||
          (espece && espece.toLowerCase().includes(search.toLowerCase()))
        ) {
          return 'block';
        } else {
          return 'none';
        }
      } else {
        return 'block';
      }
    } else if (!filter && all) {
      if (search) {
        if (
          (genre && genre.toLowerCase().includes(search.toLowerCase())) ||
          (famille && famille.toLowerCase().includes(search.toLowerCase())) ||
          (espece && espece.toLowerCase().includes(search.toLowerCase()))
        ) {
          return 'block';
        } else {
          return 'none';
        }
      } else {
        return 'block';
      }
    } else if (all) {
      if (
        choicePlus === genre ||
        choicePlus === famille ||
        choicePlus === parc ||
        choicePlus === espece
      ) {
        if (search) {
          if (
            (genre && genre.toLowerCase().includes(search.toLowerCase())) ||
            (famille && famille.toLowerCase().includes(search.toLowerCase())) ||
            (espece && espece.toLowerCase().includes(search.toLowerCase()))
          ) {
            return 'block';
          } else {
            return 'none';
          }
        } else {
          return 'block';
        }
      } else {
        return 'none';
      }
    } else if (!all) {
      if (
        choicePlus === genre ||
        choicePlus === famille ||
        choicePlus === parc ||
        choicePlus === espece
      ) {
        if (scanned) {
          if (search) {
            if (
              (genre && genre.toLowerCase().includes(search.toLowerCase())) ||
              (famille &&
                famille.toLowerCase().includes(search.toLowerCase())) ||
              (espece && espece.toLowerCase().includes(search.toLowerCase()))
            ) {
              return 'block';
            } else {
              return 'none';
            }
          } else {
            return 'block';
          }
        } else {
          return 'none';
        }
      } else if (
        scanned &&
        choicePlus !== genre &&
        choicePlus !== famille &&
        choicePlus !== parc &&
        choicePlus !== espece
      ) {
        return 'none';
      } else {
        return 'none';
      }
    }
  }};
  margin: 1px;
  width: 100px;
  height: 100px;
`;

class DataBase extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleVegetalClick(this.props.id, this.props.espece, this.props.genre, this.props.famille, this.props.image);
  }

  render() {
    return (
      <DataBas
        search={this.props.search}
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
          onClick={this.handleClick}
          famille={this.props.famille}
          espece={this.props.espece}
          genre={this.props.genre}
          scanned={this.props.scanned}
          id={this.props.id}
          src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`}
          alt="load"
        />
      </DataBas>
    );
  }
}

export default DataBase;
