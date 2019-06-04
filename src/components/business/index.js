import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faKeyboard, faPoundSign } from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
  min-height: 100vh;
  text-align: center;
  width: 100%;
  margin: 100px auto 0;
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
    font-size: 1.6em;
    letter-spacing: 1.3px;
  }
  p {
    width: 60%;
    margin: auto;
    line-height: 2;
    font-size: 1.3em;
  }
`;

const IconContainer = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  justify-items: center;
  align-items: center;
  div {
    width: 100%;
    background: rgba(200, 200, 200, 0.1);
  }
  .icon {
    margin-top: 20px;
    font-size: 2.7em;
  }
  p {
    font-size: 1em;
    text-align: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    width: 90%;
  }
`;

const Business = () => (
  <Div id="business">
    <h2>What We Offer</h2>
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
    <IconContainer style={{ marginTop: '100px' }}>
      <div>
        <FontAwesomeIcon className="icon" icon={faClock} />
        <h3>Fast Turnaround</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam.
          Eu feugiat pretium nibh ipsum consequat.
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon={faKeyboard} />
        <h3>Guaranteed Accuracy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam.
          Eu feugiat pretium nibh ipsum consequat.
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="icon" icon={faPoundSign} />
        <h3>Competitive Pricing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque aliquam.
          Eu feugiat pretium nibh ipsum consequat.
        </p>
      </div>
    </IconContainer>
  </Div>
);

export default Business;
