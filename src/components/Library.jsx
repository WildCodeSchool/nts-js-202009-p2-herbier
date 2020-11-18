import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import DataBase from './DataBase';
import DescriptionPanel from './DescriptionPanel';

const Lybrary = styled.div`
  display:flex;
  flex-direction:column;
`;

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ButtonAllSome = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 140px;
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
  transform: translate(${({ all }) => (all ? '-110px' : '0px')});
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
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  margin: 0.5rem 0 0 0;
`;

const UlListe = styled.div`
  width: 100%;
  display: ${({ filterChoice, filter }) =>
    filter &&
      (filterChoice === 'famille' ||
        filterChoice === 'espece' ||
        filterChoice === 'genre' ||
        filterChoice === 'nom_du_site')
      ? 'flex'
      : 'none'};
  flex-wrap:wrap;
  height:${({showmore})=>showmore?'400px':'0'};
  overflow:scroll;
`;

const ButtonParameter = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  color: ${({ valueColor }) => (valueColor ? 'black' : 'white')};
  background-color: rgba(
    ${({ valueColor }) => (valueColor ? '105, 197, 178,0.6' : '105, 197, 178')}
  );
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ParameterFiltre = styled.div`
  display:flex;
  justify-content: left;
  width: 100%;
  align-items: center;
  height: 40px;
  margin-top: 20px;
`;

const ListeFiltre = styled.div`
  color: black;
  background-color: rgba(105, 197, 178,0.6);
  height: fit-content;
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  flex-direction: column;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius:5px;
`;

const Li = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 8px 2px 8px 2rem;
  width: 190px;
`;

const WindowFilter = styled.div`
  transition: all 0.6s ease-in-out;
  transform: translateX(${({ filter }) => (filter ? '0' : '-1000px')});
  align-self: center;
  width: 90%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  justify-content:center;
  height: fit-content;
  margin: 0 1.5rem 0 1.5rem 0;
  font-size: 18px;
  p {
    text-align: center;
  }
`;

const DivVisuel = styled.div`
  align-self:center;
  display:flex;
  flex-direction:column;
  align-items:left;
  width:90%;
`;

const Showmore = styled.button`
  display: ${({ filterChoice, filter }) =>
    filter &&
      (filterChoice === 'famille' ||
        filterChoice === 'espece' ||
        filterChoice === 'genre' ||
        filterChoice === 'nom_du_site')
      ? 'flex'
      : 'none'};
  justify-content:center;
  align-items:center;
  outline: none;
  cursor: pointer;
  height: 40px;
  color: white;
  background-color:rgba(105, 197, 178,0);
  font-size: 30px;
  border: 0;
`;

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: true,
      all: false,
      filter: false,
      choice: null,
      choicePlus: null,
      list: [],
      search: '',
      description: ['', '', '', ''],
      showPanel: false,
      divCollectionHeight: 1,
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
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

  handleChangeSearch(e) {
    this.setState({ search: e.target.value });
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
      <Lybrary>
        <SearchBar
          search={this.state.search}
          handleChangeSearch={this.handleChangeSearch}
        />
        <DescriptionPanel
          handleVegetalClick={this.handleVegetalClick}
          hidePanel={this.hidePanel}
          description={this.state.description}
          showPanel={this.state.showPanel}
        />
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
              showmore={this.state.showmore}
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
            <Showmore 
            filter={this.state.filter}
            filterChoice={this.state.choice}
            onClick={()=>{
              this.setState({showmore:!this.state.showmore})
            }} ><i className={this.state.showmore?'fa fa-chevron-up':'fa fa-chevron-down'}></i></Showmore>
          </ListeFiltre>
        </WindowFilter>
        <DivVisuel>
          <Title>Votre collection : {this.props.scannedLybrary.length - 1} /
        {([...new Set(this.props.vegetals.map(element => {
            const unique = [element.fields.famille, element.fields.genre, element.fields.espece]
            return unique.join('')
          }))]).length}</Title>
          <Collection ref={el => {
            if (!el) return;
            setTimeout(() => {
              // usually prints a value that is larger than the second console.log
              this.setState({ divCollectionHeight: el.getBoundingClientRect().height });
            }, 200);
          }}
          >
            {this.props.vegetals
              .filter((element) => element.fields.photo1)
              .map((item) => (
                <DataBase
                  search={this.state.search}
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
          <Message>
            {this.state.choicePlus === null ? null : this.state.divCollectionHeight > 10 ? null : <p>Vous n'avez pas scanné de plantes dans la catégorie: {this.state.choicePlus}</p>}
          </Message>
        </DivVisuel>
      </Lybrary>
    );
  }
}

export default Library;
