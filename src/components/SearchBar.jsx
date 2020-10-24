import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <section className="title">
        <h1>Mon herbier</h1>
      </section>
      <input
        id="search"
        className="search"
        type="search"
        placeholder="Entrez un nom de plante"
        title="Rechercher dans la collection"
      />
      <section className="filters">
        <div className="someAll">
          <p>Ma collection</p>
          <div className="whiteCircle" />
        </div>
        <input type="button" className="optionAvancees" value="Avancées" />
      </section>
    </div>
  );
}

export default SearchBar;
