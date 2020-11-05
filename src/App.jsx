import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import Library from './components/Library';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMobile />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scan" component={ScanPage} />
          <Route exact path="/herbier" component={Library} />
          <Route exact path="/decouverte" component={ContactForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
