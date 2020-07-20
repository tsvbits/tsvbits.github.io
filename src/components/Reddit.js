import React from 'react';
import useSWR from 'swr';
import moment from 'moment';
import ContentLoader from 'react-content-loader';

export default function RedditComments({ reddit }) {
  if (!reddit) {
    return null;
  }
  const { data, error } = useSWR(reddit, fetcher);
  if (error) {
    // TODO render error
    return null;
  }
  const comments = data ? (
    data.map((item, i) => <Comment key={i} data={item.data} level={0} />)
  ) : (
    <Loader />
  );
  return (
    <div className="reddit">
      <a className="heading" href={reddit} target="_blank">
        Reddit Comments
      </a>
      {comments}
    </div>
  );
}

function fetcher(reddit) {
  const redditJson = `${reddit}.json`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    redditJson
  )}`;
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => JSON.parse(data.contents))
    .then((data) => data[1].data.children);
}

function Comment({ data, level }) {
  const author = data.author == 'todysh' ? 'sergeyt' : data.author;
  const authorLink = `https://www.reddit.com/user/${data.author}/`;
  const comments = (data?.replies?.data?.children || []).map((item, i) => (
    <Comment key={i} data={item.data} level={level + 1} />
  ));
  return (
    <div className="comment" style={{ marginLeft: level > 0 ? 10 : 0 }}>
      <div className="comment-header">
        <a className="author" href={authorLink} target="_blank">
          {author}
        </a>
        <span className="dot"> · </span>
        <a className="when" href={data.permalink} target="_blank">
          {moment.unix(data.created).fromNow()}
        </a>
      </div>
      <Body data={data} />
      {comments}
    </div>
  );
}

function Body({ data }) {
  if (data.body_html) {
    const html = data.body_html
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
    return (
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <div className="comment-body">{data.body}</div>;
}

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={100}
    viewBox="0 0 800 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);
