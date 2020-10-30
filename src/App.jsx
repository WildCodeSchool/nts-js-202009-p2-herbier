import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import Library from './components/Library'
function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <Library />
    </div>
  );
}

export default App;
