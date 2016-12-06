'use strict';

module.exports.hello =(event, context, callback)=>{
  
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Code Deploy via Pipeline',
  //     input: event,
  //   }),
  // };
  const response = createResponse();
 

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


function createResponse(){
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Code Deploy via Pipeline 2'
    })
  };
  return response;
}

exports.createResponse = createResponse;

