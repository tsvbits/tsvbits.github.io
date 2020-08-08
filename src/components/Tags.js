import React from 'react';
import map from 'lodash/map';

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {map(tags, (t, i) => (
        <a key={i} href={`/tags/${t}`}>
          {t}
        </a>
      ))}
    </div>
  );
}
