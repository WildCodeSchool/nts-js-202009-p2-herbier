import React from 'react';
import ContactForm from './components/ContactForm'
import './App.css';
import HomePage from './components/HomePage';
import styled from 'styled-components'
import HeaderMobile from './components/HeaderMobile';

function App() {
  return (
    <div className="App">
      <ContactForm />
      <HeaderMobile />
      <HomePage />
    </div>
  );
}

export default App;
