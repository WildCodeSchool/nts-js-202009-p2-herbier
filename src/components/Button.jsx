import React from 'react';
import styled from 'styled-components';

const ButtonDel = styled.button`
  background-color: #69c5b2;
  &:active {
    background-color: #fff;
  }
  border-color: #69c5b2;
  border: none;
  &:active {
    border: solid 2px;
  }
  border-radius: 5px;
  color: white;
  &:active {
    color: #69c5b2;
  }
  font-size: 1rem;
  margin: 0 2rem;
  min-width: 50px;
  box-shadow: 2px 2px 2px grey;
  &:active {
    box-shadow: 0 0 0;
  }
  height: 50px;
  outline: none;
  position: relative;
`;

const ButtonAdd = styled.button`
  background-color: #69c5b2;
  &:active {
    background-color: #fff;
  }
  border-color: #69c5b2;
  border: none;
  &:active {
    border: solid 2px;
  }
  border-radius: 5px;
  color: white;
  &:active {
    color: #69c5b2;
  }
  font-size: 1rem;
  min-width: 50px;
  box-shadow: 2px 2px 2px grey;
  &:active {
    box-shadow: 0 0 0;
  }
  height: 50px;
  outline: none;
  margin-right: 2rem;
`;

const Buttons = styled.div`
  margin-bottom: 2rem;
  height: 100px;
  width: 300px;
  display: flex;
`;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sent: props.sent,
      Delete: props.delete,
    };
  }

  render() {
    return (
      <Buttons>
        <ButtonDel
          type="button"
          onClick={(event) => {
            const isDelete = !this.state.Delete;
            this.setState({ Delete: isDelete });
          }}
        >
          X
        </ButtonDel>
        <ButtonAdd
          type="button"
          onClick={(event) => {
            const isSent = !this.state.Sent;
            this.setState({ Sent: isSent });
          }}
        >
          Ajouter à mon herbier
        </ButtonAdd>
      </Buttons>
    );
  }
}

export default Button;
