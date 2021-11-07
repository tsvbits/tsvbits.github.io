import map from 'lodash/map';
import filter from 'lodash/filter';
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
    const cr = /cr-([\w\d]+)/;
    const m = cr.exec(src);
    if (m) {
      const username = m[1];
      return fetchCodersRankResume(username);
    }
    if (src === 'cr') {
      return fetchCodersRankResume('sergeyt');
    }
    if (src.match(/[A-Fa-f0-9]{32}/)) {
      return fetchJSON(`https://api.github.com/gists/${src}`).then((r) =>
        JSON.parse(r.files[Object.keys(r.files)[0]].content)
      );
    }
    return fetchJSON(q.src, true);
  });
}

async function fetchCodersRankResume(username) {
  const user = await fetchJSON(
    `https://api.codersrank.io/v2/users/${username}?get_by=username`
  );
  const exp = await fetchJSON(
    `https://api.codersrank.io/v2/users/${username}/work_experiences?get_by=username`
  );
  const ed = await fetchJSON(
    `https://api.codersrank.io/v2/users/${username}/education?get_by=username`
  );
  return {
    basics: {
      name: [user.first_name, user.last_name].filter((s) => !!s).join(' '),
      summary: user.intro,
      website: user.social_links?.personal_website,
      picture: user.avatar_url,
      profiles: filter(
        user.social_links,
        (t, k) => k !== 'personal_website'
      ).map((url) => ({ url })),
    },
    languages: map(user.spoken_languages, (x) => ({
      language: x.language,
      fluency: x.proficiency,
    })),
    work: map(exp.work_experiences, (x) => ({
      position: x.title,
      company: x.company,
      summary: x.description,
      startDate: x.start_date,
      endDate: x.end_date,
    })),
    education: ed.education.map((x) => ({
      institution: x.name,
      startDate: x.start_date,
      endDate: x.end_date,
    })),
  };
}

function fetchJSON(url, useCorsProxy = false) {
  return fetch(useCorsProxy ? cors(url) : url).then((r) => r.json());
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
