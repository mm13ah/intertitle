import React from 'react';
import styled from 'styled-components';
import divideImg from '../../images/shared/filmStrip.svg';

const Div = styled.div`
  background: white;
  display: block;
  img {
    width: 100%;
    display: inherit;
  }
`;

const Divider = () => (
  <Div>
    <img src={divideImg} alt="" />
    {/* <img src={divideImg} alt="" /> */}
  </Div>
);

export default Divider;
