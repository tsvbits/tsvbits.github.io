import React from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';

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
          <a className="icon" href="https://sourcerer.io/sergeyt">
            <img
              src="https://sourcerer.io/icons/logo-sharing.svg"
              height="24px"
              alt="Sourcerer"
            />
          </a>
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
