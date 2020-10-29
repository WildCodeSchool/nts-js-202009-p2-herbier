import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: solid 1px;
  border-color:#69c5b2;
  background-color: #69c5b2;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90%;
  display: flex;
  justify-content: center;
  margin:2rem 0;
`;

const TitleScan = styled.h1`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:1.7rem;
`;

const Scan = () => (
  <Container>
    <TitleScan>Scanner une plante</TitleScan>
  </Container>
);

export default Scan;
