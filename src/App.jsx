import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeaderMobile from './components/HeaderMobile';
import ScanPage from './components/ScanPage';
import AroundMePage from './components/AroundMePage';
import Library from './components/Library';
import ContactForm from './components/ContactForm';
import Profil from './components/Profil';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyPlants: [],
      vegetals: [],
      tri: [],
      scannedLybrary: [
        '33ed6720a4fec83e401390ec5fb67d4ec7bdd9c4',
        '770a3422810693f5ecf454fec5a8e17e68dd7cb0',
        'eccf60b59b4396966fe81106c933cdaf269a91a3',
        '9266fa81e583eb74558a0dd1e017f4a2e7627fd2',
        '22030281a17bde724545be084f2b57f93a6bc1f9',
        '0b5a76b82b6a71f9b94640d4d37a20492e6000b1',
      ],
      open: false,
    };
    this.getData = this.getData.bind(this);
    this.addToLybrary = this.addToLybrary.bind(this);
    this.alreadyInLybrary = this.alreadyInLybrary.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_collection-vegetale-nantes&q=&rows=3923&facet=famille&facet=genre&facet=nom_du_site&facet=espece'
      )
      .then((res) => {
        return this.setState({
          vegetals: res.data.records,
          tri: res.data.facet_groups,
        });
      });
  }

  alreadyInLybrary() {
    this.setState({
      open: !false,
    });
  }

  addToLybrary(id) {
    const { scannedLybrary } = this.state;
    this.setState({
      scannedLybrary: [...scannedLybrary, id],
      open: !false,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { scannedLybrary, vegetals, tri, open } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <HeaderMobile />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/around-me" component={AroundMePage} />
            <Route
              exact
              path="/scan"
              component={() => (
                <ScanPage
                  open={open}
                  handleClose={this.handleClose}
                  addToLybrary={this.addToLybrary}
                  alreadyInLybrary={this.alreadyInLybrary}
                  scannedLybrary={scannedLybrary}
                />
              )}
            />
            <Route
              exact
              path="/herbier"
              component={() => (
                <Library
                  vegetals={vegetals}
                  tri={tri}
                  scannedLybrary={scannedLybrary}
                />
              )}
            />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/decouverte" component={ContactForm} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
