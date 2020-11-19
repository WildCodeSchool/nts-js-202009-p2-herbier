import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mainPicker from './logos/main-picker.svg';
import qrCode from './logos/main-qrcode.svg';
import mainHerbier from './logos/main-herbier.svg';
import mainDecouverte from './logos/main-decouverte.svg';
import mainBackground from './pictures/main.png';
import greenBackground from './pictures/greenbackground.png';

const media = {
  desktop: '@media(min-width:768px)',
};

const ScrollWrap = styled.div`
  ${media.desktop} {

  }
`;

const Main = styled.section`
  ${media.desktop} {
    width: 18vw;
    height: 112px;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-content: center;
    transform: translateX(-96%);
    padding: 10px 10px 15px 10px;
    display: ${({ desktop }) => (desktop ? 'none' : '')};
    background-image: url(${({ background }) =>
      background ? greenBackground : ''});
  }
  display: flex;
  background-color: ${({ color }) => color};
  height: ${({ height }) => (height ? '186px' : '124px')};
  justify-content: space-between;
  border-radius: 5px;
  padding: 14px 29px 14px 14px;
  align-items: center;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  margin: 14px 14px 20px 14px;
  background-image: url(${({ background }) =>
    background ? mainBackground : ''});
  background-position: bottom;
  background-size: cover;
  :active {
    transform: translate(0px, 2px);
    transform: translateX(-96%);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled.img`
  ${media.desktop} {
    height: 50px;
    width: 50px;
  }
  height: 70px;
  width: 70px;
`;

const Title = styled.h1`
  ${media.desktop} {
    font-size: 20px;
    text-shadow: ${({ textShadow }) => (textShadow ? 'none' : ' ')};
  }
  color: white;
  width: 60vw;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  text-shadow: ${({ textShadow }) =>
    textShadow ? '1px 1px 1px #b1b1b1' : ' '};
`;

const Slider = styled.div`
  ${media.desktop} {
    display: block;
    width: 40vw;
    height: 135px;
    border-radius: 5px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    transform: translateY(3px);
    p {
      width: 36vw;
      padding: 2rem 1rem 2rem 1rem;
    }
  }
  display: none;
`;

const StyledLink = styled(Link)`
  ${media.desktop} {
    width: 18vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
  }
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
    text: 'Ici vous trouverez tous les parcs proches de votre vous.',
    backgroundColor: 'rgba(105,197,178,0.5)',
  },
  {
    title: 'Scanner une plante',
    picture: qrCode,
    color: ' #69C5B2',
    url: '/scan',
    desktop: ' ',
  },
  {
    title: 'Mon herbier',
    picture: mainHerbier,
    color: ' #E27A70',
    url: '/herbier',
    text:
      'Votre collection est évolutive, elle n’attend que de nouvelles trouvailles à son catalogue !',
    backgroundColor: 'rgba(226,122,112,0.5)',
  },
  {
    title: 'Découverte ?',
    picture: mainDecouverte,
    color: ' #9CD69B',
    url: '/decouverte',
    text: 'Vous pensez avoir fait une découverte? Ca se passe ici !',
    backgroundColor: 'rgba(156,214,155,0.5)',
  },
];

const clickNav = (event) => {
  event.preventDefault();
};

const MainButton = () => {
  return (
    <ScrollWrap>
      {mainButtons.map((button) => (
        <Main
          key={button.title}
          color={button.color}
          height={button.height}
          background={button.background}
          desktop={button.desktop}
          onClick={clickNav}
        >
          <StyledLink to={button.url}>
            <Title textShadow={button.textShadow}>{button.title}</Title>
            <Logo src={button.picture} alt={button.title} />
          </StyledLink>
          <Slider
            backgroundColor={button.backgroundColor}
            destop={button.desktop}
          >
            <p>{button.text}</p>
          </Slider>
        </Main>
      ))}
    </ScrollWrap>
  );
};

export default MainButton;
