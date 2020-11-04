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
  font-weight: bold;
  margin: 0 2rem;
  min-width: 50px;
  box-shadow: 2px 2px 2px #ccd1d1;
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
  font-weight: bold;
  min-width: 50px;
  box-shadow: 2px 2px 2px #ccd1d1;
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
  width: 330px;
  display: flex;
`;

class Button extends React.Component {
  render() {
    return (
      <Buttons>
        <ButtonDel type="button" onClick={this.props.deleteInfos}>
          X
        </ButtonDel>
        <ButtonAdd type="button">Ajouter à mon herbier</ButtonAdd>
      </Buttons>
    );
  }
}

export default Button;
