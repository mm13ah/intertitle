import React from 'react';
import styled from 'styled-components';
import homeImg from '../../images/home/Intertitle.svg';

const Div = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
  margin: 80px auto;
  img {
    width: 100%;
  }
  h1 {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4em;
    letter-spacing: 4px;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    letter-spacing: 3px;
  }
`;

const Home = () => (
  <Div className="home">
    <img src={homeImg} alt="" />
    <h1>Intertitle Limited</h1>
    <h2>Subtitling &amp; transcription</h2>
  </Div>
);


export default Home;
