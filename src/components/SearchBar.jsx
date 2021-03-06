import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const H1 = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: bold;
  @media ${device.tablet} {
    width: 100%;
  }
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
  max-width: 450px;
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
  @media ${device.tablet} {
    width: 100%;
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    order: 2;
    width: 100%;
  }
`;

class SearchBar extends React.Component {
  render() {
    const { search, handleChangeSearch } = this.props;
    return (
      <SearchForm className="SearchBar">
        <HeaderTitle>
          <H1>Mon herbier</H1>
        </HeaderTitle>
        <Search
          value={search}
          onChange={handleChangeSearch}
          id="search"
          type="search"
          placeholder="Entrez un nom de plante"
          title="Rechercher dans la collection"
        />
      </SearchForm>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
