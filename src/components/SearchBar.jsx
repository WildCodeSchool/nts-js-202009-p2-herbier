import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: bold;
`;

const Search = styled.input`
  border: 2px solid rgba(226, 122, 112);
  border-radius: 30px;
  background: url('./img/icons8-search-25.png') right no-repeat;
  background-position-x: 95%;
  background-color: rgba(226, 122, 112, 0.3);
  padding-inline-start: 20px;
  color: rgb(0, 0, 0, 0.5);
  margin-top: 15px;
  height: 30px;
  width: 80vw;
`;

const HeaderTitle = styled.div`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(226, 122, 112);
  height: 80px;
  width: 90%;
  border-radius: 5px;
  text-align: center;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <SearchForm className="SearchBar">
        <HeaderTitle>
          <H1>Mon herbier</H1>
        </HeaderTitle>
        <Search
          value={this.props.search}
          onChange={this.props.handleChangeSearch}
          id="search"
          type="search"
          placeholder="Entrez un nom de plante"
          title="Rechercher dans la collection"
        />
      </SearchForm>
    );
  }
}

export default SearchBar;
