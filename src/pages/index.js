import React from 'react';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';
import Home from '../components/shared/home';
import Divider from '../components/shared/divider';
import About from '../components/about';
import Business from '../components/business';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Divider />
    <About />
    <Divider />
    <Business />
    <Divider />
    <Contact />
  </Layout>
);

export default IndexPage;
