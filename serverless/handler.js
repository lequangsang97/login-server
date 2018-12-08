"use strict";

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
let count = 0;
module.exports.loadImage = async (event, context, callback) => {
  const fs = require("fs");

  var image = fs.readFileSync("./image/nodejs.png");
  var response = {
    statusCode: 200,
    headers: {
      "Content-Type": "image/png"
    },
    body: image.toString("base64"),
    isBase64Encoded: true
  };

  fs.appendFileSync(
    "./log/server.txt",
    `${event.requestContext.identity.sourceIp} : ${new Date().toLocaleString()} - ${event.requestContext.identity.userAgent}\n`
  );
  callback(null, response);
};
