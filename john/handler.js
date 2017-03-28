'use strict';

module.exports.sing = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'All you need is love'
    })
  };

  callback(null, response);
};
