import React from 'react';
import { Link } from 'gatsby';

import github from 'simple-icons/icons/github';
import linkedin from 'simple-icons/icons/linkedin';
import twitter from 'simple-icons/icons/twitter';

import { scale } from '../utils/typography';

function SvgLink({ href, icon }) {
  return (
    <a
      className="icon simple-icon"
      target="_blank"
      href={href}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    ></a>
  );
}

export default function Header({ location, title }) {
  const rootPath = `${__PATH_PREFIX__}/`;

  if (location.pathname === rootPath) {
    return (
      <div className="root-header">
        <h1
          style={{
            ...scale(0.75),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textTitle)',
            }}
            to={'/'}
          >
            {'tsvbit'}
          </Link>
        </h1>
        <span className="internet-links">
          <a
            className="icon sourcerer"
            target="_blank"
            href="https://sourcerer.io/sergeyt"
          >
            <img
              src="https://sourcerer.io/icons/logo-sharing.svg"
              height="24px"
              alt="Sourcerer"
            />
          </a>
        </span>
        <span className="internet-links" style={{ marginLeft: 50 }}>
          <SvgLink href="https://www.github.com/sergeyt" icon={github} />
          <SvgLink
            href="https://www.linkedin.com/in/sergeytodyshev"
            icon={linkedin}
          />
          <SvgLink href="https://www.twitter.com/todysh" icon={twitter} />
        </span>
      </div>
    );
  } else {
    return (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: 0,
          height: 42, // because
          lineHeight: '2.625rem',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'var(--textLink)',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
    );
  }
}
