import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainPicker from './logos/main-picker.svg';
import qrCode from './logos/main-qrcode.svg';
import mainHerbier from './logos/main-herbier.svg';
import mainDecouverte from './logos/main-decouverte.svg';
import mainBackground from './pictures/main.png';

const Main = styled.section`
  display: flex;
  background-color: ${({ color }) => color};
  height: ${({ height }) => (height ? '186px' : '124px')};
  justify-content: space-between;
  border-radius: 5px;
  padding: 14px 29px 14px 14px;
  align-items: center;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  margin: 14px 14px 20px 14px;
  background-image: url(${({ background }) => background});
  background-position: bottom;
  background-size: cover;
  :active {
    transform: translate(0px, 2px);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

const Title = styled.h1`
  color: white;
  width: 60vw;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-shadow: ${({ textShadow }) => textShadow};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const mainButtons = [
  {
    title: 'Autour de moi',
    picture: mainPicker,
    height: ' ',
    background: mainBackground,
    textShadow: '1px 1px 1px #b1b1b1',
    url: '/around-me',
  },
  {
    title: 'Scanner une plante',
    picture: qrCode,
    color: ' #69C5B2',
    url: '/scan',
  },
  {
    title: 'Mon herbier',
    picture: mainHerbier,
    color: ' #E27A70',
    url: '/herbier',
  },
  {
    title: 'Découverte ?',
    picture: mainDecouverte,
    color: ' #9CD69B',
    url: '/decouverte',
  },
];

const clickNav = (event) => {
  event.preventDefault();
};

const MainButton = () => {
  return (
    <div>
      {mainButtons.map((button) => (
        <Main
          key={button.title}
          color={button.color}
          height={button.height}
          background={button.background}
          onClick={clickNav}
        >
          <StyledLink to={button.url}>
            <Title textShadow={button.textShadow}>{button.title}</Title>
            <Logo src={button.picture} alt={button.title} />
          </StyledLink>
        </Main>
      ))}
    </div>
  );
};

export default MainButton;
