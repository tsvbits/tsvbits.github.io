import React from 'react';
import TextLoop from 'react-text-loop';
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
          <a href="/about">SergeyT</a>'s blog.{' '}
          <TextLoop>
            <a href="/skills">I write programs</a>
            <a href="/projects">I am doer</a>
            <a href="/table-tennis">I play table tennis</a>
            <a href="/about">Learn more</a>
          </TextLoop>
          <br />
          Please check it out my <a href="/linguabook">LinguaBook App</a>
        </div>
      </div>
    );
  }
}

export default Bio;
