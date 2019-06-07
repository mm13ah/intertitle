import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  min-height: 5vh;
  background-color: #111;
  border-top: solid 1px white;
  /* padding-bottom: 50px; */
  /* color: #111; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Footer = () => (
  <Div>
    <p>
      Copyright Intertitle Ltd.
      &copy;
      {' '}
      {new Date().getFullYear()}
    </p>
  </Div>
);

export default Footer;
