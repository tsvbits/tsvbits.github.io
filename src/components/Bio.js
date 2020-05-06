import React from 'react';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: rhythm(2),
        }}
      >
        <div style={{ maxWidth: 500 }}>
          <a href="https://github.com/sergeyt">SergeyT</a>'s dev blog.{' '}
          <a href="/about">More about me</a>
        </div>
      </div>
    );
  }
}

export default Bio;
