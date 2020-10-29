import React from 'react';
import Button from './Button.jsx';
import Description from './Description.jsx';
import Scan from './Scan.jsx';
import Reader from './Reader.jsx';
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
overflow-X:hidden`;

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ScanPage() {
  return (
    <PageStyle>
      <Global />
      <Scan />
      <Reader />
      <Description />
      <Button />
    </PageStyle>
  );
}

export default ScanPage;
