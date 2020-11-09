import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import Library from './components/Library';
import ContactForm from './components/ContactForm';
import AroundMePage from './components/AroundMePage'

function App() {
  return (
    <div className="App">
      <AroundMePage />
    </div>
  );
}

export default App;
