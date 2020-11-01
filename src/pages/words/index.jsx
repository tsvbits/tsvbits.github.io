import React from 'react';
import { App } from 'words-app-components';
import 'words-app-components/dist/index.css';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

const Page = () => {
  return (
    <Layout noThemeSwitch>
      <main className="post-page">
        <App style={{ width: '100%' }} />
        <Footer />
      </main>
    </Layout>
  );
};

export default Page;
