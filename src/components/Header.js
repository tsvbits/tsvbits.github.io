import React from 'react';
import { Link } from 'gatsby';

import github from 'simple-icons/icons/github';
import linkedin from 'simple-icons/icons/linkedin';
import twitter from 'simple-icons/icons/twitter';
import CR from 'simple-icons/icons/codersrank';
import { Icon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';

import { scale } from '../utils/typography';

function SvgLink({ href, icon, title }) {
  return (
    <a
      className="icon simple-icon"
      target="_blank"
      href={href}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      title={title}
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
          <b>tsvbits</b>
        </Link>
      </h1>
      <span className="internet-links">
        <SvgLink
          href="https://profile.codersrank.io/user/sergeyt/"
          icon={CR}
          title="CodersRank Profile"
        />
        <SvgLink
          href="https://www.github.com/sergeyt"
          icon={github}
          title="GitHub Profile"
        />
        <SvgLink
          href="https://www.linkedin.com/in/sergeytodyshev"
          icon={linkedin}
          title="LinkedIn Profile"
        />
        <SvgLink
          href="https://www.twitter.com/todysh"
          icon={twitter}
          title="Twitter"
        />
        <a
          className="icon"
          href="/sponsor"
          style={{ fontSize: 37, color: '#444' }}
          title="Sponsor me"
        >
          <Icon icon={heartOutlined} />
        </a>
      </span>
    </div>
  );
}
