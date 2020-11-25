import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import menuProfil from './logos/menu-profil.svg';
import menuHerbier from './logos/menu-herbier.svg';
import menuHome from './logos/menu-home.svg';
import menuQrcode from './logos/menu-qrcode.svg';
import menuContact from './logos/main-contact.svg';
import menuPicker from './logos/menu-picker.svg';
import menuLogo from './logos/menu-logo.svg';

const Global = createGlobalStyle`
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  body {
    margin: 0;
    padding: 0;
  }
`;

const MenuIcon = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1.4px;
    position: relative;
    transition: opacity 150ms, transform 200ms;

    :first-child {
      transform: ${({ nav }) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const Wrapper = styled.header`
  z-index: 100;
  background: #8fae44;
  width: 100vw;
  height: 3rem;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Scan = styled.div`
  float: right;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  margin-left: 3rem;
  @media (min-width: 768px) {
    padding: 0;
    float: left;
    margin-left: 1rem;
    padding-top: 0.3rem;
  }
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: fit-content;
  width: fit-content;
  top: 2rem;
  margin-top: 0.5rem;
  background: #8fae44;
  position: absolute;
  border-radius: 5px;
  transition: transform 200ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(-100%)')};
  @media (min-width: 768px) {
    transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(0)')};
    display: flex;
    flex-direction: row;
    top: 0;
    width: 100%;
    margin-left: 12rem;
  }

  .contact {
    height: 30px;
    width: 30px;
  }

  .desktop {
    @media (min-width: 768px) {
      display: none;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 0;
    @media (min-width: 768px) {
      transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(0)')};
      display: flex;
      flex-direction: row;
      align-items: space-around;
      justify-content: space-evenly;
      width: 75%;
      margin-top: 0;
    }
  }

  li {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    font-family: 'Roboto', sans-serif;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  img {
    margin-right: 0.5rem;
  }
`;

const Box = styled.div`
  margin-bottom: 4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 0.7rem;
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

const HeaderMobile = (props) => {
  const [nav, showNav] = useState(false);
  const { pseudo } = props;

  return (
    <Box>
      <Global />
      <Wrapper>
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
          <ul>
            <li className="desktop">
              <StyledLink to="/" onClick={() => (nav ? showNav(!nav) : true)}>
                <img src={menuHome} alt="Accueil" />
                Accueil
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/profil"
                onClick={() => (nav ? showNav(!nav) : true)}
              >
                <img src={menuProfil} alt="Profil" />
                {pseudo}
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/around-me"
                onClick={() => (nav ? showNav(!nav) : true)}
              >
                <img src={menuPicker} alt="Autour de moi" />
                Autour de moi
              </StyledLink>
            </li>
            <li className="desktop">
              <StyledLink
                to="/scan"
                onClick={() => (nav ? showNav(!nav) : true)}
              >
                <img src={menuQrcode} alt="Scanner une plante" />
                Scanner une plante
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/herbier"
                onClick={() => (nav ? showNav(!nav) : true)}
              >
                <img src={menuHerbier} alt="Mon herbier" />
                Mon herbier
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="/contact"
                onClick={() => (nav ? showNav(!nav) : true)}
              >
                <img src={menuContact} alt="contact" className="contact" />
                Nous contacter
              </StyledLink>
            </li>
          </ul>
        </MenuLinks>
        <Scan>
          <StyledLink to="/scan">
            <img src={menuQrcode} alt="Scan logo" />
          </StyledLink>
        </Scan>
        <Logo to="/">
          <img src={menuLogo} alt="Logo" />
        </Logo>
      </Wrapper>
    </Box>
  );
};

HeaderMobile.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default HeaderMobile;
