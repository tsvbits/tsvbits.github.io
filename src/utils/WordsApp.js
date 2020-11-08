import React, { useEffect, useState } from 'react';
import WordsApp from 'words-app-components';
import 'words-app-components/dist/index.css';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

function useTheme() {
  const [theme, setTheme] = useState(window.__theme);

  useEffect(() => {
    const listener = () => {
      setTheme(window.__theme);
    };
    document.addEventListener('themechange', listener);
    return () => {
      document.removeEventListener('themechange', listener);
    };
  });

  return theme;
}

const App = () => {
  const theme = useTheme();
  const dark = theme === 'dark';
  return (
    <Layout>
      <main className="post-page">
        <WordsApp style={{ width: '100%' }} dark={dark} />
        <Footer />
      </main>
    </Layout>
  );
};

export default App;
