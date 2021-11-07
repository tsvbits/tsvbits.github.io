import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { ErrorBoundary } from 'react-error-boundary';
import { useMediaQuery } from 'react-responsive';

import { rhythm } from '../utils/typography';
import ThemeSwitch from './ThemeSwitch';
import Header from './Header';

function useTheme() {
  const [theme, setTheme] = useState(window?.__theme);
  useEffect(() => {
    if (window) {
      window.__onThemeChange = () => {
        setTheme(window.__theme);
      };
    }
  }, []);
  return theme;
}

const Layout = ({ children, noThemeSwitch }) => {
  const theme = useTheme();
  const isPrintMedia = useMediaQuery({
    query: 'print',
  });
  const appStyle = isPrintMedia
    ? {}
    : {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(30),
        padding: `2.625rem ${rhythm(3 / 4)}`,
      };

  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        width: '100%',
        height: '100vh',
      }}
    >
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: theme === 'light' ? '#ffa8c5' : '#282c35',
          },
        ]}
      />
      <div style={appStyle}>
        {isPrintMedia ? null : (
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.625rem',
            }}
          >
            <Header />
            {noThemeSwitch ? null : <ThemeSwitch theme={theme} />}
          </header>
        )}
        {children}
      </div>
    </div>
  );
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const SafeLayout = (props) => {
  try {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Layout {...props} />
      </ErrorBoundary>
    );
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
};

export default SafeLayout;
