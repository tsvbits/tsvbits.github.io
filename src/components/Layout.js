import React from 'react';
import Helmet from 'react-helmet';
import { ErrorBoundary } from 'react-error-boundary';

import { rhythm } from '../utils/typography';
import ThemeSwitch from './ThemeSwitch';
import Header from './Header';

class Layout extends React.Component {
  state = {
    theme: null,
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: this.state.theme === 'light' ? '#ffa8c5' : '#282c35',
            },
          ]}
        />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(25),
            padding: `2.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2.625rem',
            }}
          >
            <Header />
            {this.props.noThemeSwitch ? null : (
              <ThemeSwitch theme={this.state.theme} />
            )}
          </header>
          {children}
        </div>
      </div>
    );
  }
}

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
