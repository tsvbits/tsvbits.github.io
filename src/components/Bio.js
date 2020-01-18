import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
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
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://github.com/sergeyt">Sergey Todyshev</a>. I&nbsp;may
          write few words here from time to time. You can{' '}
          <a ref="mailto:stodyshev@gmail.com">email me</a> to get{' '}
          <a href="/support">technical support</a>
        </p>
      </div>
    );
  }
}

export default Bio;
