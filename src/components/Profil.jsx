import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import SideBars from './SideBars';
import avatar from './logos/profil-avatar.svg';
import couronne from './logos/profil-cycle.svg';
import modif from './logos/profil-mobile-pen.svg';
import save from './logos/profil-save.svg';
import emptyLogo from './logos/empty-logo.svg';
import logoBlank from './logos/logo.svg';

const media = {
  desktop: '@media(min-width:768px)',
};

const Profile = styled.div`
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const View = styled.div`
  ${media.desktop} {
    width: 59vw;
    display: flex;
    flex-direction: row;
  }
  background-color: #69c5b2;
  margin: 0 18px 18px 18px;
  border-radius: 5px;
  padding: 18px 0 18px 0;
  .Name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.desktop} {
      width: 50%;
    }
  }
  .Rank {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.desktop} {
      width: 50%;
    }
  }
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
  ${media.desktop} {
    width: 59vw;
    background-color: #ffffff;
    padding: 0 0 18px 0;
    margin: 0 18px 0 18px;
  }
  background-color: #e27a70;
  margin: 0 18px 0 18px;
  border-radius: 5px;
  text-align: center;
  padding: 18px 0 18px 0;
  position: relative;
  .InfosDeCompte,
  .InformationsPersonnelles,
  .Adresse {
    ${media.desktop} {
      background-color: #e27a70;
      color: #ffffff;
      font-size: 20px;
      padding: 15px;
      border-radius: 5px 5px 0 0;
      display: block;
    }
    display: none;
  }
  .InfosDeCompteChamps,
  .InformationsPersonnellesChamps,
  .AdresseChamps {
    ${media.desktop} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      border: 1px solid #a8a8a8;
      border-radius: 0 5px 5px 5px;
      margin: 0 0 20px 0;
      padding: 30px 0 30px 0;
    }
  }
  .InformationsPersonnellesChamps {
    ${media.desktop} {
      display: block;
    }
    display: none;
  }
  .AdresseChamps {
    ${media.desktop} {
      padding: 30px 0 30px 0;
    }
  }
  label {
    ${media.desktop} {
      color: #a8a8a8;
      font-size: 20px;
      margin-bottom: 0;
      width: 100%;
    }
    display: block;
    font-size: 30px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 20px;
  }
  input {
    ${media.desktop} {
      background-color: #ffffff;
      color: #000;
      margin: 5px;
      border: 1px solid #000;
      text-align: left;
      padding: 5px 5px 5px 10px;
      width: 80%;
    }
    margin: 0 0 20px 0;
    border-radius: 5px;
    height: 25px;
    font-size: 20px;
    padding: 0 0 0 10px;
    border: 1px solid;
    background-color: #ffffff;
  }
  input:disabled {
    ${media.desktop} {
      background-color: #ffffff;
      color: #a8a8a8;
      margin: 5px;
      border: 1px solid #a8a8a8;
      text-align: left;
      padding: 5px 5px 5px 10px;
    }
    background-color: #e27a70;
    color: #ffffff;
    border: 0;
    padding: 0;
    text-align: center;
    white-space: nowrap;
  }
  form {
    ${media.desktop} {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Button {
    ${media.desktop} {
      top: 0;
      right: 0;
    }
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Input = styled.div`
  ${media.desktop} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    input {
      width: 100%;
    }
  }
  width: fit-content;
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
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    this.state = {
      pseudo: pseudo ? pseudo : 'Pseudo',
      adresse: adresse ? adresse : 'Adresse',
      email: email ? email : 'Email',
      firstName: firstName ? firstName : 'Prénom',
      lastName: lastName ? lastName : 'Nom',
      formEnabled: false,
      open: false,
      level: JSON.parse(localStorage.getItem('myCollection')).length,
      rank: '',
    };
    this.handleChangePseudo = this.handleChangePseudo.bind(this);
    this.handleChangeAdresse = this.handleChangeAdresse.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  componentDidMount() {
    this.handleChangeLevel();
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

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleClick(event) {
    const { pseudo, adresse, email, firstName, lastName } = this.state;
    event.preventDefault();
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('adresse', adresse);
    localStorage.setItem('email', email);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
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

  handleChangeLevel() {
    if (JSON.parse(localStorage.getItem('myCollection')).length < 6) {
      this.setState({
        level: 0,
        rank: 'Petite graine',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 30) {
      this.setState({
        level: 1,
        rank: 'Jeune Pousse',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 100) {
      this.setState({
        level: 2,
        rank: 'Cotyledon',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 250) {
      this.setState({
        level: 3,
        rank: 'Petit buisson',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 600) {
      this.setState({
        level: 4,
        rank: 'Grand buisson',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 1200) {
      this.setState({
        level: 5,
        rank: 'Petit arbre',
      });
    } else if (JSON.parse(localStorage.getItem('myCollection')).length < 2000) {
      this.setState({
        level: 6,
        rank: 'Grand arbre',
      });
    } else {
      this.setState({
        level: 7,
        rank: 'Yggdrassil',
      });
    }
  }

  render() {
    const {
      pseudo,
      adresse,
      email,
      firstName,
      lastName,
      formEnabled,
      open,
      level,
      rank,
    } = this.state;
    return (
      <Profile className="Profil">
        <View className="ViewProfile">
          <div className="Name">
            <h1>{localStorage.getItem('pseudo')}</h1>
            <div className="AvatarCouronne">
              <img
                className="Avatar"
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div className="Rank">
            <h3>Rang {level} :</h3>
            <h2>{rank}</h2>
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
          </div>
        </View>
        <Infos className="InfosProfile">
          <form onSubmit={this.handleClick}>
            <div className="InfosDeCompte">Infos de compte</div>
            <div className="InfosDeCompteChamps">
              <Input>
                <label htmlFor="pseudo">Pseudo</label>
                <input
                  disabled={!formEnabled}
                  value={formEnabled ? pseudo : localStorage.getItem('pseudo')}
                  placeholder={localStorage.getItem('pseudo')}
                  type="text"
                  onChange={this.handleChangePseudo}
                  id="pseudo"
                  name="pseudo"
                />
              </Input>
              <Input>
                <label htmlFor="email">Email</label>
                <input
                  disabled={!formEnabled}
                  value={formEnabled ? email : localStorage.getItem('email')}
                  placeholder={localStorage.getItem('email')}
                  type="text"
                  onChange={this.handleChangeEmail}
                  id="email"
                  name="email"
                />
              </Input>
            </div>
            <div className="InformationsPersonnelles">
              Informations personnelles
            </div>
            <div className="InformationsPersonnellesChamps">
              <Input>
                <label className="firstName" htmlFor="firstName">
                  Prénom
                </label>
                <input
                  disabled={!formEnabled}
                  value={
                    formEnabled ? firstName : localStorage.getItem('firstName')
                  }
                  placeholder={localStorage.getItem('firstName')}
                  type="text"
                  onChange={this.handleChangeFirstName}
                  id="firstName"
                  name="firstName"
                />
              </Input>
              <Input>
                <label className="lastName" htmlFor="lastName">
                  Nom
                </label>
                <input
                  disabled={!formEnabled}
                  value={
                    formEnabled ? lastName : localStorage.getItem('lastName')
                  }
                  placeholder={localStorage.getItem('lastName')}
                  type="text"
                  onChange={this.handleChangeLastName}
                  id="lastName"
                  name="lastName"
                />
              </Input>
            </div>
            <div className="Adresse">Adresse</div>
            <div className="AdresseChamps">
              <Input>
                <label htmlFor="adresse">Adresse</label>
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
              </Input>
            </div>
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
        <SideBars />
      </Profile>
    );
  }
}

export default Profil;
