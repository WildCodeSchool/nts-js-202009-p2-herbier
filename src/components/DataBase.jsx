import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: ${({ tailleImageX }) => tailleImageX}px;
  height: ${({ tailleImageY }) => tailleImageY}px;
  object-fit: cover;
  filter: grayscale(${({ scanned }) => (!scanned ? '100%' : '0%')});
`;

const DataBasediv = styled.div`
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
    } else if (filter && choicePlus === null) {
      if (all) {
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
        }
      } else if (!all) {
        if (scanned) {
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
          }
        } else { return 'none' }
      } else {
        return 'none'
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
  width: ${({ tailleImageX }) => tailleImageX}px;
  height: ${({ tailleImageY }) => tailleImageY}px;
  order:${({ scanned }) => scanned ? "0" : "1"};
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
    const {
      search,
      famille,
      espece,
      genre,
      parc,
      filter,
      choicePlus,
      scanned,
      all,
      tailleImage,
      id,
    } = this.props;
    return (
      <DataBasediv
        search={search}
        famille={famille}
        espece={espece}
        genre={genre}
        parc={parc}
        filter={filter}
        choicePlus={choicePlus}
        scanned={scanned}
        all={all}
      >
        <Thumbnail
        tailleImageX={tailleImage.X}
        tailleImageY={tailleImage.Y}
          onClick={this.handleClick}
          famille={famille}
          espece={espece}
          genre={genre}
          scanned={scanned}
          id={id}
          loading="lazy"
          src={`https://data.nantesmetropole.fr/explore/dataset/244400404_collection-vegetale-nantes/files/${this.props.image}/300/`}
          alt="load"
        />
      </DataBasediv>
    );
  }
}

export default DataBase;
