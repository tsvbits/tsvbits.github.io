import _ from 'lodash';

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  let bowls = 0;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`;
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}

export function compact(value) {
  if (_.isArray(value)) {
    return value.map(compact).filter(_.identity);
  }
  if (_.isPlainObject(value)) {
    return _.reduce(
      value,
      (acc, val, key) => {
        if (_.isNil(val)) {
          return acc;
        }
        if (_.isArray(val) || _.isPlainObject(val)) {
          val = compact(val);
          if (_.isEmpty(val)) {
            return acc;
          }
        }
        return _.assign(acc, { [key]: val });
      },
      {}
    );
  }
  return value;
}
