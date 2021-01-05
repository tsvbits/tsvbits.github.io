import React from 'react';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import useTheme from '../../utils/use-theme';
import Resume from '../../components/Resume';
import resume from './resume.json';

const Page = () => {
  const theme = useTheme();
  const dark = theme === 'dark';
  return (
    <Layout>
      <main className="post-page">
        <Resume resume={resume} style={{ marginTop: 50 }} dark={dark} />
        <Footer />
      </main>
    </Layout>
  );
};

export default Page;
