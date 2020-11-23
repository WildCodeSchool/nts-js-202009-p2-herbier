import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import DataBase from './DataBase';
import DescriptionPanel from './DescriptionPanel';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const LibraryWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin: 3rem;
  }
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

  @media ${device.tablet} {
    width: 90%;
  }
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
  flex-wrap: wrap;
  height: ${({ showmore }) => (showmore ? '400px' : '0')};
  overflow: scroll;

  @media ${device.tablet} {
    width: 100%;
    display: ${({ filterChoice }) =>
      filterChoice === 'famille' ||
      filterChoice === 'espece' ||
      filterChoice === 'genre' ||
      filterChoice === 'nom_du_site'
        ? 'flex'
        : 'none'};
    flex-wrap: wrap;
    height: 35vh;
    overflow: scroll;
  }
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
  display: flex;
  justify-content: left;
  width: 100%;
  align-items: center;
  height: 40px;
  margin-top: 20px;
`;

const ListeFiltre = styled.div`
  color: black;
  background-color: rgba(105, 197, 178, 0.6);
  height: fit-content;
  display: ${({ filter }) => (filter ? 'flex' : 'none')};
  flex-direction: column;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;

  @media ${device.tablet} {
    display: flex;
  }
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

  @media ${device.tablet} {
    width: 25vw;
    transform: translateX(0);
    top: 3rem;
  }
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  margin: 0 1.5rem 0 1.5rem 0;
  font-size: 18px;
  p {
    text-align: center;
  }
`;

const DivVisuel = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 90%;

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    margin-left: 28vw;
    order: 3;
  }
`;

const DivVisuel3 = styled.div`
  @media ${device.tablet} {
    width: 60vw;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-right: 1.5rem;

    input {
      margin: 1rem 0 1rem 0;
      width: 90%;
    }
  }
`;

const DivVisuel4 = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    order: 1;
    width: 25vw;
    height: 80vh;
    left: 1rem;
  }
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
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  height: 40px;
  color: white;
  background-color: rgba(105, 197, 178, 0);
  font-size: 30px;
  border: 0;

  @media ${device.tablet} {
    display: none;
  }
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
      pageWidth: 1,
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleVegetalClick = this.handleVegetalClick.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
  }

  componentDidUpdate(pervP, prevS) {
    const { choice } = this.state;
    const { tri } = this.props;
    if (prevS.choice !== choice) {
      this.setState({
        list: tri.filter((element) => element.name === choice),
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
    const {
      filter,
      search,
      all,
      choice,
      choicePlus,
      showmore,
      list,
      showPanel,
      description,
      pageWidth,
      divCollectionHeight,
    } = this.state;
    const { scannedLibrary, vegetals } = this.props;
    return (
      <LibraryWrap
        ref={(el) => {
          if (!el) return;
          setTimeout(() => {
            this.setState({ pageWidth: el.getBoundingClientRect().width });
            if (pageWidth > 780) {
              this.setState({
                filter: true,
              });
            }
          }, 200);
        }}
      >
        <DivVisuel3>
          <SearchBar
            search={search}
            handleChangeSearch={this.handleChangeSearch}
          />
          <ContainerFiltre>
            <ButtonAllSome
              all={all}
              onClick={() => {
                this.setState({ all: !all });
              }}
            >
              <TextInButton all={all}>
                {all ? 'Toutes' : 'Ma collection'}
              </TextInButton>
              <WhiteCircle all={all} />
            </ButtonAllSome>
            <FilterAdvenced
              type="button"
              className="optionAvancees"
              onClick={() => {
                if (pageWidth < 780) {
                  this.setState({ filter: !filter });
                } else {
                  this.setState({
                    choice: null,
                    choicePlus: null,
                  });
                }
              }}
            >
              {pageWidth >= 780 ? 'Reset filtres' : 'Avancées'}
            </FilterAdvenced>
          </ContainerFiltre>
        </DivVisuel3>
        <DivVisuel4>
          <WindowFilter showmore={showmore} filter={filter}>
            <ParameterFiltre filter={filter}>
              <ButtonParameter
                filterChoice={choice}
                valueColor={choice === 'nom_du_site' ? true : false}
                onClick={(event) =>
                  this.setState({
                    choice: 'nom_du_site',
                  })
                }
              >
                Parc
              </ButtonParameter>
              <ButtonParameter
                filterChoice={choice}
                valueColor={choice === 'famille' ? true : false}
                onClick={(event) =>
                  this.setState({
                    choice: 'famille',
                  })
                }
              >
                Famille
              </ButtonParameter>
              <ButtonParameter
                filterChoice={choice}
                valueColor={choice === 'genre' ? true : false}
                onClick={(event) =>
                  this.setState({
                    choice: 'genre',
                  })
                }
              >
                Genre
              </ButtonParameter>
              <ButtonParameter
                filterChoice={choice}
                valueColor={choice === 'espece' ? true : false}
                onClick={(event) =>
                  this.setState({
                    choice: 'espece',
                  })
                }
              >
                Espece
              </ButtonParameter>
            </ParameterFiltre>
            <ListeFiltre filter={filter}>
              <UlListe
                showmore={showmore}
                filter={filter}
                filterChoice={choice}
              >
                {list[0] &&
                  list[0].facets.map((item) => {
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
                filter={filter}
                filterChoice={choice}
                onClick={() => {
                  this.setState({ showmore: !showmore });
                }}
              >
                <i
                  className={
                    showmore ? 'fa fa-chevron-up' : 'fa fa-chevron-down'
                  }
                />
              </Showmore>
            </ListeFiltre>
          </WindowFilter>
          <DescriptionPanel
            handleVegetalClick={this.handleVegetalClick}
            hidePanel={this.hidePanel}
            description={description}
            showPanel={showPanel}
          />
        </DivVisuel4>
        <DivVisuel showmore={showmore}>
          <Title>
            Votre collection :{' '}
            {JSON.parse(localStorage.getItem('myCollection')).length - 1} /
            {
              [
                ...new Set(
                  vegetals.map((element) => {
                    const unique = [
                      element.fields.famille,
                      element.fields.genre,
                      element.fields.espece,
                    ];
                    return unique.join('');
                  })
                ),
              ].length
            }
          </Title>
          <Collection
            ref={(el) => {
              if (!el) return;
              setTimeout(() => {
                this.setState({
                  divCollectionHeight: el.getBoundingClientRect().height,
                });
              }, 200);
            }}
          >
            {vegetals
              .filter((element) => element.fields.photo1)
              .map((item) => (
                <DataBase
                  search={search}
                  handleVegetalClick={this.handleVegetalClick}
                  filter={filter}
                  choicePlus={choicePlus}
                  all={all}
                  scanned={JSON.parse(
                    localStorage.getItem('myCollection')
                  ).includes(item.recordid)}
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
            {choicePlus === null ? null : divCollectionHeight > 10 ? null : (
              <p>
                Vous n'avez pas scanné de plantes dans la catégorie:{' '}
                {choicePlus}
              </p>
            )}
          </Message>
        </DivVisuel>
      </LibraryWrap>
    );
  }
}

export default Library;
