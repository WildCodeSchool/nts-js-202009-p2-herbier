import React from 'react';
import styled from 'styled-components';
import main from './pictures/main.png';

const media = {
  desktop: '@media(min-width:768px)',
};

const LeftBar = styled.img`
  ${media.desktop} {
    display: inline;
  }
  display: none;
  height: 83vh;
  width: 20vw;
  z-index: 5;
  position: fixed;
  object-fit: cover;
  left: 0;
  top: 0;
  transform: translateX(-1vw) translateY(4rem);
  border-radius: 5px;
`;

const RightBar = styled.img`
  ${media.desktop} {
    display: inline;
  }
  display: none;
  height: 83vh;
  width: 20vw;
  z-index: 5;
  position: fixed;
  object-fit: cover;
  right: 0;
  top: 0;
  transform: translateX(1vw) translateY(4rem);
  border-radius: 5px;
`;

const SideBars = () => {
  return (
    <div>
      <LeftBar src={main} alt="leftBar" />
      <RightBar src={main} alt="rigthBar" />
    </div>
  );
};

export default SideBars;
