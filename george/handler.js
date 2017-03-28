'use strict';

module.exports.sing = (request, response) => {
  console.log('All you need is love');
  response.status(200).send('All you need is love!');
};
