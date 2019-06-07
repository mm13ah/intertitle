/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  min-height: 100vh;
  text-align: center;
  width: 100%;
  margin: 80px auto 0;
  /* Adds spacing to page anchor */
  display: flex;
  flex-direction: column;
  align-items: center;
  &:before {
    display: block;
    content: " ";
    /* margin-top: -80px; */
    height: 80px;
    visibility: hidden;
    pointer-events: none;
  }
  h2 {
    font-size: 2.3em;
    letter-spacing: 2px;
  }
  p {
    width: 60%;
    margin: auto;
    line-height: 2;
    font-size: 1.2em;
  }
`;

const Form = styled.form`
  width: 80vw;
  display: grid;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 100px;
  align-items: center;
  input, textarea {
    /* background-color: #111; */
    /* color: whitesmoke; */
    margin-bottom: 20px;
    padding: 5px;
    border-width: 2px;
    font-size: 1.3em;
  }
  textarea {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono&display=swap');
    font-family: 'Open Sans', sans-serif;
  }
  input::placeholder, textarea::placeholder {
    /* color: whitesmoke; */
  }
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
  @media screen and (min-width: 992px) {
    width: 30vw;
  }
`;

const Label = styled.label`
  @media screen {
    display: none;
  }
`;

const Contact = () => (
  <Div id="contact">
    <h2>Get In Touch</h2>
    <p>
      Got a question? Need a quote? Or want to find out more about us? Get in touch below.
    </p>
    <Form name="contact" method="POST" data-netlify="true">
      <Label htmlFor="name">Name:</Label>
      <input id="name" type="text" placeholder="Name" />
      <Label htmlFor="email">Email:</Label>
      <input id="email" type="email" placeholder="Email" />
      <Label htmlFor="message">Message:</Label>
      {/* // eslint-disable-next-line react/self-closing-comp */}
      <textarea id="message" type="text" placeholder="Message" rows="8" />
      <input type="submit" value="Submit" />
    </Form>
  </Div>
);

export default Contact;
