import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
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
        <img
          src={profilePic}
          alt={`Sergey Todyshev`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <div style={{ maxWidth: 500 }}>
          Hey, here is <a href="https://github.com/sergeyt">SergeyT</a>'s pages.{' '}
          <a href="/about">More about me</a>
        </div>
      </div>
    );
  }
}

export default Bio;
