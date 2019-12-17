'use strict';
var calculator = require('./calculator.js') 

module.exports.calculate = async event => {
console.log(event);
console.log(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        result: calculator.calculate(JSON.parse(event.body).problem)        
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
