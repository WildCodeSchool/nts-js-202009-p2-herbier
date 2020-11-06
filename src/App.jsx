import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import AroundMePage from './components/AroundMePage'
import Library from './components/Library';
import ContactForm from './components/ContactForm';
import Profil from './components/Profil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMobile />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/around-me" component={AroundMePage} />
          <Route exact path="/scan" component={ScanPage} />
          <Route exact path="/herbier" component={Library} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/decouverte" component={ContactForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
