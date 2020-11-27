import React from 'react';
import styled from 'styled-components';
import BenProfile from './pictures/Ben-profile.jpg';
import FannyProfile from './pictures/Fanny-profile.jpg';
import NicolasProfile from './pictures/Nicolas-profile.jpg';
import GwenProfile from './pictures/Gwen-profile.jpg';
import AymericProfile from './pictures/Aymeric-profile.jpg';
import Couronne from './logos/profil-cycle.svg';
import SideBars from './SideBars';

const Member = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;

    .Nicolas {
      margin-right: 1.5rem;
    }
  }

  div {
    margin-left: 1rem;

    h3 {
      font-size: 18px;
      text-align: center;
    }

    i {
      font-size: 3rem;
      margin-right: 1rem;
      margin-left: 1rem;
      @media (min-width: 768px) {
        :hover {
          transform: scale(1.3);
          transition: transform ease-in 150ms;
        }
      }
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
  @media (min-width: 768px) {
    margin-right: 1.5rem;
  }
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
  margin-left: 1.8rem;
  width: 85%;
  background-color: #69c5b2;
  color: white;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 50%;
    margin-left: 0;
  }
`;

const Laurier = styled.div`
  background: url(${Couronne}) no-repeat center/cover;
  height: 190px;
  width: 210px;
  transform: translate(-2.9rem, -0.9rem);
`;

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 60%;
  }
`;

const Page = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const AboutUs = () => {
  return (
    <Page>
      <Head>
        <h1>A propos de nous</h1>
        <h3>L'équipe de VegeNantes Go !</h3>
      </Head>
      <Wrapper>
        <Member>
          <Benoit>
            <Laurier />
          </Benoit>
          <div>
            <h3>Benoit LE BOURDONNEC</h3>
            <a href="https://github.com/Benoit2109">
              <i
                className="fa fa-github-square"
                style={{ color: ' #69C5B2' }}
              />
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
          <div className="Nicolas">
            <h3>Nicolas BONAMY</h3>
            <a href="https://github.com/NicolasBonamy">
              <i
                className="fa fa-github-square"
                style={{ color: ' #69C5B2' }}
              />
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
            <h3>Gwenvaël LASKAR</h3>
            <a href="https://github.com/rouxxi">
              <i
                className="fa fa-github-square"
                style={{ color: ' #69C5B2' }}
              />
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
            <h3>Fanny DEBRABANT</h3>
            <a href="https://github.com/fdebrabant">
              <i
                className="fa fa-github-square"
                style={{ color: ' #69C5B2' }}
              />
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
            <h3>Aymeric LANCIEN</h3>
            <a href="https://github.com/Aymeric-Lancien">
              <i
                className="fa fa-github-square"
                style={{ color: ' #69C5B2' }}
              />
            </a>
            <a href="https://www.google.fr/">
              <i
                className="fa fa-linkedin-square"
                style={{ color: ' #E27A70' }}
              />
            </a>
          </div>
        </Member>
      </Wrapper>
      <SideBars />
    </Page>
  );
};

export default AboutUs;
