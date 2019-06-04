import React from 'react';
import styled from 'styled-components';

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
  p {
    width: 60%;
    margin: auto;
    line-height: 2;
    font-size: 1.2em;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }
  input, textarea {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid white;
    background: #111;
    /* font-size: 2em; */
  }
`;

const Contact = () => (
  <Div id="contact">
    <h2>Get In Touch</h2>
    <p>
      Got a question? Need a quote? Or want to find out more about us? Get in touch below.
    </p>
    <form>
      <label htmlFor="name">
        Name:
        <br />
        <input id="name" type="text" placeholder="Name" />
      </label>
      <label htmlFor="email">
        Email:
        <br />
        <input id="email" type="email" placeholder="Email" />
      </label>
      <label htmlFor="message">
        Message:
        <br />
        <textarea id="message" type="text" rows="8" placeholder="Message" />
      </label>
    </form>
  </Div>
);

export default Contact;
