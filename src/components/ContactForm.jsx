import React from 'react';

function ContactForm() {
  const sendMessage = (event) => {
    alert('Votre message à été envoyer');
    event.preventDefault();
  };
  return (
    <form onSubmit={sendMessage}>
      <div>
        <label>
          <input type="text" placeholder="Votre nom / prenom" />
        </label>
      </div>
      <div>
        <label>
          <input type="text" placeholder="JaneDoe@gmail.com"></input>
        </label>
      </div>
      <div>
        <label>
          <select placeholder="Objet">
            <option>Suggestions d'améliorations</option>
            <option>Signaler un bug</option>
            <option>Nous Encourager</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <textarea placeholder="commemtaire" />
        </label>
      </div>
      <div>
        <input type="submit" value="Envoyer" />
      </div>
    </form>
  );
}

export default ContactForm;
