import React from 'react';
import styled from 'styled-components';
import MainButton from './MainButton';
import './logos/qrcode.svg';
import './logos/main-herbier.svg';
import './logos/main-decouverte.svg';
import SideBars from './SideBars';
import Introduction from './IntroductionDesktop';

const media = {
  desktop: '@media(min-width:768px)',
};

const HomePageWrap = styled.div`
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
  }
`;

function HomePage() {
  return (
    <HomePageWrap>
      <Introduction />
      <MainButton />
      <SideBars />
    </HomePageWrap>
  );
}

export default HomePage;
