import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import DataBase from './DataBase';
import DescriptionPanel from './DescriptionPanel';

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.2em;
`;

const ButtonAllSome = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 160px;
  padding: 3px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: rgba(
    ${({ all }) => (all ? '156, 214, 155' : '226, 122, 112')}
  );
  border-radius: 30px;
  box-shadow: rgb(0, 0, 0, 0.5) inset 0px 0px 10px 1px;
`;

const WhiteCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  transform: translate(${({ all }) => (all ? '-130px' : '0px')});
  box-shadow: rgb(0, 0, 0, 0.5) 0px 0px 4px 2px;
  transition: all 0.3s ease-in-out;
`;

const TextInButton = styled.p`
  padding-left: ${({ all }) => (all ? '40px' : '10px')};
`;

const FilterAdvenced = styled.button`
  outline: none;
  cursor: pointer;
  background-color: white;
  color: rgba(226, 122, 112);
  border: 3px solid rgba(226, 122, 112);
  border-radius: 30px;
  padding: 8px 15px;
  box-shadow: rgb(0, 0, 0, 0.3) 0px 3px 3px 1px;
  font-size: inherit;
`;

const ContainerFiltre = styled.div`
  margin-top: 15px;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  margin-left: 1.3em;
`;

const UlListe = styled.div`
  padding-top: ${({ filterChoice }) => (filterChoice ? '1.5rem' : '0')};
  width: 90%;
  display: ${({ filterChoice, filter }) =>
    filter &&
    (filterChoice === 'famille' ||
      filterChoice === 'espece' ||
      filterChoice === 'genre' ||
      filterChoice === 'nom_du_site')
      ? 'block'
      : 'none'};
`;

const ButtonParameter = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  color: ${({ valueColor }) => (valueColor ? 'white' : 'black')};
  background-color: rgba(
    ${({ valueColor }) => (valueColor ? '79, 127, 99' : '156, 214, 155')}
  );
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ParameterFiltre = styled.div`
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  justify-content: space-between;
  width: 90%;
  margin: 0 1.5rem 0 0;
  align-items: center;
  height: 7vh;
  margin-top: 20px;
`;

const ListeFiltre = styled.div`
  color: white;
  background-color: rgba(79, 127, 99);
  height: fit-content;
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  flex-direction: column;
  width: 90%;
`;

const Li = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 8px 2px 8px 2rem;
  width: 90%;
  margin: 0 1.5rem 0 0;
`;

const WindowFilter = styled.div`
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  width: 90%;
  margin: 1.5rem;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      filter: false,
      choice: null,
      choicePlus: null,
      list: [],
      description: ['', '', '', ''],
      showPanel: false,
    };
    this.handleVegetalClick = this.handleVegetalClick.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
  }

  componentDidUpdate(pervP, prevS) {
    if (prevS.choice !== this.state.choice) {
      this.setState({
        list: this.props.tri.filter(
          (element) => element.name === this.state.choice
        ),
      });
    }
  }

  handleVegetalClick(id, espece, genre, famille, image) {
    this.setState({
      description: [image, famille, genre, espece],
      showPanel: true,
    });
  }

  hidePanel() {
    this.setState({
      showPanel: false,
    });
  }

  render() {
    return (
      <div className="Library">
        <DescriptionPanel
          handleVegetalClick={this.handleVegetalClick}
          hidePanel={this.hidePanel}
          description={this.state.description}
          showPanel={this.state.showPanel}
        />
        <SearchBar />
        <ContainerFiltre>
          <ButtonAllSome
            all={this.state.all}
            onClick={() => {
              this.setState({ all: !this.state.all });
            }}
          >
            <TextInButton all={this.state.all}>
              {this.state.all ? 'Toutes' : 'Ma collection'}
            </TextInButton>
            <WhiteCircle all={this.state.all} />
          </ButtonAllSome>
          <FilterAdvenced
            type="button"
            className="optionAvancees"
            onClick={() => {
              this.setState({ filter: !this.state.filter });
            }}
          >
            Avancées
          </FilterAdvenced>
        </ContainerFiltre>
        <WindowFilter filter={this.state.filter}>
          <ParameterFiltre filter={this.state.filter}>
            <ButtonParameter
              filterChoice={this.state.choice}
              valueColor={this.state.choice === 'nom_du_site' ? true : false}
              onClick={(event) =>
                this.setState({
                  choice: 'nom_du_site',
                })
              }
            >
              Parc
            </ButtonParameter>
            <ButtonParameter
              filterChoice={this.state.choice}
              valueColor={this.state.choice === 'famille' ? true : false}
              onClick={(event) =>
                this.setState({
                  choice: 'famille',
                })
              }
            >
              Famille
            </ButtonParameter>
            <ButtonParameter
              filterChoice={this.state.choice}
              valueColor={this.state.choice === 'genre' ? true : false}
              onClick={(event) =>
                this.setState({
                  choice: 'genre',
                })
              }
            >
              Genre
            </ButtonParameter>
            <ButtonParameter
              filterChoice={this.state.choice}
              valueColor={this.state.choice === 'espece' ? true : false}
              onClick={(event) =>
                this.setState({
                  choice: 'espece',
                })
              }
            >
              Espece
            </ButtonParameter>
          </ParameterFiltre>
          <ListeFiltre filter={this.state.filter}>
            <UlListe
              filter={this.state.filter}
              filterChoice={this.state.choice}
            >
              {this.state.list[0] &&
                this.state.list[0].facets.map((item) => {
                  return (
                    <Li
                      onClick={() => this.setState({ choicePlus: item.name })}
                    >
                      {item.name}({item.count})
                    </Li>
                  );
                })}
            </UlListe>
          </ListeFiltre>
        </WindowFilter>
        <Title>Votre collection : 0 / 15</Title>
        <Collection className="collection">
          {this.props.vegetals
            .filter((element) => element.fields.photo1)
            .map((item) => (
              <DataBase
                handleVegetalClick={this.handleVegetalClick}
                filter={this.state.filter}
                choicePlus={this.state.choicePlus}
                all={this.state.all}
                scanned={this.props.scannedLybrary.includes(item.recordid)}
                key={item.recordid}
                id={item.recordid}
                famille={item.fields.famille}
                espece={item.fields.espece}
                genre={item.fields.genre}
                parc={item.fields.nom_du_site}
                image={item.fields.photo1 && item.fields.photo1.id}
              />
            ))}
        </Collection>
      </div>
    );
  }
}

export default Library;
