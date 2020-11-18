import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import avatar from './logos/profil-avatar.svg';
import couronne from './logos/profil-cycle.svg';
import modif from './logos/profil-mobile-pen.svg';
import save from './logos/profil-save.svg';

const View = styled.div`
  column-count: 2;
  background-color: #69c5b2;
  margin: 0 18px 18px 18px;
  border-radius: 5px;
  padding: 1px 18px 1px 18px;
  h1,
  h2,
  h3 {
    color: #ffffff;
    text-align: center;
  }
`;

const Infos = styled.div`
  background-color: #e27a70;
  margin: 0 18px 0 18px;
  border-radius: 5px;
  text-align: center;
  padding: 18px 0 18px 0;
  position: relative;
  p {
    color: #ffffff;
    font-size: 22px;
  }
  label {
    display: block;
    font-size: 30px;
    color: #fff;
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
  .Button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const AvatarCouronne = styled.div`
  position: relative;
  height: 280px;
`;

const Avatar = styled.img`
  position: absolute; top: -11px; left: 36px;
`;

const Couronne = styled.img`
  position: absolute; top: -21px; left: 18px;
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
    localStorage.setItem('pseudo', 'John');
    const pseudonyme = localStorage.getItem('pseudo');
    console.log(pseudonyme);
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
    return (
      <div className="Profil">
        <View className="ViewProfile">
          <h1>{this.state.pseudo}</h1>
          <AvatarCouronne>
            <Avatar src={avatar} alt="avatar" />
            <Couronne src={couronne} alt="couronne" />
          </AvatarCouronne>
          <div>
            <h3>Rang</h3>
            <h2>Marmotte</h2>
          </div>
        </View>
        <Infos className="InfosProfile">
          <form onSubmit={this.handleClick}>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              disabled={!this.state.formEnabled}
              value={this.state.pseudoTemp}
              type="text"
              required="required"
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
            <img
              className="Button"
              src={this.state.formEnabled ? save : modif}
              alt={this.state.formEnabled ? 'sauvegarder' : 'modifier'}
              onClick={
                this.state.formEnabled
                  ? this.handleClick
                  : () =>
                      this.setState({ formEnabled: !this.state.formEnabled })
              }
            />
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
