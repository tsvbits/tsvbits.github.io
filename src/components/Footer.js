import React from 'react';

import { rhythm } from '../utils/typography';

function License() {
  return (
    <div className="license">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        />
      </a>
      <br />
      This work is licensed under a{' '}
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </a>
      .
    </div>
  );
}

function Links() {
  return (
    <div>
      <div style={{ float: 'right' }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
      <a
        href="https://mobile.twitter.com/todysh"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{' '}
      &bull;{' '}
      <a
        href="https://github.com/sergeyt"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>{' '}
      &bull;{' '}
      <a
        href="https://www.linkedin.com/in/sergeytodyshev"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
      &bull; <a href="/resume/">resume</a>
      <span style={{ fontSize: 'smaller', marginLeft: 100 }}>
        icons by <a href="https://simpleicons.org/">simple icons</a>
      </span>
    </div>
  );
}

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <Links />
        <License />
      </footer>
    );
  }
}

export default Footer;
