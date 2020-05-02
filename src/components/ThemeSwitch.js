import React from 'react';
import Toggle from './Toggle';

// TODO replace with svg
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

export default function ThemeSwitch({ theme }) {
  return theme !== null ? (
    <Toggle
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
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
