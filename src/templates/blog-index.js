import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import Tags from '../components/Tags';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  render() {
    const langKey = this.props.pageContext.langKey;

    const allMarkdownRemark = get(this, 'props.data.allMarkdownRemark') || {};
    const posts = allMarkdownRemark.edges || [];

    return (
      <Layout>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main className="blog-index">
          {langKey !== 'en' && langKey !== 'ru' && (
            <Panel>
              These articles have been{' '}
              <a
                href="https://github.com/gaearon/overreacted.io#contributing-translations"
                target="_blank"
                rel="noopener noreferrer"
              >
                translated by the community
              </a>
              .
            </Panel>
          )}

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const tags = get(node, 'frontmatter.tags') || [];
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: rhythm(3 / 4),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <Tags tags={tags} />
                  <small>
                    {formatPostDate(node.frontmatter.date, langKey)}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query ($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
          }
        }
      }
    }
  }
`;
