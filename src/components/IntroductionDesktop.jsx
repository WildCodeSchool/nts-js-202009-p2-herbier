import React from 'react';
import styled from 'styled-components';
import DesktopLogo from './logos/desk-logo.svg';

const media = {
  desktop: '@media(min-width:768px)',
};

const VegeNantes = styled.div`
  height: 90px;
  width: 60vw;
  background-color: #9cd69b;
  color: white;
  font-size: 3rem;
  font-family: Poiret -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-items: center;
  img {
    height: 90%;
    margin-top: 0.5rem;
  }
`;

const IntroWrapper = styled.div`
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    width: 60vw;
  }
  display: none;
`;

const Introduction = () => {
  return (
    <IntroWrapper>
      <VegeNantes>
        <img src={DesktopLogo} alt="VegeNantes GO" />
      </VegeNantes>
      <p>
        La chasse aux plantes est ouverte dans les parcs et jardins de Nantes.
      </p>
      <p>A vous de toutes les attraper!!</p>
    </IntroWrapper>
  );
};

export default Introduction;
