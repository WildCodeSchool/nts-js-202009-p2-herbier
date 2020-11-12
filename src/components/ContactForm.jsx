import React from 'react';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import mainContact from './logos/main-contact.svg';
import formArrow from './logos/form-arrow.svg';

const Title = styled.div`
  background-color: #69c5b2;
  color: white;
  text-align: center;
  padding-top: 10px;
  width: 90vw;
  max-width: 380px;
  border-radius: 5px;
  margin: auto;
  display: flex;

  h1 {
    margin-left: 20px;
  }
`;

const Logo = styled.img`
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
    font-size: 24px;
    outline: none;
  }

  label {
    width: 100%;
  }

  textarea {
    height: 200px;
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
    this.props = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <Title>
          <h1>Nous contacter</h1>
          <Logo src={mainContact} alt="nous contacter" />
        </Title>
        <Form>
          <Field>
            <label>
              <input type="text" placeholder="Nom / prenom" />
            </label>
            <label>
              <input type="text" placeholder="JaneDoe@gmail.com" />
            </label>
            <StyledSelect>
              <select placeholder="Objet">
                <option>Suggestions d'améliorations</option>
                <option>Signaler un bug</option>
                <option>Nous Encourager</option>
              </select>
            </StyledSelect>
            <label>
              <textarea placeholder="commentaire" />
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
            open={this.props.open}
            autoHideDuration={2500}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              Message Envoyé!
            </Alert>
          </Snackbar>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
