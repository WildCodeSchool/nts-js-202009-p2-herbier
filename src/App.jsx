import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import Library from './components/Library'
import ContactForm from './components/ContactForm'
function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <ContactForm />
    </div>
  );
}

export default App;
