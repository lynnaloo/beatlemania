'use strict';

module.exports.sing = (event, context, callback) => {
  console.log('All you need is love');
  callback(null, {
    statusCode: 200,
    body: 'All you need is love'
  });
};
