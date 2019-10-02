/* eslint-disable require-await */

module.exports.sing = async function(context, req) {
  context.log('All you need is love');
  context.res = {
    body: 'All you need is love',
  };
};
