import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './SearchBar';
import DataBase from './DataBase';

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

const Title4=styled.h4`

`;

const ButtonParamete = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:80px;
  color:white;
  background-color:rgba(156, 214, 155);
  border-top-left-radius:6px;
  border-top-right-radius:6px;
  margin-right:8px;
  margin-left:8px;
`;

const ParameterFiltre=styled.div`
  display:${({filter}) =>filter?"none":"flex"};
  justify-content: center;
  align-items:center;
  height:5vh;
  margin-top:20px;
  `;

const ListeFiltre = styled.div`
  background-color: rgba(156, 214, 155);
  height:fit-content;
  width:90%;

`;

const Li = styled.li`
  list-style:none;
  margin:0;
  padding:0;
  width:90%;
`;


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = { all: false, filter: false ,vegetals: [] ,choice: 'famille', tri:[], list:[]};
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
  axios.get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_collection-vegetale-nantes&q=&rows=3923&facet=famille&facet=genre&facet=nom_du_site&facet=espece')
    .then((res) => {
      return this.setState({vegetals : res.data.records, tri:res.data.facet_groups})
  })
  }

  getFamilly(event){
    this.setState({ choice: event.target.value });
  }

  render() {
    return (
      <div className="Library">
        <SearchBar />
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
        <ParameterFiltre filter={this.state.filter}>
          <ButtonParamete onClick={(event)=>this.setState({choice: 'famille', list:this.state.tri.filter((element)=> element.name === this.state.choice)})}>Famille</ButtonParamete>
          <ButtonParamete onClick={(event)=>this.setState({choice: 'genre', list:this.state.tri.filter((element)=> element.name === this.state.choice)})}>Genre</ButtonParamete>
          <ButtonParamete onClick={(event)=>this.setState({choice: 'espece', list:this.state.tri.filter((element)=> element.name === this.state.choice)})}>Espece</ButtonParamete>
          <ButtonParamete onClick={(event)=>this.setState({choice: 'nom_du_site', list:this.state.tri.filter((element)=> element.name === this.state.choice)})}>Parc</ButtonParamete>
          </ParameterFiltre>
        <ListeFiltre >
            {this.state.list[0] && this.state.list[0].facets.map((item)=>{
              return(
              <Li>{item.name}({item.count})</Li>
              )
            })}
        </ListeFiltre>
        <Title>Votre collection : 0 / 15</Title>
        <Collection className="collection">
          {this.state.vegetals
          .filter((element)=> element.fields.photo1)
          .map((item) => (
            <DataBase
              key={item.recordid}
              famille={item.fields.famille}
              espece={item.fields.espece}
              genre={item.fields.genre}
              image={item.fields.photo1 && item.fields.photo1.id}/>
          ))}
        </Collection>
      </div>
    )
  }
};

export default Library;
