'use strict';

module.exports.calculate = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        result: '6',
        fred: event        
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
