import map from 'lodash/map';
import filter from 'lodash/filter';

export async function fetchCodersRankResume(username) {
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
      label: 'Software Engineer',
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
