import React from 'react';
import styled from 'styled-components';
import main from './pictures/main.png';

const LeftBar = styled.img`
  height: 80vh;
  width: 20vw;
  z-index: 5;
  position: fixed;
  object-fit: cover;
  left: 0;
  top: 0;
  transform: translateX(-1vw) translateY(4rem);
  border-radius: 10px;
`;

const RightBar = styled.img`
  height: 80vh;
  width: 20vw;
  z-index: 5;
  position: fixed;
  object-fit: cover;
  right: 0;
  top: 0;
  transform: translateX(1vw) translateY(4rem);
  border-radius: 10px;
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
