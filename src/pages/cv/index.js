import React from 'react';
import qs from 'query-string';
import useSWR from 'swr';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import useTheme from '../../utils/use-theme';
import Resume from '../../components/Resume';
import resume from './resume.json';
import Loader from '../../components/Loader';

function useQuery(location) {
  return qs.parse(location ? location.search : '');
}

function cors(url) {
  if (url.startsWith('https://gist.githubusercontent.com/')) {
    return url;
  }
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
}

function useResume(src) {
  if (!src) {
    return { data: resume };
  }
  return useSWR(`resume.json?src=${src}`, () => {
    if (src.match(/[A-Fa-f0-9]{32}/)) {
      return fetch(`https://api.github.com/gists/${src}`)
        .then((r) => r.json())
        .then((r) => JSON.parse(r.files[Object.keys(r.files)[0]].content));
    }
    return fetch(cors(q.src)).then((r) => r.json());
  });
}

const Page = ({ location }) => {
  const q = useQuery(location);
  const { data, error } = useResume(q.src);
  const theme = useTheme();
  const dark = theme === 'dark';

  if (error) {
    return (
      <Layout>
        <main className="post-page">
          <div className="error">Something goes wrong.</div>
        </main>
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <main className="post-page">
          <Loader />
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="post-page">
        <Resume resume={data} style={{ marginTop: 50 }} dark={dark} />
        <Footer />
      </main>
    </Layout>
  );
};

export default Page;
