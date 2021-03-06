import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
