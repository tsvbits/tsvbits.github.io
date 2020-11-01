import React from 'react';
import WordsApp from 'words-app-components';
import 'words-app-components/dist/index.css';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Layout noThemeSwitch>
      <main className="post-page">
        <WordsApp style={{ width: '100%' }} />
        <Footer />
      </main>
    </Layout>
  );
};

export default App;
