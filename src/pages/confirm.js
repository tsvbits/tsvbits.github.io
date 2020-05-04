import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

class Confirm extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <h1>Just one more thing...</h1>
          <p>
            Thank you for subscribing. You will need to check your inbox and
            confirm your subscription.
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ConfirmSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Confirm;
