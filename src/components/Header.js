import React from 'react';
import { Link } from 'gatsby';

import github from 'simple-icons/icons/github';
import linkedin from 'simple-icons/icons/linkedin';
import twitter from 'simple-icons/icons/twitter';
import { Icon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';

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

export default function Header() {
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
          <b>tsvbit</b>
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
        <a
          className="icon"
          href="/sponsor"
          style={{ fontSize: 37, color: '#444' }}
        >
          <Icon icon={heartOutlined} />
        </a>
      </span>
    </div>
  );
}
