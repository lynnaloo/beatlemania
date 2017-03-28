'use strict';

module.exports.sing = function (context, req) {
  context.log('All you need is love');
  context.done(null, { body: 'All you need is love' });
};
