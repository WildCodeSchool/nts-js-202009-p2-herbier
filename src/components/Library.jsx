import React, {useState} from 'react';
import styled from 'styled-components';
import DataBase from './DataBase';

const arbre = [
  {
    name: 'aesculus',
    image:
      'https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: true,
  },
  {
    name: 'petraea',
    image:
      'https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: false,
  },
  {
    name: 'robur',
    image:
      'https://images.pexels.com/photos/286305/pexels-photo-286305.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: false,
  },
  {
    name: 'ilex',
    image:
      'https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: true,
  },
  {
    name: 'araucaria',
    image:
      'https://images.pexels.com/photos/1083386/pexels-photo-1083386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: false,
  },
  {
    name: 'pseudotsuga',
    image:
      'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: true,
  },
  {
    name: 'alumette',
    image:
      'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    have: true,
  },
];

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
  background-color: rgba(${({all}) => all? '156, 214, 155': '226, 122, 112'});
  border-radius: 30px;
  box-shadow: rgb(0, 0, 0, 0.5) inset 0px 0px 10px 1px;
`;

const WhiteCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color:white;
  transform: translate(${({all}) => all ? '-130px' : '0px' });
  box-shadow: rgb(0, 0, 0, 0.5) 0px 0px 4px 2px;
  transition: all 0.3s ease-in-out;

`;

const TextInButton = styled.p`
  padding-left: ${({all})=> all?"40px":"10px"};
`;

const FilterAdvenced =styled.button`
  background-color: white;
  color: rgba(226, 122, 112);
  border: 3px solid rgba(226, 122, 112);
  border-radius: 30px;
  padding: 8px 15px;
  box-shadow: rgb(0, 0, 0, 0.3) 0px 3px 3px 1px;
  font-size: inherit;
`;

const ContainerFiltre =styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;

const Title=styled.h3`
  margin-left: 1.3em;
`;

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { all: false, filter: false };
  }

  render() {
    return (
      <div className="Library">
        <ContainerFiltre>
          <ButtonAllSome all={this.state.all}
            onClick={()=>{
              this.setState({all: !this.state.all });
            }}
          >
            <TextInButton all={this.state.all} >{this.state.all ? 'Toutes' : 'Ma collection'}</TextInButton>
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
        <Title>Votre collection : 0 / 15</Title>
        <Collection className="collection">
          {arbre.map((item) => (
            <DataBase name={item.name} image={item.image} have={item.have} />
          ))}
        </Collection>
      </div>
    )
  }
};

export default Library;
