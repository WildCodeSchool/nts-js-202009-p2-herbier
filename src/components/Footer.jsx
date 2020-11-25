import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Copyright from './logos/footer-copyright.svg';

const Global = createGlobalStyle`
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    padding-bottom: 5rem;
    position: relative;
  }
`;

const Wrapper = styled.footer`
  background: #8fae44;
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  margin-top: 1rem;
  z-index: 100;
  @media (min-width: 768px) {
    height: 2.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style-type: none;
    padding: 0.4rem;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  li {
    font-family: 'Roboto', sans-serif;
    height: 50%;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    @media (min-width: 768px) {
      :first-child {
        margin-right: 4rem;
      }
    }
  }
`;

const Copy = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.7rem;
  p {
    margin: 0;
    margin-left: 0.3rem;
    color: white;
    transform: translateY(-1px);
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Global />
      <Links>
        <ul>
          <li>
            <StyledLink to="/contact">Contactez nous</StyledLink>
          </li>
          <li>
            <StyledLink to="/about-us">A propos de nous</StyledLink>
          </li>
        </ul>
      </Links>
      <Copy>
        <img src={Copyright} alt="Copyright" />
        <p>Copyright - 2020</p>
      </Copy>
    </Wrapper>
  );
};

export default Footer;
