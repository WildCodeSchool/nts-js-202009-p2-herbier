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
    </div>
  );
}

export default SearchBar;
