import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Library from './components/Library';

const dataBaseImage = [
  {
      name: "aesculus",
      image : "https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : true
  },
  {
      name: "petraea",
      image : "https://images.pexels.com/photos/1067333/pexels-photo-1067333.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : false
  },
  {
      name: "robur",
      image : "https://images.pexels.com/photos/286305/pexels-photo-286305.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : false
  },
  {
      name: "ilex",
      image : "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : true
  },
  {
      name: "araucaria",
      image : "https://images.pexels.com/photos/1083386/pexels-photo-1083386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : false
  },
  {
      name: "pseudotsuga",
      image : "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : true
  },
  {
      name: "alumette",
      image : "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      have : true
  }
]


function App() {
  return (
    <div className="App">
      <SearchBar />
      <Filters />
      <Library arbre={dataBaseImage}/>
    </div>
  );
}

export default App;
