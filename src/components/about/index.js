import React from 'react';
import styled from 'styled-components';
import apple from '../../images/about/apple.svg';
import bbc from '../../images/about/bbc.svg';
import gold from '../../images/about/gold.svg';
import google from '../../images/about/google.svg';
import netflix from '../../images/about/netflix.svg';
import prime from '../../images/about/prime.svg';

const Div = styled.div`
  min-height: 100vh;
  text-align: center;
  width: 100%;
  margin: 80px auto 0;
  /* Adds spacing to page anchor */
  &:before { 
    display: block; 
    content: " "; 
    margin-top: -80px; 
    height: 80px; 
    visibility: hidden; 
    pointer-events: none;
  }
  h2 {
    font-size: 2.3em;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 2em;
    letter-spacing: 1.5px;
  }
  p {
    width: 60%;
    margin: auto;
    line-height: 2;
    font-size: 1.3em;
  }
`;

const LogoContainer = styled.div`
  width: 90%;
  margin: 50px auto 150px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
  justify-items: center;
  align-items: center;
  img {
    max-width: 50%;
    /* height: 100%; */
  }
`;

const About = () => (
  <Div id="about">
    <h2>Who We Are</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam. Eu feugiat pretium
      nibh ipsum consequat. Amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et. Cras pulvinar mattis nunc sed blandit. Nulla facilisi cras fermentum odio eu.
      Mauris vitae ultricies leo integer malesuada nunc vel risus. Lectus quam id leo in vitae
      turpis. Et ultrices neque ornare aenean. Sed odio morbi quis commodo odio. Tristique
      sollicitudin nibh sit amet commodo nulla facilisi. Aliquam ut porttitor leo a diam
      sollicitudin tempor id eu.
    </p>
    <h3 style={{ marginTop: '100px' }}>Subtitles produced for:</h3>
    <LogoContainer>
      <img src={bbc} alt="" />
      <img src={gold} alt="" />
      <img src={google} alt="" />
      <img src={netflix} alt="" />
      <img src={apple} style={{ height: '100%' }} alt="" />
      <img src={prime} alt="" />
    </LogoContainer>
  </Div>
);

export default About;
