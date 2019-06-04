import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';

const Div = styled.div`
  text-align: center;
  font-size: 1.3em;
  .link {
    color: white;
  }
`;

const Title = styled.h1`
  margin-top: 250px;
  font-size: 2.3em;
`;

const NotFoundPage = () => (
  <Layout>
    <Div>
      <SEO title="404: Not found" />
      <Title>NOT FOUND</Title>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Return home
        {' '}
        <Link className="link" to="/">here</Link>
        .
      </p>
    </Div>
  </Layout>
);

export default NotFoundPage;
