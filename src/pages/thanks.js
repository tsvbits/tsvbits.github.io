import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

class Thanks extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <h1>Thank you for subscribing.</h1>
          <p>
            You are now confirmed. You can expect to receive emails as I create
            new content.
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ThanksSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Thanks;
