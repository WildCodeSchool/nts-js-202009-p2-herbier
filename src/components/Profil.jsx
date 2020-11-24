/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import avatar from './logos/profil-avatar.svg';
import couronne from './logos/profil-cycle.svg';
import modif from './logos/profil-mobile-pen.svg';
import save from './logos/profil-save.svg';
import emptyLogo from './logos/empty-logo.svg';
import logoBlank from './logos/logo.svg';

const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #69c5b2;
  margin: 0 18px 18px 18px;
  border-radius: 5px;
  padding: 18px 0 18px 0;
  h1 {
    color: #ffffff;
    margin: 0 0 20px 0;
  }
  h2 {
    color: #ffffff;
    margin-top: 0;
  }
  h3 {
    color: #ffffff;
  }
  .rang {
    height: 23px;
    padding: 0 3px 0 3px;
  }
  .AvatarCouronne {
    background-image: url(${couronne});
    height: 148px;
    width: 162px;
    .Avatar {
      padding: 8px 20px 20px 22px;
      border-radius: 50%;
      height: 120px;
      width: auto;
    }
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
    border: 1px solid;
    background-color: #ffffff;
  }
  input:disabled {
    background-color: #e27a70;
    color: #ffffff;
    border: 0;
    padding: 0;
    text-align: center;
    white-space: nowrap;
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Profil extends Component {
  constructor(props) {
    super(props);
    const pseudo = localStorage.getItem('pseudo');
    const adresse = localStorage.getItem('adresse');
    const email = localStorage.getItem('email');
    this.state = {
      pseudo: pseudo ? pseudo : 'Pseudo',
      adresse: adresse ? adresse : 'Adresse',
      email: email ? email : 'Email',
      formEnabled: false,
      open: false,
      level: 6,
    };
    this.handleChangePseudo = this.handleChangePseudo.bind(this);
    this.handleChangeAdresse = this.handleChangeAdresse.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChangePseudo(event) {
    this.setState({
      pseudo: event.target.value,
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
    const { pseudo, adresse, email } = this.state;
    event.preventDefault();
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('adresse', adresse);
    localStorage.setItem('email', email);
    this.setState({
      open: true,
      formEnabled: false,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { pseudo, adresse, email, formEnabled, open, level } = this.state;

    return (
      localStorage.setItem('level', level),
      (
        <div className="Profil">
          <View className="ViewProfile">
            <h1>{localStorage.getItem('pseudo')}</h1>
            <div className="AvatarCouronne">
              <img
                className="Avatar"
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="avatar"
              />
            </div>
            <h3>Rang {localStorage.getItem('level')} :</h3>
            <h2>
              {level === 0
                ? 'Petite graine'
                : level === 1
                ? 'Jeune pousse'
                : level === 2
                ? 'Cotyledon'
                : level === 3
                ? 'Petit buisson'
                : level === 4
                ? 'Grand buisson'
                : level === 5
                ? 'Petit arbre'
                : level === 6
                ? 'Grand arbre'
                : level === 7
                ? 'Yggdrassil'
                : ''}
            </h2>
            <div className="gauge">
              <img
                className="rang"
                src={level > 0 ? logoBlank : emptyLogo}
                alt="rang 1"
              />
              <img
                className="rang"
                src={level > 1 ? logoBlank : emptyLogo}
                alt="rang 2"
              />
              <img
                className="rang"
                src={level > 2 ? logoBlank : emptyLogo}
                alt="rang 3"
              />
              <img
                className="rang"
                src={level > 3 ? logoBlank : emptyLogo}
                alt="rang 4"
              />
              <img
                className="rang"
                src={level > 4 ? logoBlank : emptyLogo}
                alt="rang 5"
              />
              <img
                className="rang"
                src={level > 5 ? logoBlank : emptyLogo}
                alt="rang 6"
              />
              <img
                className="rang"
                src={level > 6 ? logoBlank : emptyLogo}
                alt="rang 7"
              />
            </div>
          </View>
          {this.handleLevel}
          <Infos className="InfosProfile">
            <form onSubmit={this.handleClick}>
              <label htmlFor="pseudo">
                Pseudo
                <input
                  disabled={!formEnabled}
                  value={formEnabled ? pseudo : localStorage.getItem('pseudo')}
                  placeholder={localStorage.getItem('pseudo')}
                  type="text"
                  onChange={this.handleChangePseudo}
                  id="pseudo"
                  name="pseudo"
                />
              </label>
              <label htmlFor="adresse">
                Adresse
                <input
                  disabled={!formEnabled}
                  value={
                    formEnabled ? adresse : localStorage.getItem('adresse')
                  }
                  placeholder={localStorage.getItem('adresse')}
                  type="text"
                  onChange={this.handleChangeAdresse}
                  id="adresse"
                  name="adresse"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  disabled={!formEnabled}
                  value={formEnabled ? email : localStorage.getItem('email')}
                  placeholder={localStorage.getItem('email')}
                  type="text"
                  onChange={this.handleChangeEmail}
                  id="email"
                  name="email"
                />
              </label>
              <img
                className="Button"
                src={formEnabled ? save : modif}
                alt={formEnabled ? 'sauvegarder' : 'modifier'}
                onClick={
                  formEnabled
                    ? this.handleClick
                    : () => this.setState({ formEnabled: !formEnabled })
                }
                aria-hidden
              />
            </form>
          </Infos>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={2500}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              Informations enregistrées!
            </Alert>
          </Snackbar>
        </div>
      )
    );
  }
}

export default Profil;
