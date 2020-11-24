import React from 'react';
import styled from 'styled-components';
import BenProfile from './pictures/Ben-profile.jpg';
import FannyProfile from './pictures/Fanny-profile.jpeg';
import NicolasProfile from './pictures/Nicolas-profile.jpg';
import GwenProfile from './pictures/Gwen-profile.jpg';
import AymericProfile from './pictures/Aymeric-profile.jpg';
import Couronne from './logos/profil-cycle.svg';

const Member = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  div {
    margin-left: 1rem;

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }

    i {
      font-size: 3rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

const Benoit = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(${BenProfile}) no-repeat center/cover;
`;
const Nicolas = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(${NicolasProfile}) no-repeat center/cover;
`;
const Gwen = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(${GwenProfile}) no-repeat center/cover;
`;
const Fanny = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(${FannyProfile}) no-repeat center/cover;
`;
const Aymeric = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: url(${AymericProfile}) no-repeat center/cover;
`;

const Head = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
  padding: 0;

  div {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #000000;
    margin: 2rem 1.5rem;
    padding: 0;
  }
`;

const Laurier = styled.div`
  background: url(${Couronne}) no-repeat center/cover;
  height: 170px;
  width: 190px;
  transform: translateX(-2.25rem);
`;

const AboutUs = () => {
  return (
    <div>
      <Head>
        <h1>A propos de nous</h1>
        <h3>L'équipe de VegeNantes Go !</h3>
        <div />
      </Head>
      <Member>
        <Benoit>
          <Laurier />
        </Benoit>
        <div>
          <h3>Benoit Le Bourdonnec</h3>
          <a href="https://github.com/Benoit2109">
            <i className="fa fa-github-square" style={{ color: ' #69C5B2' }} />
          </a>
          <a href="http://www.linkedin.com/in/benoit-le-bourdonnec">
            <i
              className="fa fa-linkedin-square"
              style={{ color: ' #E27A70' }}
            />
          </a>
        </div>
      </Member>
      <Member>
        <Nicolas>
          <Laurier />
        </Nicolas>
        <div>
          <h3>Nicolas Bonamy</h3>
          <a href="https://github.com/NicolasBonamy">
            <i className="fa fa-github-square" style={{ color: ' #69C5B2' }} />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-bonamy/">
            <i
              className="fa fa-linkedin-square"
              style={{ color: ' #E27A70' }}
            />
          </a>
        </div>
      </Member>
      <Member>
        <Gwen>
          <Laurier />
        </Gwen>
        <div>
          <h3>Gwenvaël Laskar</h3>
          <a href="https://github.com/rouxxi">
            <i className="fa fa-github-square" style={{ color: ' #69C5B2' }} />
          </a>
          <a href="https://www.linkedin.com/in/gwenvael-laskar-39096a1b8">
            <i
              className="fa fa-linkedin-square"
              style={{ color: ' #E27A70' }}
            />
          </a>
        </div>
      </Member>
      <Member>
        <Fanny>
          <Laurier />
        </Fanny>
        <div>
          <h3>Fanny Debrabant</h3>
          <a href="https://github.com/fdebrabant">
            <i className="fa fa-github-square" style={{ color: ' #69C5B2' }} />
          </a>
          <a href="http://www.linkedin.com/in/fanny-debrabant">
            <i
              className="fa fa-linkedin-square"
              style={{ color: ' #E27A70' }}
            />
          </a>
        </div>
      </Member>
      <Member>
        <Aymeric>
          <Laurier />
        </Aymeric>
        <div>
          <h3>Aymeric Lancien</h3>
          <a href="https://github.com/Aymeric-Lancien">
            <i className="fa fa-github-square" style={{ color: ' #69C5B2' }} />
          </a>
          <a href="https://www.google.fr/">
            <i
              className="fa fa-linkedin-square"
              style={{ color: ' #E27A70' }}
            />
          </a>
        </div>
      </Member>
    </div>
  );
};

export default AboutUs;
