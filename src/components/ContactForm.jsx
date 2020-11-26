import React from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import mainContact from './logos/main-contact.svg';
import formArrow from './logos/form-arrow.svg';
import SideBars from './SideBars';

const media = {
  desktop: '@media(min-width:768px)',
};

const Title = styled.div`
  ${media.desktop} {
    width: 59vw;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }
  background-color: #69c5b2;
  color: white;
  text-align: center;
  padding-top: 10px;
  width: 90vw;
  padding: 0;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;

  h1 {
    margin-left: 20px;
    font-size: 36px;
  }
`;

const Logo = styled.img`
  ${media.desktop} {
    display: none;
  }
  padding: 0 25px;
  padding-bottom: 10px;
`;

const Form = styled.form`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input,
  select,
  textarea {
    border: solid 2px #69c5b2;
    border-radius: 5px;
    height: 40px;
    margin-top: 10px;
    width: 90vw;
    max-width: 380px;
    box-sizing: border-box;
    font-size: 20px;
    outline: none;
    padding: 0 0 0 10px;
  }

  select {
    cursor: pointer;
  }

  label {
    width: 100%;
  }

  textarea {
    height: 200px;
    font-family: inherit;
  }
`;

const StyledSelect = styled.div`
  select {
    -webkit-appearance: none;
    color: grey;
    background: url(${formArrow}) no-repeat;
    background-position: right 10px bottom 8px;
    position: relative;
  }
`;

const Button = styled.button`
  align-self: center;
  padding: 10px 30px;
  background-color: #69c5b2;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border-radius: 5px;
  font-size: 24px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;

  :active {
    background-color: white;
    color: #69c5b2;
    border: solid 2px;
  }
`;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstAndLastName: '',
      email: '',
      comment: '',
      open: false,
      error: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    const { firstAndLastName, email, comment } = this.state;
    if (firstAndLastName !== '' && email !== '' && comment !== '') {
      this.setState({
        error: false,
        open: true,
      });
    } else {
      this.setState({
        error: true,
        open: true,
      });
    }
    event.preventDefault();
    this.setState({ firstAndLastName: '' });
    this.setState({ email: '' });
    this.setState({ comment: '' });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleUserInput(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstAndLastName, email, comment, open, error } = this.state;
    return (
      <div>
        <Title>
          <h1>Nous contacter</h1>
          <Logo src={mainContact} alt="nous contacter" />
        </Title>
        <Form>
          <Field>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Nom / prénom"
                value={firstAndLastName}
                id="firstAndLastName"
                name="firstAndLastName"
                onChange={(event) => this.handleUserInput(event)}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="JaneDoe@gmail.com"
                value={email}
                id="email"
                name="email"
                onChange={(event) => this.handleUserInput(event)}
              />
            </label>
            <StyledSelect>
              <select placeholder="Objet">
                <option>Suggestions d&#39;améliorations</option>
                <option>Signaler un bug</option>
                <option>Nous encourager</option>
              </select>
            </StyledSelect>
            <label htmlFor="comment">
              <textarea
                placeholder="Commentaire"
                value={comment}
                id="comment"
                name="comment"
                onChange={(event) => this.handleUserInput(event)}
              />
            </label>
          </Field>
          <Button onClick={this.handleClick} type="button">
            Envoyer
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={2500}
            onClose={this.handleClose}
          >
            <Alert
              onClose={this.handleClose}
              severity={error ? 'warning' : 'success'}
            >
              {error
                ? 'Veuillez compléter tous les champs!'
                : 'Message Envoyé!'}
            </Alert>
          </Snackbar>
        </Form>
        <SideBars />
      </div>
    );
  }
}

export default ContactForm;
