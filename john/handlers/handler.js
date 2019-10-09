/* eslint-disable require-await */

module.exports.sing = async (event) => {
  return {
    statusCode: 200,
    body: 'All you need is love (and AWS and dogs)',
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
