import React from 'react';
import './App.css';
import styled from 'styled-components';
import ScanPage from './components/ScanPage';
import HeaderMobile from './components/HeaderMobile';

function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <ScanPage />
    </div>
  );
}

export default App;
