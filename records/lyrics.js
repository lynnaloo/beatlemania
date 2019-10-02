const sample = require('lodash.sample');

const lyrics = [
  'All you need is love.',
  'We all wanna change the world.',
  'One thing I can tell you is we got to be free.',
  'I get by with a little help from my friends.',
  'Here comes the sun, it’s alright.',
  'It’s been a hard day’s night, I should be sleeping like a log.'
];

module.exports = lyrics;
module.exports.random = sample(lyrics);
