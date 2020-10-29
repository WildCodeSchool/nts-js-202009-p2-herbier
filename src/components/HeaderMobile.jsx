import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import menuProfil from './logos/menu-profil.svg';
import menuHerbier from './logos/menu-herbier.svg';
import menuHome from './logos/menu-home.svg';
import menuQrcode from './logos/menu-qrcode.svg';
import menuDecouverte from './logos/menu-decouverte.svg';
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
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  outline: none;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 150ms, transform 200ms;

    :first-child {
      transform: ${({ nav }) => (nav ? 'rotate(44deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? 'rotate(-44deg)' : 'rotate(0)')};
    }
  }
`;
const Wrapper = styled.header`
  background: #8fae44;
  width: 100vw;
  height: 3rem;
`;

const Scan = styled.div`
  float: right;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  margin-left: 2rem;
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

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  li {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: white;
    margin-left: 0.7rem;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 0.5rem;
  }
`;

const HeaderMobile = () => {
  const [nav, showNav] = useState(false);

  return (
    <div>
      <Global />
      <Wrapper>
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
          <ul>
            <li>
              <a href="a">
                <img src={menuHome} alt="Accueil" />
                Accueil
              </a>
            </li>
            <li>
              <a href="a">
                <img src={menuProfil} alt="Profil" />
                Profil
              </a>
            </li>
            <li>
              <a href="a">
                <img src={menuPicker} alt="Autour de moi" />
                Autour de moi
              </a>
            </li>
            <li>
              <a href="a">
                <img src={menuQrcode} alt="Scanner une plante" />
                Scanner une plante
              </a>
            </li>
            <li>
              <a href="a">
                <img src={menuHerbier} alt="Mon herbier" />
                Mon herbier
              </a>
            </li>
            <li>
              <a href="a">
                <img src={menuDecouverte} alt="Découverte" />
                Découverte ?
              </a>
            </li>
          </ul>
        </MenuLinks>
        <Scan>
          <a href="a">
            <img src={menuQrcode} alt="Scan logo" />
          </a>
        </Scan>
        <Logo>
          <img src={menuLogo} alt="Logo" />
        </Logo>
      </Wrapper>
    </div>
  );
};

export default HeaderMobile;
