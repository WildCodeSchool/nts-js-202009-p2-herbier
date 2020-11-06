import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import avatar from './logos/profil-avatar.svg';
import couronne from './logos/profil-cycle.svg';
import modif from './logos/profil-mobile-pen.svg';

const View = styled.div`
  background-color: #69c5b2;
  margin: 0 18px 18px 18px;
  border-radius: 5px;
  padding: 1px 18px 1px 18px;
  h1,
  h2,
  h3 {
    color: #ffffff;
  }
`;

const Infos = styled.div`
  background-color: #e27a70;
  margin: 0 18px 0 18px;
  border-radius: 5px;
  text-align: center;
  padding: 18px 0 18px 0;
  p {
    color: #ffffff;
    font-size: 22px;
  }
  label {
    display: block;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
    margin-bottom: 20px;
  }
  input {
    margin: 0 0 20px 0;
    width: 80%;
    border-radius: 5px;
    height: 25px;
    font-size: 20px;
    padding: 0 0 0 10px;
    //box-shadow: 0 0 0 ;
    border: 1px solid;
  }
  input:disabled {
    background-color: #e27a70;
    color: #ffffff;
    border: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    display: block;
    color: #e27a70;
    border: none;
    background-color: #ffffff;
    width: 110px;
    height: 25px;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 10px 0;
    background-image: url({modif});
  }
`;

const Avatar = styled.img`
  position: relative; top: -11px; left: 36px;
  }
`;

const Couronne = styled.img`
  position: relative; top: 0px; left: -110px;
  }
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: 'Pseudo',
      pseudoTemp: '',
      adresse: '',
      email: '',
      formEnabled: false,
      open: false,
    };
    this.handleChangePseudo = this.handleChangePseudo.bind(this);
    this.handleChangeAdresse = this.handleChangeAdresse.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChangePseudo(event) {
    this.setState({
      pseudoTemp: event.target.value,
    });
  }

  handleChangeAdresse(event) {
    this.setState({
      adresse: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      open: true,
      pseudo: this.state.pseudoTemp,
      formEnabled: false,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    console.log(this.state.pseudo);
    return (
      <div className="Profil">
        <View className="ViewProfile">
          <h1>{this.state.pseudo}</h1>
          <div>
            <Avatar src={avatar} alt="avatar" />
            <Couronne src={couronne} alt="couronne" />
          </div>
          <h3>Rang</h3>
          <h2>Marmotte</h2>
        </View>
        <Infos className="InfosProfile">
          <form onSubmit={this.handleClick}>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              disabled={!this.state.formEnabled}
              value={this.state.pseudoTemp}
              type="text"
              onChange={this.handleChangePseudo}
              id="pseudo"
              name="pseudo"
            />
            <label htmlFor="adresse">Adresse</label>
            <input
              disabled={!this.state.formEnabled}
              value={this.state.adresse}
              type="text"
              onChange={this.handleChangeAdresse}
              id="adresse"
              name="adresse"
            />
            <label htmlFor="email">Email</label>
            <input
              disabled={!this.state.formEnabled}
              value={this.state.email}
              type="text"
              onChange={this.handleChangeEmail}
              id="email"
              name="email"
            />
            <button type="button" onClick={this.handleClick}>
              Envoi
            </button>
            <button
              type="button"
              onClick={() => {
                this.setState({
                  formEnabled: !this.state.formEnabled,
                });
              }}
            >
              Modifications
            </button>
          </form>
        </Infos>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={2500}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Informations enregistrées!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Profil;
