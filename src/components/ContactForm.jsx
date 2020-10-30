import React from 'react';
import styled from 'styled-components';
import mainContact from './logos/main-contact.svg';

const Title = styled.div`
  background-color: #69c5b2;
  color: white;
  text-align: center;
  padding-top: 10px;
  width: 380px;
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
    width: 380px;
    box-sizing: border-box;
    font-size: 24px;
  }

  label {
    width: 100%;
  }

  textarea {
    height: 200px;
  }

  select {
    background-color: white;
  }
`;

const Button = styled.button`
  align-self: center;
  transform: translate(114px);
  padding: 10px 30px;
  background-color: #69c5b2;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border-radius: 5px;
  font-size: 24px;
  margin-top: 25px;

  :active {
    background-color: white;
    color: #69c5b2;
    border: solid 2px;
  }
`;

function ContactForm() {
  const sendMessage = (event) => {
    alert('Votre message a été envoyé'); // eslint-disable-line
    event.preventDefault();
  };
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
          <label>
            <select placeholder="Objet">
              <option>Suggestions d'améliorations</option>
              <option>Signaler un bug</option>
              <option>Nous Encourager</option>
            </select>
          </label>
          <label>
            <textarea placeholder="commentaire" />
          </label>
        </Field>
        <Button onClick={sendMessage} type="button">
          Envoyer
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;