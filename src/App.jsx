import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import HeaderMobile from './components/HeaderMobile';

function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <HomePage />
    </div>
  );
}

export default App;
