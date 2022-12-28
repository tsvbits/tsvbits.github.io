import React from 'react';
import { Link } from 'gatsby';
import loadable from '@loadable/component';
import { useMediaQuery } from 'react-responsive';

import '../fonts/fonts-post.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Panel from '../components/Panel';
import Tags from '../components/Tags';
import { formatPostDate, formatReadingTime } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';
import {
  codeToLanguage,
  createLanguageLink,
  loadFontsForCode,
} from '../utils/i18n';

const Reddit = loadable(() => import('../components/Reddit'));

const GITHUB_USERNAME = 'tsvbits';
const GITHUB_REPO_NAME = 'tsvbits.com';
const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

class Translations extends React.Component {
  render() {
    let { translations, lang, languageLink, editUrl } = this.props;

    let readerTranslations = translations.filter((lang) => lang !== 'ru');
    let hasRussianTranslation = translations.indexOf('ru') !== -1;

    return (
      <div className="translations">
        <Panel style={{ fontFamily: systemFont }}>
          {translations.length > 0 && (
            <span>
              {hasRussianTranslation && (
                <span>
                  Originally written in:{' '}
                  {'en' === lang ? (
                    <b>{codeToLanguage('en')}</b>
                  ) : (
                    <Link to={languageLink('en')}>English</Link>
                  )}
                  {' • '}
                  {'ru' === lang ? (
                    <b>Русский (авторский перевод)</b>
                  ) : (
                    <Link to={languageLink('ru')}>
                      Русский (авторский перевод)
                    </Link>
                  )}
                  <br />
                  <br />
                </span>
              )}
              <span>Translated by readers into: </span>
              {readerTranslations.map((l, i) => (
                <React.Fragment key={l}>
                  {l === lang ? (
                    <b>{codeToLanguage(l)}</b>
                  ) : (
                    <Link to={languageLink(l)}>{codeToLanguage(l)}</Link>
                  )}
                  {i === readerTranslations.length - 1 ? '' : ' • '}
                </React.Fragment>
              ))}
            </span>
          )}
          {lang !== 'en' && (
            <>
              <br />
              <br />
              {lang !== 'ru' && (
                <>
                  <Link to={languageLink('en')}>Read the original</Link>
                  {' • '}
                  <a href={editUrl} target="_blank" rel="noopener noreferrer">
                    Improve this translation
                  </a>
                  {' • '}
                </>
              )}
              <Link to={`/${lang}`}>View all translated posts</Link>{' '}
            </>
          )}
        </Panel>
      </div>
    );
  }
}

function RedditLink({ reddit }) {
  if (!reddit) {
    return null;
  }
  return (
    <a href={reddit} target="_blank">
      Discuss on Reddit
    </a>
  );
}

function TwitterLink({ enSlug }) {
  const q = encodeURIComponent(`https://tsvbits.com${enSlug}`);
  const url = `https://mobile.twitter.com/search?q=${q}`;
  return (
    <a href={url} target="_blank">
      Discuss on Twitter
    </a>
  );
}

function Buymeacoffee() {
  return (
    <div className="buymeacoffee">
      <a href="https://www.buymeacoffee.com/todysh" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
}

const BlogPostTemplate = ({ pageContext }) => {
  let {
    html,
    timeToRead,
    title,
    date,
    spoiler,
    previous,
    next,
    slug,
    translations,
    translatedLinks,
    tags,
    reddit,
    langKey: lang,
  } = pageContext;
  const isPrintMedia = useMediaQuery({
    query: 'print',
  });

  // Replace original links with translated when available.
  translatedLinks.forEach((link) => {
    // jeez
    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    let translatedLink = '/' + lang + link;
    html = html.replace(
      new RegExp('"' + escapeRegExp(link) + '"', 'g'),
      '"' + translatedLink + '"'
    );
  });

  translations = translations.slice();
  translations.sort((a, b) => {
    return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
  });

  loadFontsForCode(lang);
  // TODO: this curried function is annoying
  const languageLink = createLanguageLink(slug, lang);
  const enSlug = languageLink('en');

  const showByemeacoffee = !['resume', 'cover', 'about', 'sponsor'].some(
    (s) => slug.toLowerCase().indexOf(s) >= 0
  );

  return (
    <Layout>
      <SEO
        lang={lang}
        title={title}
        description={spoiler}
        slug={slug}
        tags={tags}
      />
      <main className="post-page">
        <article>
          <header>
            <h1 style={{ color: 'var(--textTitle)' }}>{title}</h1>
            <Tags tags={tags} />
            <p
              style={{
                ...scale(-1 / 5),
                display: 'block',
                marginBottom: rhythm(1),
              }}
            >
              {formatPostDate(date, lang)}
              {` • ${formatReadingTime(timeToRead)}`}
            </p>
            {translations.length > 0 && (
              <Translations
                translations={translations}
                editUrl={editUrl}
                languageLink={languageLink}
                lang={lang}
              />
            )}
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {!isPrintMedia && (
            <footer>
              {showByemeacoffee ? <Buymeacoffee /> : null}
              <Reddit reddit={reddit} />
              <p>
                <RedditLink reddit={reddit} />
                {` • `}
                <TwitterLink enSlug={enSlug} />
              </p>
            </footer>
          )}
        </article>
      </main>
      <aside>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: rhythm(0.25),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
            }}
            to={'/'}
          >
            tsvbits
          </Link>
        </h3>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{ marginRight: 20 }}
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Layout>
  );
};

export default BlogPostTemplate;
