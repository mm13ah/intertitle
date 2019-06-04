import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  font-size: 1.2em;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 1);
  z-index: 1;
  border-bottom: 1px solid white;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style-type: none;
    padding: 0;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
  }
  li {
    text-align: center;
    letter-spacing: 2.5px;
  }
  .active {
    border-bottom: 1px solid white;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAbout: false, isBusiness: false, isContact: false,
    };
  }

  componentDidMount() {
    const about = document.getElementById('about');
    const business = document.getElementById('business');
    const contact = document.getElementById('contact');
    document.addEventListener('scroll', () => {
      const isContact = window.scrollY >= contact.getBoundingClientRect().top + window.scrollY - 1;
      const isBusiness = window.scrollY >= (business.getBoundingClientRect().top + window.scrollY - 1) && !isContact; // eslint-disable-line max-len
      const isAbout = window.scrollY >= (about.getBoundingClientRect().top + window.scrollY - 1) && !isContact && !isBusiness; // eslint-disable-line max-len
      this.setState({
        isAbout, isBusiness, isContact,
      });
    });
  }

  render() {
    const { isAbout, isBusiness, isContact } = this.state;
    return (
      <Nav>
        <ul>
          <li><a className={isAbout ? 'active' : undefined} href="#about">Who We Are</a></li>
          <li><a className={isBusiness ? 'active' : undefined} href="#business">What We Offer</a></li>
          <li><a className={isContact ? 'active' : undefined} href="#contact">Get In Touch</a></li>
        </ul>
      </Nav>
    );
  }
}

export default Navbar;
