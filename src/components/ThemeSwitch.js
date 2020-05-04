import React from 'react';
import Toggle from './Toggle';

import { Icon } from '@iconify/react';
import moonIcon from '@iconify/icons-uil/moon';
import sunIcon from '@iconify/icons-uil/sun';

function MoonIcon() {
  return <Icon icon={moonIcon} />;
}

function SunIcon() {
  return <Icon icon={sunIcon} style={{ color: 'white' }} />;
}

export default function ThemeSwitch({ theme }) {
  return theme !== null ? (
    <Toggle
      icons={{
        checked: <MoonIcon />,
        unchecked: <SunIcon />,
      }}
      checked={theme === 'dark'}
      onChange={(e) =>
        window.__setPreferredTheme(e.target.checked ? 'dark' : 'light')
      }
    />
  ) : (
    <div style={{ height: '24px' }} />
  );
}
